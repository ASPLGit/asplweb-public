import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET
);

export async function createToken(
  email: string
) {
  return await new SignJWT({
    email,
    role: "admin",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);
}

export async function verifyToken(
  token: string
) {
  try {
    const { payload } =
      await jwtVerify(
        token,
        secret
      );

    return payload;
  } catch {
    return null;
  }
}