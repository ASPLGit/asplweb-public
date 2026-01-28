import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_TO:", process.env.EMAIL_TO);
        console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
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

        await transporter.sendMail({
            from: `"Aplombsoft Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO!,
            replyTo: email,
            subject: "New Contact Form Submission",
            html: `
                <h3>New Contact Message</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p>${message}</p>
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
