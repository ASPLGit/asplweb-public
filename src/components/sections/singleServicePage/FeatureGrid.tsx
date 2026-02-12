// import { Service } from "@/types/app";

// interface FeatureGridProps {
//     data: Service["featureSection"];
// }

// export default function FeatureGrid({ data }: FeatureGridProps) {
//     return (
//         <section className="relative overflow-hidden">
//             <div className="container relative z-10">
//                 <div>
//                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 sm:gap-10 gap-y-4">
//                         {data.items.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="
//                                     group
//                                     relative
//                                     sm:rounded-2xl rounded-xl
//                                     border border-slate-200
//                                     bg-white
//                                     p-6 sm:p-8
//                                     transition-all duration-300
//                                     hover:-translate-y-1
//                                     hover:shadow-xl
//                                     hover:shadow-sky-100
//                                 "
//                             >
//                                 <span
//                                     className="
//                                         absolute left-0 top-6
//                                         h-8 w-[3px]
//                                         sm:rounded-2xl rounded-xl
//                                         bg-gradient-to-b
//                                         from-sky-500
//                                         to-cyan-400
//                                     "
//                                 />

//                                 <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-3">
//                                     <span className="text-sky-500 text-base font-medium">
//                                         {item.id}
//                                     </span>
//                                     {item.title}
//                                 </h3>

//                                 <p className="mt-4 text-slate-600 leading-relaxed max-w-md">
//                                     {item.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


import { Service } from "@/types/app";
interface FeatureGridProps {
    data: Service["featureSection"];
}
export default function FeatureGrid({ data }: FeatureGridProps) {
    return (
        <section className="relative overflow-hidden pt-4">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    {data.items.map((item, index) => (
                        <div
                            key={item.id}
                            className="
                                group relative overflow-hidden sm:min-h-[230px]
                                rounded-xl sm:rounded-2xl
                                border border-slate-200
                                bg-white
                                p-6 sm:p-8
                                transition-all duration-500
                                hover:bg-slate-900
                                hover:border-slate-900
                                hover:-translate-y-1
                                hover:shadow-2xl
                                hover:shadow-black/20
                            "
                        >
                            <div className="group-hover:opacity-70 opacity-0 transition-all duration-500 absolute bg-[url('/images/a-outline.svg')] bg-no-repeat bg-contain bg-center w-[280px] h-[200px] -right-7 top-4 bottom-4">
                            </div>
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
                    ))}
                </div>
            </div>
        </section>
    );
}


