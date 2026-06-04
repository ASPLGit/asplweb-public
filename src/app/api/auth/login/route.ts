import { NextResponse } from "next/server";
import {
    verifyPassword,
} from "@/lib/auth";

import {
    generateOTP,
    saveOTP,
} from "@/lib/otp";

import {
    sendLoginOTP,
} from "@/lib/email";

export async function POST(
    request: Request
) {
    try {
        const {
            email,
            captchaToken,
            password,
        } = await request.json();

        if (
            email !==
            process.env.ADMIN_EMAIL
        ) {
            return NextResponse.json(
                {
                    error:
                        "Invalid credentials",
                },
                {
                    status: 401,
                }
            );
        }

        const captchaRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    secret:
                        process.env.RECAPTCHA_SECRET_KEY!,
                    response:
                        captchaToken,
                }),
            }
        );

        const captchaData =
            await captchaRes.json();

        if (
            !captchaData.success ||
            captchaData.score < 0.5
        ) {
            return Response.json(
                {
                    error:
                        "Verification failed",
                },
                {
                    status: 400,
                }
            );
        }

        const validPassword =
            await verifyPassword(
                password
            );

        if (!validPassword) {
            return NextResponse.json(
                {
                    error:
                        "Invalid credentials",
                },
                {
                    status: 401,
                }
            );
        }

        const otp =
            generateOTP();

        saveOTP(
            email,
            otp
        );

        const emailResult =
            await sendLoginOTP(
                email,
                otp
            );

        if (
            !emailResult.success
        ) {
            return NextResponse.json(
                {
                    error:
                        "Failed to send OTP email",
                },
                {
                    status: 500,
                }
            );
        }
        return NextResponse.json({
            success: true,
            message:
                "OTP sent successfully",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                error:
                    "Login failed",
            },
            {
                status: 500,
            }
        );
    }
}