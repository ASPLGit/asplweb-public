"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setSuccess(true);
            setForm({ name: "", email: "", message: "" });
        }

        setLoading(false);
    };
    return (
        <section className="bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 sm:gap-14 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6 max-w-xl">
                        <p className="section-label">
                            Contact Us
                        </p>

                        <h2 className="heading-lg">
                            Let’s Start a Conversation
                        </h2>

                        <p className="text-body">
                            Have a project, question, or idea in mind? Reach out and
                            let’s discuss how we can help you move forward.
                        </p>

                        {/* CONTACT INFO */}
                        <div className="space-y-4 pt-4">
                            {/* Email */}
                            <div
                                className="
                                    flex items-center gap-4
                                    rounded-xl border border-blue-400/40
                                    px-5 py-4
                                "
                            >
                                <Image
                                    src="/images/icons/message.svg"
                                    alt="email"
                                    width={22}
                                    height={22}
                                />
                                <span className="heading-md">
                                    sales@aplombsoft.com
                                </span>
                            </div>

                            {/* Phone */}
                            <div
                                className="
                                    flex items-center gap-4
                                    rounded-xl border border-slate-300
                                    px-5 py-4
                                "
                            >
                                <Image
                                    src="/images/icons/phone.svg"
                                    alt="phone"
                                    width={22}
                                    height={22}
                                />
                                <span className="heading-sm">
                                    +91 635-273-7547
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div
                        className="
        rounded-2xl
        bg-sky-50
        p-8 sm:p-10
        border border-sky-100
        shadow-[0_20px_50px_-30px_rgba(15,23,42,0.12)]
    "
                    >
                        <h3 className="heading-lg mb-6">
                            Get in Touch
                        </h3>

                        <form className="space-y-7" onSubmit={handleSubmit}>
                            {/* Name */}
                            <div>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="
                    w-full bg-transparent
                    border-b border-slate-300
                    py-3 px-2
                    text-sm text-slate-900
                    placeholder-slate-500
                    focus:outline-none
                    focus:border-blue-600
                    transition
                "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="
                    w-full bg-transparent
                    border-b border-slate-300
                    py-3 px-2
                    text-sm text-slate-900
                    placeholder-slate-500
                    focus:outline-none
                    focus:border-blue-600
                    transition
                "
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Your message"
                                    className="
                    w-full bg-transparent
                    border-b border-slate-300
                    py-3 px-2
                    text-sm text-slate-900
                    placeholder-slate-500
                    focus:outline-none
                    focus:border-blue-600
                    resize-none
                    transition
                "
                                />
                            </div>

                            {/* Button */}
                            <div className="pt-4">
                                <Button variant="blue" type="submit">
                                    {loading ? "Sending..." : "Send message"}
                                </Button>
                            </div>
                            {success && (
                                <p className="text-sm text-green-600 pt-2">
                                    Message sent successfully!
                                </p>
                            )}
                        </form>


                    </div>


                </div>
            </div>
        </section>
    );
}
