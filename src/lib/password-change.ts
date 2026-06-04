type PasswordChangeRecord = {
  email: string;
  newPassword: string;
  expiresAt: number;
};

const globalForPasswordChange =
  globalThis as typeof globalThis & {
    __passwordChangeStore?: Map<
      string,
      PasswordChangeRecord
    >;
  };

const passwordChangeStore =
  globalForPasswordChange.__passwordChangeStore ??
  new Map<
    string,
    PasswordChangeRecord
  >();

globalForPasswordChange.__passwordChangeStore =
  passwordChangeStore;

export function savePendingPassword(
  email: string,
  newPassword: string
) {
  passwordChangeStore.set(
    email,
    {
      email,
      newPassword,
      expiresAt:
        Date.now() +
        10 * 60 * 1000,
    }
  );
}

export function getPendingPassword(
  email: string
) {
  const record =
    passwordChangeStore.get(
      email
    );

  if (!record) {
    return null;
  }

  if (
    Date.now() >
    record.expiresAt
  ) {
    passwordChangeStore.delete(
      email
    );

    return null;
  }

  return record;
}

export function clearPendingPassword(
  email: string
) {
  passwordChangeStore.delete(
    email
  );
}
