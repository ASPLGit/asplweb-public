"use client";

interface Props {
    open: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function ApplyJobModal({ open, onClose, jobTitle }: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* MODAL */}
            <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-5 sm:p-6 shadow-xl">
                {/* HEADER */}
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">
                        Apply for {jobTitle}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-slate-500 hover:text-slate-800"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* FORM */}
                <form className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input type="email" placeholder="Email Address" />
                        <Input placeholder="Phone Number" />
                    </div>

                    <Input placeholder="Current Address" />

                    <Input placeholder="Years of Experience" />

                    {/* RELOCATION */}
                    <select
                        className="
                            w-full rounded-lg border border-slate-300
                            px-3 py-2 text-sm
                            focus:border-blueTheme focus:ring-2 focus:ring-blueTheme/30
                        "
                    >
                        <option value="">Relocate to Ahmedabad?</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Open to discuss</option>
                    </select>

                    {/* RESUME UPLOAD */}
                    <div>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="
                                w-full cursor-pointer
                                rounded-lg border border-slate-300
                                px-3 py-2 text-sm
                                file:mr-4 file:rounded-md file:border-0
                                file:bg-slate-100 file:px-4 file:py-1.5
                                file:text-sm file:font-medium
                                hover:file:bg-slate-200
                            "
                        />
                        <p className="mt-1 text-xs text-slate-500">
                            Upload resume (PDF, DOC, DOCX)
                        </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="pt-3 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-sm text-slate-600 hover:text-slate-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="
                                rounded-lg bg-black
                                px-5 py-2.5
                                text-sm font-medium text-white
                                transition hover:bg-slate-900
                            "
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* SIMPLE INPUT */
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
                px-3 py-2 text-sm
                focus:border-blueTheme focus:ring-2 focus:ring-blueTheme/30
            "
        />
    );
}
