import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

        if (resume) {
            const MAX_FILE_SIZE = 5 * 1024 * 1024;

            if (resume.size > MAX_FILE_SIZE) {
                return NextResponse.json(
                    { error: "File size must be less than 5MB" },
                    { status: 400 }
                );
            }
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        if (resume && !allowedTypes.includes(resume.type)) {
            return NextResponse.json(
                { error: "Only PDF or Word documents allowed" },
                { status: 400 }
            );
        }



        if (!captchaToken) {
            return NextResponse.json(
                { error: "Captcha missing" },
                { status: 400 }
            );
        }

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
        // console.log("RECAPTCHA RESPONSE APPLYJOBFORM:", recaptchaData);

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




        if (!firstName || !email || !jobTitle) {
            return NextResponse.json(
                { error: "Required fields missing" },
                { status: 400 }
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

        const attachments = [];

        if (resume) {
            const buffer = Buffer.from(await resume.arrayBuffer());

            attachments.push({
                filename: resume.name,
                content: buffer,
                contentType: resume.type,
            });
        }

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
    ">
        ${value}
    </span>
</div>
`;


        await transporter.sendMail({
            from: `"Careers – Aplombsoft" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO!,
            replyTo: email,
            subject: `Job Application – ${jobTitle}`,
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
                New Job Application
            </h2>
            <p style="
                margin: 6px 0 0;
                font-size: 14px;
                opacity: 0.9;
            ">
                Position: ${jobTitle}
            </p>
        </div>

        <!-- Content -->
        <div style="padding: 24px;">
            ${infoRow("Name:- ", `${firstName} ${lastName}`)}
            ${infoRow("Email:- ", email)}
            ${infoRow("Phone:- ", phone || "-")}
            ${infoRow("Experience:- ", experience || "-")}
            ${infoRow("Company:- ", company || "-")}
            ${infoRow("Relocation:- ", relocation || "-")}
        </div>

        <!-- Footer -->
        <div style="
            background-color: #f8fafc;
            padding: 16px 24px;
            font-size: 12px;
            color: #64748b;
            text-align: center;
        ">
            Sent from Aplombsoft Careers Portal
        </div>
    </div>
</div>
`,

            attachments,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("APPLY JOB ERROR:", error);
        return NextResponse.json(
            { error: "Failed to submit application" },
            { status: 500 }
        );
    }
}
