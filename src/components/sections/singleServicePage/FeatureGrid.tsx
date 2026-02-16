import { Service } from "@/types/app";

interface FeatureGridProps {
    data: Service["featureSection"];
}

export default function FeatureGrid({ data }: FeatureGridProps) {
    return (
        <section className="relative overflow-hidden sm:pb-20 pb-10 pt-4">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    {data.items.map((item, index) => (
                        <div
                            key={item.id}
                            className="
                group relative overflow-hidden
                sm:min-h-[230px]
                rounded-2xl
                border border-slate-200
                p-6 sm:p-8
                bg-white
                transition-all duration-500 ease-out
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]
              "
                        >
                            <div
                                className="
                                    absolute inset-0 group-hover:opacity-40 opacity-0
                                    bg-[url('/images/layer3.webp')]
                                    bg-cover bg-right-top rounded-2xl
                                    transition-all duration-500 z-10
                                "
                            />
                            {/* Gradient Hover Background */}
                            <div
                                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[url('/images/bg.webp')]
                  bg-cover bg-center
                "
                            />

                            {/* Dark Gradient Overlay */}
                            <div
                                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-90
                  transition-opacity duration-500
                  bg-gradient-to-br
                  from-black/80 via-indigo-900/70 to-purple-900/70
                "
                            />
                            <div
                                className="
                  absolute -top-20 -left-20 w-60 h-60
                  bg-cyan-400/20
                  rounded-full blur-3xl
                  opacity-0 group-hover:opacity-100
                  transition-all duration-700
                  group-hover:translate-x-20 group-hover:translate-y-20
                "
                            />

                            <div className="relative z-10">
                                {/* STEP BADGE */}
                                <div
                                    className="
                    mb-6 inline-flex items-center justify-center
                    h-10 w-10
                    rounded-xl
                    bg-slate-400
                    text-sm font-semibold text-white
                    transition-all duration-500
                    group-hover:bg-white/20
                    group-hover:backdrop-blur
                    group-hover:scale-110
                  "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="
                    text-lg sm:text-xl font-semibold
                    text-slate-900
                    transition-all duration-500
                    group-hover:text-white
                  "
                                >
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                    mt-3
                    text-sm sm:text-base
                    leading-relaxed
                    text-slate-600
                    transition-colors duration-500
                    group-hover:text-slate-300
                  "
                                >
                                    {item.description}
                                </p>
                            </div>

                            {/* Inner Border Glow */}
                            <div
                                className="
                  absolute inset-0 rounded-2xl
                  border border-transparent
                  group-hover:border-white/20
                  transition-all duration-500
                "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
