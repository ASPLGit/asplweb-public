// import { Service } from "@/types/app";

// interface FeatureGridProps {
//     data: Service["featureSection"];
// }

// export default function FeatureGrid({ data }: FeatureGridProps) {
//     return (
//         <section className="relative overflow-hidden sm:pb-20 pb-10 pt-4">
//             <div className="container">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
//                     {data.items.map((item, index) => (
//                         <div
//                             key={item.id}
//                             className="
//                 group relative overflow-hidden
//                 sm:min-h-[230px]
//                 rounded-2xl
//                 border border-slate-200
//                 p-6 sm:p-8
//                 bg-white
//                 transition-all duration-500 ease-out
//                 hover:-translate-y-2
//                 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]
//               "
//                         >
//                             <div
//                                 className="
//                                     absolute inset-0 group-hover:opacity-40 opacity-0
//                                     bg-[url('/images/layer3.webp')]
//                                     bg-cover bg-right-top rounded-2xl
//                                     transition-all duration-500 z-10
//                                 "
//                             />
//                             {/* Gradient Hover Background */}
//                             <div
//                                 className="
//                   absolute inset-0
//                   opacity-0 group-hover:opacity-100
//                   transition-opacity duration-500
//                   bg-[url('/images/bg.webp')]
//                   bg-cover bg-center
//                 "
//                             />

//                             {/* Dark Gradient Overlay */}
//                             <div
//                                 className="
//                   absolute inset-0
//                   opacity-0 group-hover:opacity-90
//                   transition-opacity duration-500
//                   bg-gradient-to-br
//                   from-black/80 via-indigo-900/70 to-purple-900/70
//                 "
//                             />
//                             <div
//                                 className="
//                   absolute -top-20 -left-20 w-60 h-60
//                   bg-cyan-400/20
//                   rounded-full blur-3xl
//                   opacity-0 group-hover:opacity-100
//                   transition-all duration-700
//                   group-hover:translate-x-20 group-hover:translate-y-20
//                 "
//                             />

//                             <div className="relative z-10">
//                                 {/* STEP BADGE */}
//                                 <div
//                                     className="
//                     mb-6 inline-flex items-center justify-center
//                     h-10 w-10
//                     rounded-xl
//                     bg-slate-400
//                     text-sm font-semibold text-white
//                     transition-all duration-500
//                     group-hover:bg-white/20
//                     group-hover:backdrop-blur
//                     group-hover:scale-110
//                   "
//                                 >
//                                     {String(index + 1).padStart(2, "0")}
//                                 </div>

//                                 {/* TITLE */}
//                                 <h3
//                                     className="
//                     text-lg sm:text-xl font-semibold
//                     text-slate-900
//                     transition-all duration-500
//                     group-hover:text-white
//                   "
//                                 >
//                                     {item.title}
//                                 </h3>

//                                 {/* DESCRIPTION */}
//                                 <p
//                                     className="
//                     mt-3
//                     text-sm sm:text-base
//                     leading-relaxed
//                     text-slate-600
//                     transition-colors duration-500
//                     group-hover:text-slate-300
//                   "
//                                 >
//                                     {item.description}
//                                 </p>
//                             </div>

//                             {/* Inner Border Glow */}
//                             <div
//                                 className="
//                   absolute inset-0 rounded-2xl
//                   border border-transparent
//                   group-hover:border-white/20
//                   transition-all duration-500
//                 "
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { Service } from "@/types/app";

interface FeatureGridProps {
    data: Service["featureSection"];
}

export default function FeatureGrid({ data }: FeatureGridProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        swiperRef.current?.slideTo(index);
    };

    return (
        <section>
            <div className="container">
                <div className="lg:flex justify-between gap-16 hidden">
                    {/* LEFT SIDE — SYNCED TITLES */}
                    <div className="space-y-6">
                        {data.items.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => handleClick(index)}
                                className={`flex items-center gap-4 text-left transition-all duration-300 ${activeIndex === index
                                    ? "opacity-100"
                                    : "opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <div
                                    className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition ${activeIndex === index
                                        ? "bg-black text-white"
                                        : "bg-slate-200 text-slate-700"
                                        }`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <span
                                    className={`text-lg ${activeIndex === index
                                        ? "font-semibold text-black"
                                        : "text-slate-500"
                                        }`}
                                >
                                    {item.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT SIDE — SWIPER */}
                    <div className="relative h-[520px] lg:sticky lg:top-24 overflow-visible">

                        {/* Mist Top */}
                        <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />

                        {/* Mist Bottom */}
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

                        <Swiper
                            direction="vertical"
                            slidesPerView="auto"
                            centeredSlides
                            spaceBetween={30}
                            mousewheel={{
                                forceToAxis: true,
                                sensitivity: 1,
                                releaseOnEdges: false,
                                thresholdDelta: 50,
                                thresholdTime: 400,
                            }}

                            speed={600}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) =>
                                setActiveIndex(swiper.activeIndex)
                            }
                            className="h-full !px-10"
                            modules={[Mousewheel]}
                        >
                            {data.items.map((item) => (
                                <SwiperSlide
                                    key={item.id}
                                    className="!h-[280px] flex items-center justify-center overflow-visible"
                                >
                                    <div className="feature-card w-full max-w-md">
                                        <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-2xl">
                                            <h3 className="text-xl font-semibold text-slate-900">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-base leading-relaxed text-slate-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="lg:hidden block space-y-6">

                    {data.items.map((item, index) => (
                        <div
                            key={item.id}
                            className="rounded-2xl border border-slate-200 p-6 bg-white shadow-md"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-sm leading-relaxed text-slate-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
