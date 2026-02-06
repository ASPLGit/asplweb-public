import { Service } from "@/types/app";

interface FeatureGridProps {
    data: Service["featureSection"];
}

export default function FeatureGrid({ data }: FeatureGridProps) {
    return (
        <section className="relative overflow-hidden">
            <div className="container relative z-10">
                <div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 sm:gap-10 gap-y-4">
                        {data.items.map((item) => (
                            <div
                                key={item.id}
                                className="
                                    group
                                    relative
                                    sm:rounded-2xl rounded-xl
                                    border border-slate-200
                                    bg-white
                                    p-6 sm:p-8
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    hover:shadow-sky-100
                                "
                            >
                                <span
                                    className="
                                        absolute left-0 top-6
                                        h-8 w-[3px]
                                        sm:rounded-2xl rounded-xl
                                        bg-gradient-to-b
                                        from-sky-500
                                        to-cyan-400
                                    "
                                />

                                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-3">
                                    <span className="text-sky-500 text-base font-medium">
                                        {item.id}
                                    </span>
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-relaxed max-w-md">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
