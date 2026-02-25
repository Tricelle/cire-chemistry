import { NextResponse } from "next/server";
import { Resend } from "resend";
import { inquiryFormSchema } from "@/lib/utils/validators";
import { createRateLimiter, getClientIP } from "@/lib/utils/rate-limit";
import { siteConfig } from "@/lib/config";

const inquiryRateLimiter = createRateLimiter("inquiry", {
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 3,
});

function getAutoReplyHtml(name: string, hasFormula: "Yes" | "No"): string {
  if (hasFormula === "Yes") {
    return `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #3E2723;">
        <p style="font-size: 16px; line-height: 1.7;">Hi ${name},</p>
        <p style="font-size: 16px; line-height: 1.7;">
          Thanks for your inquiry. Based on your submission, the <strong>Formulation Audit</strong> may be a great fit.
        </p>
        <p style="font-size: 16px; line-height: 1.7;">
          Book a 15-minute call to discuss:
          <br />
          <a href="${siteConfig.calendlyUrl}" style="color: #C4A4A4; text-decoration: underline;">${siteConfig.calendlyUrl}</a>
        </p>
        <p style="font-size: 16px; line-height: 1.7;">
          Looking forward to connecting,<br />
          ${siteConfig.name}
        </p>
      </div>
    `;
  }

  return `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #3E2723;">
      <p style="font-size: 16px; line-height: 1.7;">Hi ${name},</p>
      <p style="font-size: 16px; line-height: 1.7;">
        Thanks for reaching out. Based on where you are, <strong>Custom Formulation Development</strong> would be the best fit.
      </p>
      <p style="font-size: 16px; line-height: 1.7;">
        I'm currently booking for <strong>Fall 2026</strong>. Reply to this email to be added to the waitlist.
      </p>
      <p style="font-size: 16px; line-height: 1.7;">
        Looking forward to working with you,<br />
        ${siteConfig.name}
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIP(request);

    const { allowed, retryAfter } = inquiryRateLimiter.check(ip);
    if (!allowed) {
      return NextResponse.json(
        {
          error: `Too many requests. Please try again in ${Math.ceil(retryAfter! / 60)} minutes.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    const result = inquiryFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, productType, hasFormula, description, website } =
      result.data;

    // Honeypot check
    if (website && website.length > 0) {
      console.log("[Inquiry] Honeypot triggered, rejecting submission");
      return NextResponse.json({ success: true });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const contactEmail =
        process.env.CONTACT_EMAIL || "hello@example.com";

      // 1. Notification to business owner
      const { error: notifyError } = await resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        replyTo: email,
        subject: `[New Inquiry] ${productType} from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Product Type: ${productType}`,
          `Has Existing Formula: ${hasFormula}`,
          ``,
          `Description:`,
          description,
        ].join("\n"),
      });

      if (notifyError) {
        console.error("[Inquiry] Failed to send notification:", notifyError);
        return NextResponse.json(
          { error: "Failed to process inquiry" },
          { status: 500 }
        );
      }

      // 2. Conditional auto-reply to inquirer
      const autoReplySubject =
        hasFormula === "Yes"
          ? "Your formula review inquiry has been received"
          : "Your product development inquiry has been received";

      const { error: replyError } = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: autoReplySubject,
        html: getAutoReplyHtml(name, hasFormula),
      });

      if (replyError) {
        console.error("[Inquiry] Failed to send auto-reply:", replyError);
        // Don't fail the request - notification was already sent
      }
    } else {
      console.log(
        "[Inquiry] No RESEND_API_KEY configured, skipping email send"
      );
      console.log("[Inquiry] Would have sent to:", email, {
        name,
        productType,
        hasFormula,
        description,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Inquiry] Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
