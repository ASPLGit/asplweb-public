import Image from "next/image";
import { Service } from "@/types/app";

interface TechnologyGridProps {
    data: Service["TechnologySection"];
}

export default function TechnologyGrid({ data }: TechnologyGridProps) {
    return (
        <section>
            <div className="container">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-10 md:p-14">
                    <div
                        className="
                            grid
                            grid-cols-2
                            sm:grid-cols-3
                            md:grid-cols-4
                            lg:grid-cols-5
                            gap-8
                        "
                    >
                        {data.items.map((tech) => (
                            <div
                                key={tech.logo}
                                className="
                                    group
                                    relative
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border border-slate-200
                                    bg-slate-50
                                    px-5 py-6
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:bg-white

                                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        relative
                                        flex
                                        items-center
                                        justify-center
                                        h-16 w-16
                                        rounded-xl
                                        bg-white
                                        shadow-sm
                                        transition
                                        group-hover:shadow-md
                                    "
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={`${tech.name} logo`}
                                        width={40}
                                        height={40}
                                        className="
                                            object-contain
                                            opacity-80
                                            transition-all duration-300
                                            group-hover:opacity-100
                                            group-hover:scale-105
                                        "
                                    />
                                </div>

                                {/* NAME */}
                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        font-medium
                                        text-slate-600
                                        transition
                                        group-hover:text-slate-900 text-center
                                    "
                                >
                                    {tech.name}
                                </p>

                                {/* Decorative gradient ring */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute inset-0
                                        rounded-2xl
                                        opacity-0
                                        transition-opacity duration-300
                                        group-hover:opacity-100
                                        bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent)]
                                    "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}