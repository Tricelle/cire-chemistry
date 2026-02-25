import { NextResponse } from "next/server";
import { Resend } from "resend";
import { intakeFormSchema } from "@/lib/utils/validators";
import { createRateLimiter, getClientIP } from "@/lib/utils/rate-limit";
import { siteConfig } from "@/lib/config";

const intakeRateLimiter = createRateLimiter("intake", {
  windowMs: 60 * 60 * 1000,
  maxRequests: 3,
});

export async function POST(request: Request) {
  try {
    const ip = getClientIP(request);

    const { allowed, retryAfter } = intakeRateLimiter.check(ip);
    if (!allowed) {
      return NextResponse.json(
        {
          error: `Too many requests. Please try again in ${Math.ceil(retryAfter! / 60)} minutes.`,
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    // Extract form fields
    const formFields = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      ingredientList: formData.get("ingredientList") as string,
      percentages: formData.get("percentages") as string,
      manufacturingMethod: (formData.get("manufacturingMethod") as string) || "",
      targetClaims: formData.get("targetClaims") as string,
      problems: formData.get("problems") as string,
      testingResults: (formData.get("testingResults") as string) || "",
      hasManufacturer: formData.get("hasManufacturer") as string,
      timeline: (formData.get("timeline") as string) || "",
      targetPrice: (formData.get("targetPrice") as string) || "",
    };

    // Validate
    const result = intakeFormSchema.safeParse(formFields);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Handle file upload
    const file = formData.get("formulaDocument") as File | null;
    let attachments: Array<{ filename: string; content: Buffer }> = [];

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      attachments = [
        {
          filename: file.name,
          content: Buffer.from(bytes),
        },
      ];
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const contactEmail =
        process.env.CONTACT_EMAIL || "hello@example.com";

      const emailText = [
        "=== FORMULA INTAKE QUESTIONNAIRE ===",
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        "",
        "1. INGREDIENT LIST (INCI NAMES):",
        data.ingredientList,
        "",
        "2. PERCENTAGES:",
        data.percentages,
        "",
        "3. MANUFACTURING/MIXING METHOD:",
        data.manufacturingMethod || "Not provided",
        "",
        "4. TARGET CLAIMS:",
        data.targetClaims,
        "",
        "5. SPECIFIC PROBLEMS:",
        data.problems,
        "",
        "6. TESTING RESULTS:",
        data.testingResults || "Not provided",
        "",
        "7. MANUFACTURER SELECTED:",
        data.hasManufacturer,
        "",
        "8. TIMELINE:",
        data.timeline || "Not provided",
        "",
        "9. TARGET RETAIL PRICE:",
        data.targetPrice || "Not provided",
        "",
        "10. FORMULA DOCUMENT:",
        file ? `Attached: ${file.name}` : "Not provided",
      ].join("\n");

      // 1. Notification to business owner
      const { error: emailError } = await resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        replyTo: data.email,
        subject: `[Intake] Formula Intake from ${data.name}`,
        text: emailText,
        attachments: attachments.length > 0 ? attachments : undefined,
      });

      if (emailError) {
        console.error("[Intake] Failed to send email:", emailError);
        return NextResponse.json(
          { error: "Failed to process submission" },
          { status: 500 }
        );
      }

      // 2. Auto-confirmation to client with 60-min audit booking link
      const { error: confirmError } = await resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: "Your formula details have been received",
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #3E2723;">
            <p style="font-size: 16px; line-height: 1.7;">Hi ${data.name},</p>
            <p style="font-size: 16px; line-height: 1.7;">
              Thank you for submitting your formula details. I'll be reviewing everything in depth before our session.
            </p>
            <p style="font-size: 16px; line-height: 1.7;">
              <strong>Next step:</strong> Schedule your 60-minute audit session at a time that works for you.
            </p>
            <p style="font-size: 16px; line-height: 1.7;">
              <a href="${siteConfig.calendlyAuditUrl}" style="color: #C4A4A4; text-decoration: underline;">${siteConfig.calendlyAuditUrl}</a>
            </p>
            <p style="font-size: 16px; line-height: 1.7;">
              Looking forward to our session,<br />
              ${siteConfig.name}
            </p>
          </div>
        `,
      });

      if (confirmError) {
        console.error("[Intake] Failed to send confirmation:", confirmError);
        // Don't fail — the notification was already sent
      }
    } else {
      console.log("[Intake] No RESEND_API_KEY configured, skipping email");
      console.log("[Intake] Form data:", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Intake] Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
