"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

interface Props {
    open: boolean;
    onClose: () => void;
    jobTitle: string;
    jobType?: string;
    location?: string;
    experience?: string;
}

export default function ApplyJobModal({
    open,
    onClose,
    jobTitle,
    jobType = "Full Time",
    location = "Ahmedabad / Remote",
    experience = "2–5 Years",
}: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 max-h-screen overflow-auto">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={onClose}
            />

            {/* MODAL */}
            <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
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
                                    <span>⏱</span>
                                    <span>{jobType}</span>
                                </div>
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

                        <form className="sm:space-y-5 space-y-3">
                            {/* PERSONAL DETAILS */}
                            <div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="First Name" />
                                    <Input placeholder="Last Name" />
                                    <Input type="email" placeholder="Email Address" />
                                    <Input placeholder="Phone Number" />
                                </div>
                            </div>

                            {/* PROFESSIONAL */}
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input placeholder="Current / Previous Company" />
                                    <Input placeholder="Years of Experience" />
                                </div>
                            </div>

                            {/* RELOCATION */}
                            <div className="relative">
                                <select
                                    className="
            w-full appearance-none
            rounded-lg border border-slate-300
            bg-white outline-none
            px-3 py-2.5 pr-10
            text-sm
            focus:border-blueTheme
            focus:ring-2 focus:ring-blueTheme/30
        "
                                >
                                    <option value="">
                                        Are you okay to relocate to Ahmedabad?
                                    </option>
                                    <option>Yes</option>
                                    <option>No</option>
                                    <option>Open to discuss</option>
                                </select>

                                {/* CUSTOM ICON */}
                                <Image className="
            pointer-events-none
            absolute right-3 top-1/2
            h-4 w-4
            -translate-y-1/2
        " src="/images/icons/lucide_chevron-down.svg" alt="chev down" width={16} height={16} />
                            </div>


                            {/* RESUME */}
                            <div>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="
                                        w-full cursor-pointer rounded-lg
                                        border border-dashed border-slate-300
                                        px-4 py-3 text-sm
                                        file:hidden
                                        focus:border-blueTheme
                                        hover:border-blueTheme
                                    "
                                />
                                <p className="mt-1 text-xs text-slate-500">
                                    Upload Resume (PDF / DOC)
                                </p>
                            </div>

                            {/* ACTION */}
                            <div className="pt-4 flex items-center sm:justify-end justify-center gap-3">
                                <Button onClick={onClose} variant="black">Cancel</Button>
                                <Button variant="blue">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* INPUT */
function Input({
    type = "text",
    placeholder,
}: {
    type?: string;
    placeholder: string;
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="
                w-full rounded-lg border border-slate-300
                px-3 py-2.5 text-sm
                outline-none focus:border-blueTheme focus:ring-1 focus:ring-blueTheme/30
            "
        />
    );
}
