import { NextResponse } from "next/server";
import { ConfidentialClientApplication } from "@azure/msal-node";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, captchaToken } = await req.json();

    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    /* ===============================
       RECAPTCHA VERIFICATION
    =============================== */

    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (
      !captchaData.success ||
      captchaData.score < 0.5 ||
      captchaData.action !== "contact_form"
    ) {
      return NextResponse.json(
        { error: "Bot detected" },
        { status: 403 }
      );
    }

    /* ===============================
       MSAL CONFIG
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

    const cleanPhone = (phone || "").replace(/\D/g, "");
    const hasRealPhone = cleanPhone.length > 2;

    const infoRow = (label: string, value: string) => `
<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e5e7eb;">
  <span style="font-size:14px;color:#475569;font-weight:500;">
    ${label}
  </span>
  <span style="font-size:14px;color:#0f172a;font-weight:600;text-align:right;max-width:60%;word-break:break-word;">
    ${value}
  </span>
</div>
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
                  New Contact Message
                </h2>
                <p style="margin:6px 0 0;font-size:14px;color:#ffffff;">
                  Someone reached out from the website
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${infoRow("Name :- ", name)}
                  ${infoRow(
      "Email :- ",
      `<a href="mailto:${email}" style="color:#007BFF;text-decoration:none;">${email}</a>`
    )}
                  ${hasRealPhone ? infoRow("Phone :- ", phone) : ""}
                </table>

                <!-- Message Box -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;background-color:#f8fafc;border-left:4px solid #007BFF;">
                  <tr>
                    <td style="padding:16px;">
                      <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;white-space:pre-line;">
                        ${message}
                      </p>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background-color:#f8fafc;padding:16px 24px;font-size:12px;color:#64748b;">
                Sent from Aplombsoft Contact Form
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;


    /* ===============================
       SEND MAIL VIA MICROSOFT GRAPH
    =============================== */

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
            subject: "New Contact Form Submission",
            body: {
              contentType: "HTML",
              content: htmlContent,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: process.env.EMAIL_TO,
                },
              },
            ],
            bccRecipients: [
              {
                emailAddress: {
                  address: process.env.BACKUP_EMAIL,
                },
              },
            ],
            replyTo: [
              {
                emailAddress: {
                  address: email,
                },
              },
            ],
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
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { error: "Mail sending failed" },
      { status: 500 }
    );
  }
}

