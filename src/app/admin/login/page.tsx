"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Mail,
    Lock,
    ShieldCheck,
    Loader2,
    AlertCircle,
} from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
export default function LoginPage() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const router = useRouter();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

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

    async function handleLogin(
        e: React.FormEvent
    ) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            if (!executeRecaptcha) {
                throw new Error(
                    "reCAPTCHA unavailable"
                );
            }

            const captchaToken =
                await executeRecaptcha(
                    "admin_login"
                );

            const response =
                await fetch(
                    "/api/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            email,
                            password,
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

            sessionStorage.setItem(
                "otp_email",
                email
            );

            router.push(
                "/admin/verify-otp"
            );

        } catch (err: any) {
            setError(
                err.message ||
                "Login failed"
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
                {/* Login Card */}
                <div className="backdrop-blur-xl bg-white/80 border border-white/30 shadow-2xl rounded-3xl p-8">
                    {/* Branding */}
                    <div className="text-center mb-8">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
                            <ShieldCheck className="h-7 w-7 text-white" />
                        </div>

                        <h1 className="text-3xl font-bold text-slate-900">
                            Admin Portal
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Sign in to access the dashboard
                        </p>
                    </div>

                    <form
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >
                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                <input
                                    type="email"
                                    placeholder="admin@company.com"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
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
                                    text-sm
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

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Password
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
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
                                    text-sm
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

                        {/* Submit */}
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
                                    Sending OTP...
                                </>
                            ) : (
                                <>
                                    <ShieldCheck className="h-4 w-4" />
                                    Continue
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 border-t border-slate-200 pt-5 text-center">
                        <p className="mt-2 text-[11px] text-slate-400">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noreferrer"
                                className="underline"
                            >
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://policies.google.com/terms"
                                target="_blank"
                                rel="noreferrer"
                                className="underline"
                            >
                                Terms of Service
                            </a>{" "}
                            apply.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}