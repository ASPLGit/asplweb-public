import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function requireAdmin(
  debugLabel?: string
) {
  const cookieStore =
    await cookies();

  const token =
    cookieStore.get(
      "admin_token"
    )?.value;

  if (debugLabel) {
    console.log(
      `[${debugLabel}] admin_token:`,
      token
    );
  }

  if (!token) {
    throw new Error(
      "Unauthorized"
    );
  }

  const payload =
    await verifyToken(token);

  if (debugLabel) {
    console.log(
      `[${debugLabel}] verifyToken result:`,
      payload
    );
  }

  if (!payload) {
    throw new Error(
      "Unauthorized"
    );
  }

  return payload;
}
