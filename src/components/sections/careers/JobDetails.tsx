"use client";

import Button from "@/components/ui/Button";
import { OpenPosition } from "@/data/openPositions";
import ApplyJobModal from "./ApplyJobModal";
import { useState } from "react";

interface Props {
    job: OpenPosition;
}

export default function JobDetails({ job }: Props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <section className="container pb-14 space-y-12 sm:pt-32 pt-20">
                {/* HEADER */}
                <div className="space-y-4">
                    <h1 className="heading-lg">{job.title}</h1>

                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                        <span className="rounded-full bg-slate-100 px-4 py-1">
                            {job.type}
                        </span>
                        <span className="rounded-full bg-slate-100 px-4 py-1">
                            {job.location}
                        </span>
                        <span className="rounded-full bg-slate-100 px-4 py-1">
                            {job.experience}
                        </span>
                    </div>

                    <p className="max-w-3xl text-slate-700">
                        {job.summary}
                    </p>
                </div>

                {/* RESPONSIBILITIES */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Responsibilities
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* REQUIREMENTS */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Requirements
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        {job.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* NICE TO HAVE */}
                {job.niceToHave && (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Nice to Have
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            {job.niceToHave.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}


                {/* BENEFITS */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Benefits
                    </h3>

                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        {job.benefits.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <Button variant="black" onClick={() => setOpen(true)}>Apply Now</Button>


            </section>
            <ApplyJobModal
                open={open}
                onClose={() => setOpen(false)}
                jobTitle={job.title}
                location={job.location}
                experience={job.experience}
            />
        </>
    );
}
