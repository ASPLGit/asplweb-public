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
                    <div className="relative 2xl:h-[520px] h-[400px] lg:sticky lg:top-24 overflow-visible">

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
