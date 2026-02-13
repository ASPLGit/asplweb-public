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
                                group relative overflow-hidden sm:min-h-[230px]
                                rounded-xl sm:rounded-2xl
                                border border-slate-200
                                p-6 sm:p-8
                                transition-all duration-500
                                hover:-translate-y-1
                                hover:shadow-2xl
                                hover:shadow-black/20
                                bg-white
                                hover:bg-[url('/images/bg.webp')] relative
                                bg-cover bg-center
                            "
                        >
                            <div
                                className="
                                    absolute inset-0 group-hover:opacity-40 opacity-0
                                    bg-[url('/images/layer3.webp')]
                                    bg-cover bg-right-top rounded-2xl
                                    transition-all duration-500
                                "
                            />
                            <div className=" relative z-10">
                                {/* STEP BADGE */}
                                <div
                                    className="
                                    mb-6 inline-flex items-center justify-center
                                    h-9 w-9
                                    rounded-lg
                                    bg-slate-400
                                    text-sm font-semibold
                                    text-white
                                    transition-all duration-500
                                    group-hover:bg-slate-400
                                "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="
                                    text-lg sm:text-xl
                                    font-semibold
                                    text-slate-900
                                    transition-colors duration-500
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


