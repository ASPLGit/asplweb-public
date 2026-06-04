import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function sendLoginOTP(
    email: string,
    otp: string
) {
    try {
        const info =
            await transporter.sendMail({
                from: `"AplombSoft Admin" <${process.env.EMAIL_USER}>`,

                to: email,

                subject:
                    "Your Login OTP",

                html: `
          <div style="font-family: Arial, sans-serif;">
            <h2>AplombSoft Admin Login</h2>

            <p>
              Your OTP is:
            </p>

            <h1 style="letter-spacing: 4px;">
              ${otp}
            </h1>

            <p>
              This OTP is valid for
              10 minutes.
            </p>

            <p>
              If you did not request
              this login, please
              ignore this email.
            </p>
          </div>
        `,
            });

        console.log(
            "Email sent:",
            info.messageId
        );

        return {
            success: true,
            messageId:
                info.messageId,
        };
    } catch (error) {
        console.error(
            "Email send error:",
            error
        );

        return {
            success: false,
            error,
        };
    }
}