import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";

export async function GET() {
  try {
    const auth =
      await requireAdmin();

    return NextResponse.json({
      success: true,
      user: auth,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
}