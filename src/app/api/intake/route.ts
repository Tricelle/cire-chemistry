import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";
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

    if (process.env.MAILJET_API_KEY && process.env.MAILJET_SECRET_KEY) {
      const mailjet = Mailjet.apiConnect(
        process.env.MAILJET_API_KEY,
        process.env.MAILJET_SECRET_KEY
      );
      const fromEmail =
        process.env.MAILJET_FROM_EMAIL || "hello@musesknlab.com";
      const fromName =
        process.env.MAILJET_FROM_NAME || "Cire Chemistry";
      const contactEmail =
        process.env.CONTACT_EMAIL || "tricellegray@gmail.com";

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

      try {
        // Prepare attachments for Mailjet format
        const mailjetAttachments = attachments.length > 0 ? attachments.map(att => ({
          ContentType: "application/octet-stream",
          Filename: att.filename,
          Base64Content: att.content.toString('base64'),
        })) : undefined;

        // 1. Notification to business owner
        await mailjet.post("send", { version: "v3.1" }).request({
          Messages: [
            {
              From: {
                Email: fromEmail,
                Name: fromName,
              },
              To: [
                {
                  Email: contactEmail,
                },
              ],
              ReplyTo: {
                Email: data.email,
                Name: data.name,
              },
              Subject: `[Intake] Formula Intake from ${data.name}`,
              TextPart: emailText,
              Attachments: mailjetAttachments,
            },
          ],
        });

        // 2. Auto-confirmation to client with 60-min audit booking link
        await mailjet.post("send", { version: "v3.1" }).request({
          Messages: [
            {
              From: {
                Email: fromEmail,
                Name: fromName,
              },
              To: [
                {
                  Email: data.email,
                  Name: data.name,
                },
              ],
              Subject: "Your formula details have been received",
              HTMLPart: `
                <!DOCTYPE html>
                <html>
                  <head><meta charset="utf-8"></head>
                  <body style="margin: 0; padding: 0; background-color: #F5F0E6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F0E6; padding: 40px 20px;">
                      <tr>
                        <td align="center">
                          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 8px; overflow: hidden;">
                            <!-- Header with Logo -->
                            <tr>
                              <td align="center" style="padding: 40px 40px 24px 40px;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48"><path d="M 32 2.5 C 37 2, 42 3.8, 46.5 6 C 51.5 8.5, 55.5 12, 58.5 16.5 C 60.5 20, 62 24.5, 62 29 C 62.2 34, 61.5 38.5, 59.5 42.5 C 57 47, 53.5 51, 49 54 C 44.5 57.2, 40 59.5, 35.5 61 C 31 62, 26 61.5, 21.5 59.5 C 17 57.5, 13 54, 10 49.5 C 7 45, 4.5 40, 3.5 35 C 2.5 30, 2.5 25, 4.5 20.5 C 6.5 16, 9.5 12, 13.5 8.5 C 17.5 5.5, 22 3.5, 27 2.8 C 29.5 2.4, 30.5 2.4, 32 2.5 Z" fill="#3E2723"/><path d="M 30 19 C 28 17.5, 25.5 17, 23 17 C 16.5 17, 13 23, 13 32 C 13 41, 16.5 47, 23 47 C 25.5 47, 28 46.5, 30 45 L 29.5 42.5 C 28 43.5, 26 44, 23.5 44 C 19 44, 17.5 39.5, 17.5 32 C 17.5 24.5, 19 20, 23.5 20 C 26 20, 28 20.5, 29.5 21.5 Z" fill="#F5F0E6"/><path d="M 50 19 C 48 17.5, 45.5 17, 43 17 C 36.5 17, 33 23, 33 32 C 33 41, 36.5 47, 43 47 C 45.5 47, 48 46.5, 50 45 L 49.5 42.5 C 48 43.5, 46 44, 43.5 44 C 39 44, 37.5 39.5, 37.5 32 C 37.5 24.5, 39 20, 43.5 20 C 46 20, 48 20.5, 49.5 21.5 Z" fill="#F5F0E6"/></svg>
                                <h2 style="margin: 16px 0 0 0; font-size: 20px; font-weight: 500; color: #3E2723; letter-spacing: 0.5px;">${siteConfig.name}</h2>
                                <p style="margin: 4px 0 0 0; font-size: 13px; color: #8B7355; letter-spacing: 1px;">INDEPENDENT COSMETIC FORMULATION LAB</p>
                              </td>
                            </tr>
                            <!-- Separator -->
                            <tr>
                              <td align="center" style="padding: 0 40px;">
                                <div style="width: 48px; height: 1px; background-color: #E0D8CE;"></div>
                              </td>
                            </tr>
                            <!-- Content -->
                            <tr>
                              <td style="padding: 32px 40px 40px 40px; color: #3E2723; font-size: 16px; line-height: 1.7;">
                                <p style="margin: 0 0 20px 0;">Hi ${data.name},</p>
                                <p style="margin: 0 0 20px 0;">Thank you for submitting your formula details. I'll be reviewing everything in depth before our session.</p>
                                <p style="margin: 0 0 24px 0;"><strong>Next step:</strong> Schedule your 60-minute audit session at a time that works for you.</p>
                                <p style="margin: 0 0 28px 0; text-align: center;">
                                  <a href="${siteConfig.calendlyAuditUrl}" style="display: inline-block; background-color: #3E2723; color: #F5F0E6; padding: 14px 32px; text-decoration: none; border-radius: 4px; font-weight: 500; letter-spacing: 0.5px;">Schedule Audit Session</a>
                                </p>
                                <p style="margin: 0;">
                                  Looking forward to our session,<br />
                                  <span style="font-weight: 500;">${siteConfig.name}</span>
                                </p>
                              </td>
                            </tr>
                            <!-- Footer -->
                            <tr>
                              <td style="padding: 24px 40px; background-color: #F5F0E6; text-align: center; font-size: 13px; color: #8B7355;">
                                <p style="margin: 0;">Phoenix, AZ • Serving brands nationwide</p>
                                <p style="margin: 8px 0 0 0;">${siteConfig.email}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </body>
                </html>
              `,
            },
          ],
        });
      } catch (mailjetError) {
        console.error("[Intake] Mailjet error:", mailjetError);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    } else {
      console.log("[Intake] No MAILJET credentials configured, skipping email");
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
