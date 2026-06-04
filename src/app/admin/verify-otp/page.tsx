"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    ShieldCheck,
    KeyRound,
    Loader2,
    AlertCircle,
    RotateCcw,
} from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function VerifyOTPPage() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const router =
        useRouter();

    const [otp, setOtp] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");
    const [countdown, setCountdown] =
        useState(30);

    const [resending, setResending] =
        useState(false);

    useEffect(() => {

        if (countdown <= 0) {
            return;
        }

        const timer =
            setTimeout(() => {
                setCountdown(
                    (prev) => prev - 1
                );
            }, 1000);

        return () =>
            clearTimeout(timer);
    }, [countdown]);
    useEffect(() => {
        const checkAuth =
            async () => {
                try {
                    const response =
                        await fetch(
                            "/api/auth/me"
                        );

                    if (
                        response.ok
                    ) {
                        router.replace(
                            "/admin/blog-generator"
                        );
                    }
                } catch {
                    // ignore
                }
            };

        checkAuth();
    }, [router]);

    async function handleVerify(
        e: React.FormEvent
    ) {
        e.preventDefault();

        const email =
            sessionStorage.getItem(
                "otp_email"
            );

        if (!email) {
            setError(
                "Login again"
            );
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response =
                await fetch(
                    "/api/auth/verify-otp",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            email,
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

            sessionStorage.removeItem(
                "otp_email"
            );

            router.push(
                "/admin/blog-generator"
            );
        } catch (err: any) {
            const message =
                err.message ||
                "OTP verification failed";

            setError(message);

            if (
                message.includes(
                    "Maximum attempts exceeded"
                )
            ) {
                sessionStorage.removeItem(
                    "otp_email"
                );

                setTimeout(() => {
                    router.push(
                        "/admin/login"
                    );
                }, 2000);
            }
        } finally {
            setLoading(false);
        }
    }

    async function handleResend() {
        try {
            setResending(true);
            if (!executeRecaptcha) {
                throw new Error(
                    "reCAPTCHA unavailable"
                );
            }

            const captchaToken =
                await executeRecaptcha(
                    "resend_otp"
                );

            const response =
                await fetch(
                    "/api/auth/resend-otp",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            captchaToken,
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

            setCountdown(30);

            alert(
                "OTP sent successfully"
            );
        } catch (err: any) {
            alert(
                err.message ||
                "Failed to resend OTP"
            );
        } finally {
            setResending(false);
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
                            Verify OTP
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Enter the 6-digit verification code sent to your email
                        </p>
                    </div>

                    <form
                        onSubmit={handleVerify}
                        className="space-y-5"
                    >
                        {/* OTP Input */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Verification Code
                            </label>

                            <div className="relative">
                                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                                <input
                                    type="text"
                                    inputMode="numeric"
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
                                    required
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
                                    duration-200
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                                />
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3">
                                <AlertCircle className="mt-0.5 h-4 w-4 text-red-500" />

                                <p className="text-sm text-red-700">
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Success Message Example */}
                        {/* 
                    {success && (
                        <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                            <p className="text-sm text-emerald-700">
                                OTP verified successfully.
                            </p>
                        </div>
                    )}
                    */}

                        {/* Verify Button */}
                        <button
                            type="submit"
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
                            duration-200
                            hover:scale-[1.01]
                            hover:shadow-xl
                            disabled:cursor-not-allowed
                            disabled:opacity-70
                        "
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <ShieldCheck className="h-4 w-4" />
                                    Verify OTP
                                </>
                            )}
                        </button>

                        {/* Countdown / Resend */}
                        <div className="pt-2 text-center">
                            {countdown > 0 ? (
                                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                                    <RotateCcw className="h-4 w-4" />
                                    Resend OTP in {countdown}s
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    disabled={resending}
                                    className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    transition-all
                                    hover:bg-slate-50
                                    hover:border-slate-300
                                    disabled:opacity-70
                                "
                                >
                                    {resending ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <RotateCcw className="h-4 w-4" />
                                            Resend OTP
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 border-t border-slate-200 pt-5 text-center">
                        <p className="text-xs text-slate-500">
                            Your verification code expires in 10 minutes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}