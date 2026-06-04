"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    ShieldCheck,
    Lock,
    KeyRound,
    Loader2,
    AlertCircle,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

export default function ChangePasswordPage() {
    const router =
        useRouter();

    const [
        currentPassword,
        setCurrentPassword,
    ] = useState("");

    const [
        newPassword,
        setNewPassword,
    ] = useState("");

    const [
        confirmPassword,
        setConfirmPassword,
    ] = useState("");

    const [otp, setOtp] =
        useState("");

    const [
        otpSent,
        setOtpSent,
    ] = useState(false);

    const [
        loading,
        setLoading,
    ] = useState(false);

    const [error, setError] =
        useState("");

    const [
        success,
        setSuccess,
    ] = useState("");

    async function sendOTP() {
        try {
            setLoading(true);
            setError("");

            if (
                newPassword !==
                confirmPassword
            ) {
                setError(
                    "Passwords do not match"
                );
                return;
            }

            const response =
                await fetch(
                    "/api/auth/request-password-change",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            currentPassword,
                            newPassword,
                        }),
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error
                );
            }

            setOtpSent(true);

            setSuccess(
                "OTP sent to your email"
            );
        } catch (err: any) {
            setError(
                err.message ||
                "Failed to send OTP"
            );
        } finally {
            setLoading(false);
        }
    }

    async function changePassword() {
        try {
            setLoading(true);
            setError("");

            const response =
                await fetch(
                    "/api/auth/change-password",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            otp,
                        }),
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error
                );
            }

            alert(
                "Password changed successfully. Please login again."
            );

            router.push(
                "/admin/login"
            );
        } catch (err: any) {
            setError(
                err.message ||
                "Failed to change password"
            );
        } finally {
            setLoading(false);
        }
    }



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-6">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative w-full max-w-md">
                <div className="backdrop-blur-xl bg-white/80 border border-white/30 shadow-2xl rounded-3xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
                            <ShieldCheck className="h-7 w-7 text-white" />
                        </div>

                        <h1 className="text-3xl font-bold text-slate-900">
                            Change Password
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Secure your administrator account
                        </p>
                    </div>

                    {/* Step Indicator */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center">
                            <div
                                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${!otpSent
                                        ? "bg-blue-600 text-white"
                                        : "bg-emerald-600 text-white"
                                    }`}
                            >
                                1
                            </div>

                            <div className="h-[2px] w-16 bg-slate-200" />

                            <div
                                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${otpSent
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-200 text-slate-500"
                                    }`}
                            >
                                2
                            </div>
                        </div>

                        <div className="mt-3 flex justify-between text-xs text-slate-500">
                            <span>Password</span>
                            <span>Verification</span>
                        </div>
                    </div>

                    {/* STEP 1 */}
                    {!otpSent ? (
                        <div className="space-y-5">
                            {/* Current Password */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Current Password
                                </label>

                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                                    <input
                                        type="password"
                                        value={currentPassword}
                                        onChange={(e) =>
                                            setCurrentPassword(e.target.value)
                                        }
                                        placeholder="Enter current password"
                                        className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                  "
                                    />
                                </div>
                            </div>

                            {/* New Password */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    New Password
                                </label>

                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) =>
                                            setNewPassword(e.target.value)
                                        }
                                        placeholder="Create new password"
                                        className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                  "
                                    />
                                </div>

                                <p className="mt-2 text-xs text-slate-500">
                                    Use at least 8 characters with a mix of
                                    letters, numbers, and symbols.
                                </p>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Confirm new password"
                                        className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                  "
                                    />
                                </div>
                            </div>

                            <button
                                onClick={sendOTP}
                                disabled={loading}
                                className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                hover:scale-[1.01]
                hover:shadow-xl
                disabled:opacity-70
              "
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Sending OTP...
                                    </>
                                ) : (
                                    <>
                                        Send Verification Code
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    ) : (
                        /* STEP 2 */
                        <div className="space-y-5">
                            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                                <p className="text-sm text-blue-700">
                                    Verification code has been sent to your
                                    registered email address.
                                </p>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Verification Code
                                </label>

                                <div className="relative">
                                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                                    <input
                                        type="text"
                                        maxLength={6}
                                        value={otp}
                                        onChange={(e) =>
                                            setOtp(
                                                e.target.value.replace(
                                                    /\D/g,
                                                    ""
                                                )
                                            )
                                        }
                                        placeholder="000000"
                                        className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    py-3
                    pl-11
                    pr-4
                    text-center
                    text-lg
                    font-semibold
                    tracking-[0.5em]
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                  "
                                    />
                                </div>
                            </div>

                            <button
                                onClick={changePassword}
                                disabled={loading}
                                className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                hover:scale-[1.01]
                hover:shadow-xl
                disabled:opacity-70
              "
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Updating Password...
                                    </>
                                ) : (
                                    <>
                                        <ShieldCheck className="h-4 w-4" />
                                        Verify & Change Password
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="mt-5 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                            <AlertCircle className="h-4 w-4 mt-0.5 text-red-500" />

                            <p className="text-sm text-red-700">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Success */}
                    {success && (
                        <div className="mt-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600" />

                            <p className="text-sm text-emerald-700">
                                {success}
                            </p>
                        </div>
                    )}

                    <div className="mt-8 border-t border-slate-200 pt-5 text-center">
                        <p className="text-xs text-slate-500">
                            Password changes require email verification
                            for additional security
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}