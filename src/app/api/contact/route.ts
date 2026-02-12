import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message, captchaToken } = await req.json();

        if (!name || !email || !message || !captchaToken) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

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


        if (!captchaData.success || captchaData.score < 0.5) {
            return NextResponse.json(
                { error: "Bot detected" },
                { status: 403 }
            );
        }
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.EMAIL_PASS!,
            },
        });

        const cleanPhone = (phone || "").replace(/\D/g, "");

        // if only country code (e.g., 91) or empty → ignore
        const hasRealPhone =
            cleanPhone.length > 2;

        const infoRow = (label: string, value: string) => `
<div style="
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e5e7eb;
">
    <span style="
        font-size: 14px;
        color: #475569;
        font-weight: 500;
    ">
        ${label}
    </span>
    <span style="
        font-size: 14px;
        color: #0f172a;
        font-weight: 600;
        text-align: right;
        max-width: 60%;
        word-break: break-word;
    ">
        ${value}
    </span>
</div>
`;


        await transporter.sendMail({
            from: `"Aplombsoft Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO!,
            replyTo: email,
            subject: "New Contact Form Submission",
            html: `
<div style="
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f6f8;
    padding: 24px;
">
    <div style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    ">
        <!-- Header -->
        <div style="
            background: linear-gradient(135deg, #0f3c8a, #007BFF);
            padding: 20px 24px;
            color: #ffffff;
        ">
            <h2 style="
                margin: 0;
                font-size: 20px;
                font-weight: 600;
            ">
                New Contact Message
            </h2>
            <p style="
                margin: 6px 0 0;
                font-size: 14px;
                opacity: 0.9;
            ">
                Someone reached out from the website
            </p>
        </div>

        <!-- Content -->
        <div style="padding: 24px;">
            ${infoRow("Name :- ", name)}
            ${infoRow(
                "Email :- ",
                `<a href="mailto:${email}" style="color:#007BFF;text-decoration:none">${email}</a>`
            )}
            ${hasRealPhone
                    ? infoRow("Phone :- ", phone)
                    : ""}
            <!-- Message -->
            <div style="
                padding: 16px;
                background-color: #f8fafc;
                border-left: 4px solid #007BFF;
                border-radius: 6px;
            ">
                <p style="
                    margin: 0;
                    font-size: 14px;
                    color: #334155;
                    line-height: 1.6;
                    white-space: pre-line;
                ">
                    ${message}
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="
            background-color: #f8fafc;
            padding: 16px 24px;
            font-size: 12px;
            color: #64748b;
            text-align: center;
        ">
            Sent from Aplombsoft Contact Form
        </div>
    </div>
</div>
`,

        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("MAIL ERROR:", error);
        return NextResponse.json(
            { error: "Mail sending failed" },
            { status: 500 }
        );
    }
}

