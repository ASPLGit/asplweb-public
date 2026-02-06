"use client";

import { OPEN_POSITIONS } from "@/data/openPositions";
import Image from "next/image";
import Link from "next/link";

export default function OpenPositions() {
    return (
        <section className="relative overflow-hidden
  bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
  sm:pt-20 pt-10">
            <section className="container space-y-14">
                <h2 className="heading-lg text-center">
                    We’re Growing Our Team
                </h2>
                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {OPEN_POSITIONS.map((job, index) => (
                        <Link
                            key={index}
                            href={`/careers/${job.slug}`}
                            className="
        group relative
        flex flex-col justify-between
        sm:rounded-2xl rounded-xl
        border border-slate-200
        bg-white
        p-6
        transition-all duration-300 shadow-sm
        hover:-translate-y-1
      "
                        >
                            {/* LEFT HOVER ACCENT */}
                            <span
                                className="
          absolute left-0 top-0 h-full w-1
          rounded-l-2xl
          bg-blueTheme
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
                            />

                            {/* TOP */}
                            <div>
                                <h3 className="text-lg font-semibold text-gradient">
                                    {job.title}
                                </h3>

                                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                                    <span className="rounded-full bg-slate-100 px-3 py-1">
                                        {job.type}
                                    </span>
                                    <span className="rounded-full bg-slate-100 px-3 py-1">
                                        {job.location}
                                    </span>
                                    <span className="rounded-full bg-slate-100 px-3 py-1">
                                        {job.experience}
                                    </span>
                                </div>
                            </div>

                            {/* BOTTOM CTA */}
                            <div className="mt-6 flex items-center justify-between">
                                {/* TEXT CTA */}
                                <span
                                    className="
            text-sm font-medium text-slate-700
            transition-colors duration-300
            group-hover:text-blueTheme
          "
                                >
                                    View Details
                                </span>

                                {/* ARROW BUTTON (KEPT) */}
                                <div
                                    className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-full
            border border-slate-800
            bg-white
            text-black
            transition-all duration-300
            sm:group-hover:translate-x-1
            sm:group-hover:-translate-y-1
            sm:group-hover:rotate-45
          "
                                >
                                    <Image
                                        src="/images/icons/arrow-up-right-black.svg"
                                        alt="arrow"
                                        width={18}
                                        height={18}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>


                {/* FOOTER NOTE */}
                <p className="text-center text-sm text-slate-500">
                    Don’t see a role that fits?{" "}
                    <Link href="/contact" className="text-blueTheme underline">
                        Reach out to us
                    </Link>{" "}
                    — we’re always happy to connect.
                </p>
            </section>
        </section>
    );
}
