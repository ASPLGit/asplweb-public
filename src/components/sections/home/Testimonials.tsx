"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
interface TestimonialsProps {
    dark?: boolean;
}

export default function Testimonials({ dark = false }: TestimonialsProps) {
    return (
        <section className={`
        relative overflow-hidden
        sm:pt-24 pt-10
        ${dark
                ? "bg-black"
                : "bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]"
            }
      `}>
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 sm:gap-14 gap-4 relative">

                    {/* LEFT – FIXED CONTENT */}
                    <div className="lg:col-span-5">
                        <h6 className="section-label mb-3">Testimonials</h6>

                        <h2 className={`heading-lg ${dark ? "!text-white" : ""
                            }`}>
                            Our Work Speaks<br />for It’s Self
                        </h2>

                        <p className={`mt-5 text-body ${dark ? "text-slate-300" : ""}`}>
                            Client experiences that reflect our commitment to quality,
                            performance, and long-term partnership.
                        </p>

                        {/* Navigation Buttons */}
                        <div className="mt-10 flex gap-4">
                            <button
                                className="
                                                            testimonial-prev
                                                            group
                                                            flex h-12 w-12 items-center justify-center
                                                            rounded-xl
                                                            border border-slate-200
                                                            bg-white
                                                            text-slate-700
                                                            shadow-sm
                                                            transition-all
                                                            hover:border-sky-500
                                                            hover:bg-sky-50
                                                            active:scale-95
                                                            disabled:cursor-not-allowed
                                                        "
                            >
                                <Image
                                    src="/images/icons/left-arrow.svg"
                                    alt="Previous"
                                    width={18}
                                    height={18}
                                />
                            </button>

                            <button
                                className="
                                testimonial-next
                                group
                                flex h-12 w-12 items-center justify-center
                                rounded-xl
                                bg-[linear-gradient(131.31deg,#007BFF_50.33%,#00D4FF_100.33%)]
                                text-white
                                shadow-md
                                transition-all
                                hover:shadow-lg
                                active:scale-95
                                disabled:cursor-not-allowed
                            "
                            >
                                <Image
                                    src="/images/icons/right-arrow.svg"
                                    alt="Next"
                                    width={18}
                                    height={18}
                                />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT – SLIDER */}
                    <div className="overflow-hidden lg:col-span-7">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".testimonial-prev",
                                nextEl: ".testimonial-next",
                            }}
                            loop
                            spaceBetween={32}
                            slidesPerView={2}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                1024: { slidesPerView: 1.5 },
                                1440: { slidesPerView: 2 }
                            }}
                            className="!p-6"
                        >
                            {TESTIMONIALS.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-full rounded-2xl bg-white sm:p-6 p-4 shadow-lg">

                                        {/* Stars */}
                                        <div className="flex gap-1 text-orange-400">
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>

                                        {/* Text */}
                                        <p className="mt-5 text-body-md">
                                            {item.text}
                                        </p>

                                        <div className="my-6 h-px bg-slate-200" />

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                width={200}
                                                height={200}
                                                className="h-12 w-12 rounded-full object-cover"
                                            />

                                            <div>
                                                <p className="font-semibold text-slate-900">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-slate-500">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>

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
