import { Service } from "@/types/service";

interface FeatureGridProps {
    data: Service["featureSection"];
}

export default function FeatureGrid({ data }: FeatureGridProps) {
    return (
        <section>
            <div className="container">
                {/* White Box */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-14">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 sm:gap-y-16 gap-y-8">
                        {data.items.map((item) => (
                            <div key={item.id}>
                                <h3 className="text-lg font-semibold text-slate-900">
                                    <span className="mr-2">
                                        {item.id} 
                                    </span>
                                    {item.title}
                                </h3>

                                <p className="sm:mt-4 mt-3 text-slate-600 leading-relaxed max-w-md">
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
