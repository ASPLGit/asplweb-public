import { NextResponse } from "next/server";
import { ConfidentialClientApplication } from "@azure/msal-node";

export async function POST(req: Request) {
    try {
        const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY!;
        const formData = await req.formData();

        const jobTitle = formData.get("jobTitle") as string;
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const company = formData.get("company") as string;
        const experience = formData.get("experience") as string;
        const relocation = formData.get("relocation") as string;
        const resume = formData.get("resume") as File | null;
        const captchaToken = formData.get("captchaToken") as string;

        /* ===============================
           VALIDATION
        =============================== */

        if (!firstName || !email || !jobTitle) {
            return NextResponse.json(
                { error: "Required fields missing" },
                { status: 400 }
            );
        }

        if (!captchaToken) {
            return NextResponse.json(
                { error: "Captcha missing" },
                { status: 400 }
            );
        }

        if (resume) {
            const MAX_FILE_SIZE = 5 * 1024 * 1024;
            if (resume.size > MAX_FILE_SIZE) {
                return NextResponse.json(
                    { error: "File size must be less than 5MB" },
                    { status: 400 }
                );
            }

            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ];

            if (!allowedTypes.includes(resume.type)) {
                return NextResponse.json(
                    { error: "Only PDF or Word documents allowed" },
                    { status: 400 }
                );
            }
        }

        /* ===============================
           RECAPTCHA VERIFY
        =============================== */

        const recaptchaRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${RECAPTCHA_SECRET}&response=${captchaToken}`,
            }
        );

        const recaptchaData = await recaptchaRes.json();

        if (
            !recaptchaData.success ||
            recaptchaData.score < 0.5 ||
            recaptchaData.action !== "apply_job"
        ) {
            return NextResponse.json(
                { error: "Bot detected" },
                { status: 400 }
            );
        }

        /* ===============================
           MSAL AUTH
        =============================== */

        const msalConfig = {
            auth: {
                clientId: process.env.AZURE_CLIENT_ID!,
                authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
                clientSecret: process.env.AZURE_CLIENT_SECRET!,
            },
        };

        const cca = new ConfidentialClientApplication(msalConfig);

        const tokenResponse = await cca.acquireTokenByClientCredential({
            scopes: ["https://graph.microsoft.com/.default"],
        });

        const accessToken = tokenResponse?.accessToken;

        if (!accessToken) {
            throw new Error("Failed to acquire access token");
        }

        /* ===============================
           EMAIL TEMPLATE
        =============================== */

        const infoRow = (label: string, value: string) => `
<tr>
  <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#475569;font-weight:500;">
    ${label}
  </td>
  <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#0f172a;font-weight:600;">
    ${value}
  </td>
</tr>
`;


        const htmlContent = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8;padding:24px 0;">
      <tr>
        <td align="center">

          <!-- Main Container -->
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:8px;">
            
            <!-- Header -->
            <tr>
              <td style="padding:20px 24px;background-color:#0f3c8a;">
                <h2 style="margin:0;font-size:20px;font-weight:600;color:#ffffff;">
                  New Job Application
                </h2>
                <p style="margin:6px 0 0;font-size:14px;color:#ffffff;">
                  Position: ${jobTitle}
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${infoRow("Name:- ", `${firstName} ${lastName}`)}
                  ${infoRow("Email:- ", email)}
                  ${infoRow("Phone:- ", phone || "-")}
                  ${infoRow("Experience:- ", experience || "-")}
                  ${infoRow("Company:- ", company || "-")}
                  ${infoRow("Re-location:- ", relocation || "-")}
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background-color:#f8fafc;padding:16px 24px;font-size:12px;color:#64748b;">
                Sent from Aplombsoft Careers Portal
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;


        const attachments: {
            "@odata.type": string;
            name: string;
            contentType: string;
            contentBytes: string;
        }[] = [];


        if (resume) {
            const buffer = Buffer.from(await resume.arrayBuffer());

            attachments.push({
                "@odata.type": "#microsoft.graph.fileAttachment",
                name: resume.name,
                contentType: resume.type,
                contentBytes: buffer.toString("base64"),
            });
        }


        const graphResponse = await fetch(
            `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_USER}/sendMail`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: {
                        subject: `Job Application – ${jobTitle}`,
                        body: {
                            contentType: "HTML",
                            content: htmlContent,
                        },
                        toRecipients: [
                            {
                                emailAddress: { address: process.env.EMAIL_TO },
                            },
                        ],
                        bccRecipients: process.env.BACKUP_EMAIL
                            ? [
                                {
                                    emailAddress: {
                                        address: process.env.BACKUP_EMAIL,
                                    },
                                },
                            ]
                            : [],
                        replyTo: [
                            {
                                emailAddress: { address: email },
                            },
                        ],
                        attachments,
                    },
                }),
            }
        );

        if (!graphResponse.ok) {
            const errorText = await graphResponse.text();
            throw new Error(errorText);
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("APPLY JOB ERROR:", error);
        return NextResponse.json(
            { error: "Failed to submit application" },
            { status: 500 }
        );
    }
}
