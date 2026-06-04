type OTPRecord = {
  email: string;
  otp: string;
  expiresAt: number;
  attempts: number;
  resendAvailableAt: number;
};

const globalForOTP =
  globalThis as typeof globalThis & {
    __otpStore?: Map<
      string,
      OTPRecord
    >;
  };

const otpStore =
  globalForOTP.__otpStore ??
  new Map<
    string,
    OTPRecord
  >();

globalForOTP.__otpStore =
  otpStore;

export function generateOTP() {
  return Math.floor(
    100000 +
      Math.random() * 900000
  ).toString();
}

export function saveOTP(
  email: string,
  otp: string
) {
  otpStore.set(email, {
    email,
    otp,
    expiresAt:
      Date.now() +
      10 * 60 * 1000,
    attempts: 0,
    resendAvailableAt:
      Date.now() +
      30 * 1000,
  });
}

export function verifyOTP(
  email: string,
  otp: string
) {
  const record =
    otpStore.get(email);

  if (!record) {
    return {
      success: false,
      error:
        "OTP not found or expired",
    };
  }

  if (
    Date.now() >
    record.expiresAt
  ) {
    otpStore.delete(email);

    return {
      success: false,
      error: "OTP expired",
    };
  }

  if (record.otp !== otp) {
    record.attempts++;

    const remainingAttempts =
      5 - record.attempts;

    if (
      record.attempts >= 5
    ) {
      otpStore.delete(email);

      return {
        success: false,
        error:
          "Maximum attempts exceeded. Please login again.",
      };
    }

    return {
      success: false,
      error: `Invalid OTP. ${remainingAttempts} attempts remaining.`,
    };
  }

  otpStore.delete(email);

  return {
    success: true,
  };
}

export function canResendOTP(
  email: string
) {
  const record =
    otpStore.get(email);

  if (!record) {
    return true;
  }

  return (
    Date.now() >=
    record.resendAvailableAt
  );
}

export function getRemainingCooldown(
  email: string
) {
  const record =
    otpStore.get(email);

  if (!record) {
    return 0;
  }

  return Math.max(
    0,
    Math.ceil(
      (record.resendAvailableAt -
        Date.now()) /
        1000
    )
  );
}
