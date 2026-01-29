// "use client";

// import Button from "@/components/ui/Button";
// import Image from "next/image";
// import { useState } from "react";

// export default function ContactSection() {

//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoading(true);

//         const res = await fetch("/api/contact", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(form),
//         });

//         if (res.ok) {
//             setSuccess(true);
//             setForm({ name: "", email: "", message: "" });
//         }

//         setLoading(false);
//     };
//     return (
//         <section className="bg-white">
//             <div className="container">
//                 <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 sm:gap-14 gap-10 items-center">

//                     {/* LEFT CONTENT */}
//                     <div className="space-y-6 max-w-xl">
//                         <p className="section-label">
//                             Contact Us
//                         </p>

//                         <h2 className="heading-lg">
//                             Let’s Start a Conversation
//                         </h2>

//                         <p className="text-body">
//                             Have a project, question, or idea in mind? Reach out and
//                             let’s discuss how we can help you move forward.
//                         </p>

//                         {/* CONTACT INFO */}
//                         <div className="space-y-4 pt-4">
//                             {/* Email */}
//                             <div
//                                 className="
//                                     flex items-center gap-4
//                                     rounded-xl border border-blue-400/40
//                                     px-5 py-4
//                                 "
//                             >
//                                 <Image
//                                     src="/images/icons/message.svg"
//                                     alt="email"
//                                     width={22}
//                                     height={22}
//                                 />
//                                 <span className="heading-md">
//                                     sales@aplombsoft.com
//                                 </span>
//                             </div>

//                             {/* Phone */}
//                             <div
//                                 className="
//                                     flex items-center gap-4
//                                     rounded-xl border border-slate-300
//                                     px-5 py-4
//                                 "
//                             >
//                                 <Image
//                                     src="/images/icons/phone.svg"
//                                     alt="phone"
//                                     width={22}
//                                     height={22}
//                                 />
//                                 <span className="heading-sm">
//                                     +91 635-273-7547
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT FORM */}
//                     <div
//                         className="
//         rounded-2xl
//         bg-sky-50
//         p-8 sm:p-10
//         border border-sky-100
//         shadow-[0_20px_50px_-30px_rgba(15,23,42,0.12)]
//     "
//                     >
//                         <h3 className="heading-lg mb-6">
//                             Get in Touch
//                         </h3>

//                         <form className="space-y-7" onSubmit={handleSubmit}>
//                             {/* Name */}
//                             <div>
//                                 <input
//                                     name="name"
//                                     value={form.name}
//                                     onChange={handleChange}
//                                     placeholder="Your full name"
//                                     className="
//                     w-full bg-transparent
//                     border-b border-slate-300
//                     py-3 px-2
//                     text-sm text-slate-900
//                     placeholder-slate-500
//                     focus:outline-none
//                     focus:border-blue-600
//                     transition
//                 "
//                                 />
//                             </div>

//                             {/* Email */}
//                             <div>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={form.email}
//                                     onChange={handleChange}
//                                     placeholder="you@example.com"
//                                     className="
//                     w-full bg-transparent
//                     border-b border-slate-300
//                     py-3 px-2
//                     text-sm text-slate-900
//                     placeholder-slate-500
//                     focus:outline-none
//                     focus:border-blue-600
//                     transition
//                 "
//                                 />
//                             </div>

//                             {/* Message */}
//                             <div>
//                                 <textarea
//                                     name="message"
//                                     value={form.message}
//                                     onChange={handleChange}
//                                     rows={3}
//                                     placeholder="Your message"
//                                     className="
//                     w-full bg-transparent
//                     border-b border-slate-300
//                     py-3 px-2
//                     text-sm text-slate-900
//                     placeholder-slate-500
//                     focus:outline-none
//                     focus:border-blue-600
//                     resize-none
//                     transition
//                 "
//                                 />
//                             </div>

//                             {/* Button */}
//                             <div className="pt-4">
//                                 <Button variant="blue" type="submit">
//                                     {loading ? "Sending..." : "Send message"}
//                                 </Button>
//                             </div>
//                             {success && (
//                                 <p className="text-sm text-green-600 pt-2">
//                                     Message sent successfully!
//                                 </p>
//                             )}
//                         </form>


//                     </div>


//                 </div>
//             </div>
//         </section>
//     );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

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
        <section id="contact">
            <div className="container">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]">
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
            bg-cover bg-right-top bg-no-repeat
            sm:blur-[0px]
            opacity-50
        "
                            />

                            <div className="relative z-10 space-y-4">
                                <p className="section-label text-white/70">
                                    Contact Us
                                </p>

                                <h2 className="sm:text-2xl text-xl font-semibold leading-tight">
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
                                        <span>sales@aplombsoft.com</span>
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
                                We usually respond within 24 hours.
                            </p>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="p-6 sm:p-8">
                            <h3 className="heading-lg mb-6">
                                Get in Touch
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                {/* NAME */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-slate-600">
                                        Full Name
                                    </label>
                                    <Input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-slate-600">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                    />
                                </div>

                                {/* MESSAGE */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-slate-600">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your project or question"
                                        className="
                    w-full rounded-lg
                    border border-slate-300
                    px-3 py-2.5 text-sm
                    outline-none resize-none
                    focus:border-blueTheme
                    focus:ring-1 focus:ring-blueTheme/30
                "
                                    />
                                </div>

                                {/* ACTION */}
                                <div className="pt-3">
                                    <Button variant="blue" type="submit">
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>
                                </div>

                                {success && (
                                    <p className="text-sm text-green-600">
                                        Message sent successfully!
                                    </p>
                                )}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

/* INPUT */
function Input({
    type = "text",
    name,
    value,
    onChange,
    placeholder,
}: {
    type?: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
}) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="
                w-full rounded-lg
                border border-slate-300
                px-3 py-2.5 text-sm
                outline-none
                focus:border-blueTheme
                focus:ring-1 focus:ring-blueTheme/30
            "
        />
    );
}
