import { NextResponse } from "next/server";

import {
  canResendOTP,
  getRemainingCooldown,
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
      captchaToken,
    } = await request.json();

    if (!captchaToken) {
      return NextResponse.json(
        {
          error:
            "Verification required",
        },
        {
          status: 400,
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
      return NextResponse.json(
        {
          error:
            "Verification failed",
        },
        {
          status: 400,
        }
      );
    }

    const email =
      process.env.ADMIN_EMAIL!;

    if (
      !canResendOTP(email)
    ) {
      return NextResponse.json(
        {
          error: `Please wait ${getRemainingCooldown(
            email
          )} seconds before requesting another OTP.`,
        },
        {
          status: 429,
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
            "Failed to send OTP",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "OTP resent successfully",
    });

  } catch (error) {
    console.error(
      "Resend OTP Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to resend OTP",
      },
      {
        status: 500,
      }
    );
  }
}