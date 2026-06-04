import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const ADMIN_FILE = path.join(
    process.cwd(),
    "data",
    "admin.json"
);

export function getAdminData() {
    const fileContent = fs.readFileSync(
        ADMIN_FILE,
        "utf8"
    );

    return JSON.parse(fileContent);
}

export function saveAdminData(
    data: { passwordHash: string }
) {
    fs.writeFileSync(
        ADMIN_FILE,
        JSON.stringify(data, null, 2),
        "utf8"
    );
}

export async function verifyPassword(
    password: string
) {
    const admin = getAdminData();

    return bcrypt.compare(
        password,
        admin.passwordHash
    );
}

export async function updatePasswordHash(
    newPassword: string
) {
    const hash = await bcrypt.hash(
        newPassword,
        12
    );

    saveAdminData({
        passwordHash: hash,
    });
}