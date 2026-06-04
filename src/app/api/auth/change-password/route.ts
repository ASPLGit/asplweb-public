import { NextResponse } from "next/server";

import {
    verifyOTP,
} from "@/lib/otp";

import {
    getPendingPassword,
    clearPendingPassword,
} from "@/lib/password-change";

import {
    updatePasswordHash,
} from "@/lib/auth";
import {
    requireAdmin,
} from "@/lib/require-admin";

export async function POST(
    request: Request
) {
    try {
        try {
            await requireAdmin();
        } catch {
            return NextResponse.json(
                {
                    error: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }
        const { otp } =
            await request.json();

        if (!otp) {
            return NextResponse.json(
                {
                    error:
                        "OTP is required",
                },
                {
                    status: 400,
                }
            );
        }

        const email =
            process.env.ADMIN_EMAIL!;

        const validOTP =
            verifyOTP(
                email,
                otp
            );

        console.log(
            "[change-password] verifyOTP result:",
            validOTP
        );

        if (!validOTP.success) {
            return NextResponse.json(
                {
                    error:
                        validOTP.error ||
                        "Invalid OTP",
                },
                {
                    status: 401,
                }
            );
        }

        const pending =
            getPendingPassword(
                email
            );

        console.log(
            "[change-password] pending password result:",
            pending
                ? {
                    email:
                        pending.email,
                    expiresAt:
                        pending.expiresAt,
                  }
                : null
        );

        if (!pending) {
            return NextResponse.json(
                {
                    error:
                        "Password change request expired",
                },
                {
                    status: 400,
                }
            );
        }

        await updatePasswordHash(
            pending.newPassword
        );

        clearPendingPassword(
            email
        );

        const response =
            NextResponse.json({
                success: true,
                message:
                    "Password updated successfully",
            });

        response.cookies.set(
            "admin_token",
            "",
            {
                expires:
                    new Date(0),
                path: "/",
            }
        );

        return response;
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                error:
                    "Failed to change password",
            },
            {
                status: 500,
            }
        );
    }
}
