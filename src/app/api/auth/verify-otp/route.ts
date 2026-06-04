import {
    NextResponse,
} from "next/server";

import {
    verifyOTP,
} from "@/lib/otp";

import {
    createToken,
} from "@/lib/jwt";

export async function POST(
    request: Request
) {
    try {
        const {
            email,
            otp,
        } = await request.json();

        const result =
            verifyOTP(
                email,
                otp
            );

        if (!result.success) {
            return NextResponse.json(
                {
                    error:
                        result.error,
                },
                {
                    status: 401,
                }
            );
        }

        const token =
            await createToken(email);

        const response =
            NextResponse.json({
                success: true,
            });

        response.cookies.set(
            "admin_token",
            token,
            {
                httpOnly: true,
                secure:
                    process.env.NODE_ENV ===
                    "production",
                sameSite: "strict",
                maxAge:
                    60 *
                    60 *
                    24,
                path: "/",
            }
        );

        return response;
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                error:
                    "OTP verification failed",
            },
            {
                status: 500,
            }
        );
    }
}