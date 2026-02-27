"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { PhoneField } from "@/components/ui/PhoneField";
import FormInput from "@/components/ui/FormInput";

export default function ContactSection() {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const initialForm = {
        name: "",
        email: "",
        phone: "91",
        message: "",
    };

    const [form, setForm] = useState(initialForm);

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
        message?: string;
    }>({});

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setError(false);
    };

    const validate = () => {
        const newErrors: typeof errors = {};

        if (!form.name.trim()) newErrors.name = "Full name is required";

        if (!form.email.trim())
            newErrors.email = "Email address is required";
        else if (!/^\S+@\S+\.\S+$/.test(form.email))
            newErrors.email = "Enter a valid email address";
        const digits = form.phone.replace(/\D/g, "");
        const localPhone = digits.length > 2 ? digits.slice(2) : "";

        if (localPhone.length > 0 && localPhone.length < 7) {
            newErrors.phone = "Enter a valid phone number";
        }
        if (!form.message.trim())
            newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);

        if (!validate()) return;

        if (!executeRecaptcha) {
            setError(true);
            return;
        }

        setLoading(true);

        try {
            const token = await executeRecaptcha("contact_form");

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    captchaToken: token,
                }),
            });

            if (!res.ok) throw new Error("Request failed");

            setSuccess(true);
            setForm(initialForm);

        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="overflow-hidden sm:rounded-3xl rounded-xl bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]">
                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_2fr]">

                        {/* LEFT PANEL */}
                        <div
                            className="
                                relative
                                bg-[url('/images/bg.webp')]
                                bg-cover bg-center
                                p-6 sm:p-8
                                text-white
                                flex flex-col justify-between
                            "
                        >
                            <div
                                className="
                                    absolute inset-0
                                    bg-[url('/images/layer4.webp')]
                                    bg-cover bg-right-top
                                    opacity-50
                                "
                            />

                            <div className="relative z-10 space-y-4">
                                <p className="section-label text-white/70">
                                    Contact Us
                                </p>

                                <h2 className="sm:text-2xl text-xl font-medium">
                                    Let’s Start a Conversation
                                </h2>

                                <p className="text-sm text-white/80 max-w-sm">
                                    Have a project, question, or idea?
                                    We’d love to hear from you.
                                </p>

                                <div className="pt-6 space-y-3 text-sm text-white/85">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/images/icons/message.svg"
                                            alt="email"
                                            width={18}
                                            height={18}
                                        />
                                        <span>biz@aplombsoft.com</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/images/icons/phone.svg"
                                            alt="phone"
                                            width={18}
                                            height={18}
                                        />
                                        <span>+91 635-273-7547</span>
                                    </div>
                                </div>
                            </div>

                            <p className="relative z-10 text-xs text-white/50 mt-10">
                                Your details are safe with us. We use them only to respond to your message.
                            </p>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="p-6 sm:p-8">
                            <h3 className="heading-lg mb-6">
                                Get in Touch
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* NAME */}
                                <FormInput
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    label="Full Name *"
                                    error={errors.name}
                                />


                                {/* EMAIL */}
                                <div className=" grid sm:grid-cols-2 grid-cols-1 gap-4">
                                    <FormInput
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        label="Email Address *"
                                        error={errors.email}
                                    />
                                    <PhoneField
                                        label="Phone Number (Optional)"
                                        value={form.phone}
                                        onChange={(value) =>
                                            setForm((prev) => ({ ...prev, phone: value }))
                                        }
                                        error={errors.phone}
                                    />
                                </div>
                                {/* MESSAGE */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-slate-600"> Message * </label>
                                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your project or question" className={`w-full rounded-lg border px-3 py-2.5 text-base outline-none resize-none ${errors.message ? "border-red-400 focus:ring-red-400/30" : "!border-slate-300 focus:!border-blueTheme focus:!ring-2 focus:!ring-blueTheme/30"} `} />
                                    {errors.message && (<p className="text-xs text-red-500"> {errors.message} </p>)}
                                </div>

                                <Button variant="blue" type="submit" disabled={loading}>
                                    {loading ? "Submitting..." : "Send Message"}
                                </Button>

                                {success && (
                                    <p className="text-sm text-green-600">
                                        Message sent successfully!
                                    </p>
                                )}

                                {error && (
                                    <p className="text-sm text-red-600">
                                        Message failed. Please try again.
                                    </p>
                                )}
                                <p className="text-xs text-slate-500 mt-3">
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
        </section>
    );
}
