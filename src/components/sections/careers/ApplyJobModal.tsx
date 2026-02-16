"use client";

import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import { PhoneField } from "@/components/ui/PhoneField";
import Image from "next/image";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


interface Props {
    open: boolean;
    onClose: () => void;
    jobTitle: string;
    location?: string;
    experience?: string;
}

export default function ApplyJobModal({
    open,
    onClose,
    jobTitle,
    location,
    experience
}: Props) {

    const { executeRecaptcha } = useGoogleReCaptcha();


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        experience: "",
        relocation: "",
        resume: null as File | null,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setError(false);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setFormData((prev) => ({
                ...prev,
                resume: e.target.files![0],
            }));
            setErrors((prev) => ({ ...prev, resume: "" }));
        }

        const MAX_FILE_SIZE = 5 * 1024 * 1024;

        if (e.target.files?.[0]) {
            const file = e.target.files[0];

            if (file.size > MAX_FILE_SIZE) {
                setErrors((prev) => ({
                    ...prev,
                    resume: "File must be under 5MB",
                }));
                return;
            }

            setFormData((prev) => ({
                ...prev,
                resume: file,
            }));
        }

    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = "Required";
        if (!formData.lastName.trim()) newErrors.lastName = "Required";
        if (!formData.email.trim())
            newErrors.email = "Required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Invalid email";
        if (!formData.phone.trim()) newErrors.phone = "Required";
        const digits = formData.phone.replace(/\D/g, "");
        const localPhone = digits.length > 2 ? digits.slice(2) : "";

        if (localPhone.length > 0 && localPhone.length < 7) {
            newErrors.phone = "Enter a valid phone number";
        }

        if (!formData.experience.trim()) newErrors.experience = "Required";
        if (!formData.resume) newErrors.resume = "Resume required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(false);

        if (!validate()) return;

        if (!executeRecaptcha) {
            setError(true);
            return;
        }

        setLoading(true);

        try {
            const token = await executeRecaptcha("apply_job");
            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (typeof value === "string") {
                    payload.append(key, value);
                }
                if (value instanceof File) {
                    payload.append(key, value);
                }
            });

            payload.append("jobTitle", jobTitle);
            payload.append("captchaToken", token);

            const res = await fetch("/api/apply-job", {
                method: "POST",
                body: payload,
            });

            if (!res.ok) throw new Error("Failed");

            setSuccess(true);

            setTimeout(() => {
                resetForm();
                setSuccess(false);
                onClose(); // ✅ CLOSE MODAL
            }, 1500);

        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };


    const resetForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            experience: "",
            relocation: "",
            resume: null,
        });
        setErrors({});
    };



    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 max-h-screen overflow-auto">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={onClose}
            />

            {/* MODAL */}
            <div className="relative z-10 w-full max-w-4xl overflow-hidden sm:rounded-2xl rounded-xl bg-white shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_2fr]">

                    {/* LEFT PANEL */}
                    <div className="bg-[url('/images/bg.webp')] relative
            bg-cover bg-center bg-no-repeat text-white p-6 sm:p-8 flex flex-col justify-between">
                        <div
                            className="
            absolute inset-0
            bg-[url('/images/layer1.webp')]
            bg-cover bg-right-top bg-no-repeat
            sm:blur-[0px]
            opacity-50
        "
                        />
                        <div className="relative z-10">
                            <p className="text-sm text-white/60">
                                Apply For
                            </p>

                            <h2 className="mt-2 sm:text-2xl text-lg font-semibold leading-tight">
                                {jobTitle}
                            </h2>

                            <div className="sm:mt-6 mt-2 sm:space-y-3 space-y-1 sm:text-sm text-xs text-white/80">
                                <div className="flex items-center gap-2">
                                    <span>📍</span>
                                    <span>{location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🎯</span>
                                    <span>{experience}</span>
                                </div>
                            </div>
                        </div>

                        <p className="sm:mt-10 mt-2 text-xs text-white/50 relative z-10">
                            We respect your privacy.
                            Your information will only be used for recruitment.
                        </p>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="relative p-4 sm:p-8">

                        <form onSubmit={handleSubmit} className="sm:space-y-5 space-y-3">
                            {/* PERSONAL DETAILS */}
                            <div className="grid grid-cols-2 gap-4">
                                <FormInput
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    error={errors.firstName}
                                />
                                <FormInput
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    error={errors.lastName}
                                />

                                <FormInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                                <PhoneField
                                    value={formData.phone}
                                    onChange={(value) =>
                                        setFormData((prev) => ({ ...prev, phone: value }))
                                    }
                                    error={errors.phone}
                                />

                            </div>

                            {/* PROFESSIONAL */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormInput
                                    name="company"
                                    placeholder="Current Company"
                                    onChange={handleChange}
                                />

                                <FormInput
                                    name="experience"
                                    placeholder="Years of Experience"
                                    onChange={handleChange}
                                    error={errors.experience}
                                />

                            </div>

                            {/* RELOCATION */}
                            <div className="relative">
                                <select
                                    name="relocation"
                                    onChange={handleChange}
                                    className="
                        w-full appearance-none rounded-lg outline-none
                        border border-slate-300 bg-white
                        px-3 py-2.5 pr-10 text-base
                        focus:ring-2 focus:ring-blueTheme/30
                    "
                                >
                                    <option value="">Are you okay to relocate to Ahmedabad?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    <option value="discuss">Open to discuss</option>
                                </select>

                                <Image
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4"
                                    src="/images/icons/lucide_chevron-down.svg"
                                    alt="chev down"
                                    width={16}
                                    height={16}
                                />
                            </div>

                            {/* RESUME */}
                            <div>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="w-full rounded-lg border border-dashed px-4 py-3 text-base"
                                />
                                {errors.resume && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.resume}
                                    </p>
                                )}
                            </div>

                            {/* ACTION */}
                            <div className="pt-4 flex items-center sm:justify-end justify-center gap-3">
                                <button className="bg-black
                                text-white
                                shadow-md
                                hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.08)]
                                px-10 py-3
                                text-sm
                                inline-flex items-center justify-center
                                rounded-lg
                                font-medium
                                transition-all duration-300 ease-out" onClick={() => {
                                        onClose()
                                        resetForm()
                                    }}>Cancel</button>
                                <Button
                                    type="submit"
                                    variant="blue"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </Button>

                            </div>

                            {success && (
                                <p className="text-sm text-green-600">
                                    Application submitted successfully!
                                </p>
                            )}

                            {error && (
                                <p className="text-sm text-red-600">
                                    Submission failed. Please try again or email us at biz@aplombsoft.com
                                </p>
                            )}
                            <p className="text-xs text-slate-500 mt-3 sm:text-right max-w-sm sm:ms-auto">
                                This site is protected by reCAPTCHA and the Google{" "}
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-slate-700"
                                >
                                    Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://policies.google.com/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-slate-700"
                                >
                                    Terms of Service
                                </a>{" "}
                                apply.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}