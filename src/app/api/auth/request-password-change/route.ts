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

import {
  savePendingPassword,
} from "@/lib/password-change";

export async function POST(
  request: Request
) {
  try {
    const {
      currentPassword,
      newPassword,
    } = await request.json();

    if (
      !currentPassword ||
      !newPassword
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const validPassword =
      await verifyPassword(
        currentPassword
      );

    if (!validPassword) {
      return NextResponse.json(
        {
          error:
            "Current password is incorrect",
        },
        {
          status: 401,
        }
      );
    }

    const email =
      process.env.ADMIN_EMAIL!;

    savePendingPassword(
      email,
      newPassword
    );

    console.log(
      "[request-password-change] saved pending password:",
      {
        email,
      }
    );

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
        "OTP sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to request password change",
      },
      {
        status: 500,
      }
    );
  }
}
