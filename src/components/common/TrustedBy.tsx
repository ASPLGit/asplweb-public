"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const LOGOS = [
    "/images/brands/tabfusion.svg",
    "/images/brands/conniemd.svg",
    "/images/brands/yomoken.svg",
    "/images/brands/ukg.svg",
    "/images/brands/aspire.svg",
    "/images/brands/Inova.png",
    "/images/brands/bridgeHR.svg",
];

export default function TrustedBy() {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="container">
                <div className="flex items-center sm:flex-row flex-col gap-10">

                    {/* LEFT – FIXED TEXT */}
                    <div className="max-w-xs shrink-0">
                        <p className="text-body">
                            Trusted by fast-growing brands and established enterprises across industries.
                        </p>
                    </div>

                    {/* RIGHT – SLIDER */}
                    <div className="relative flex-1 overflow-hidden">

                        {/* Fog / Shadow Overlay */}
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10
              bg-gradient-to-l from-white via-white/80 to-transparent" />

                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={20}
                            loop
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            className="trusted-slider !py-4"
                        >
                            {LOGOS.map((logo, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="!w-auto flex items-center"
                                >
                                    <div
                                        className="
        group
        flex items-center justify-center
        rounded-xl
        border border-slate-200/70
        bg-white/70 backdrop-blur-sm
        px-6 py-4
        shadow-[0_10px_25px_-15px_rgba(0,0,0,0.15)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]
      "
                                    >
                                        <Image
                                            src={logo}
                                            alt="Brand logo"
                                            width={200}
                                            height={28}
                                            className="
          h-7 sm:w-[200px] w-[120px]
          object-contain
          opacity-70
          transition
          group-hover:opacity-100
        "
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    );
}
