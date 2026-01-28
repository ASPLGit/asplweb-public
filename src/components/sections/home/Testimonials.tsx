"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const TESTIMONIALS = [
    {
        rating: 5,
        text:"Guys done greater job in my projects. They are always ready to take challenging work and successfully completed. Also support us to maintain our website and server. I got daily/weekly work update from my hired developers. I am really impressed.",
        name: "John",
        role: "",
        avatar: "/images/clients/Avatar.png",
    },
    {
        rating: 5,
        text:"Great communication throughout the project, and the final design functionality were exactly what I wanted. Don't settle for second-best when you can connect this team for best output. I am still working with this excellent team.",
        name: "Coray",
        role: "CEO, IPS",
        avatar: "/images/clients/Avatar.png",
    },
    {
        rating: 5,
        text:"They always deliver the best in market solutions! Thank you very much Aplomb Soft to provide me such fantastic and knowledgeable team based on our business needs. Keep it up.",
        name: "Humberto",
        role: "Doctor",
        avatar: "/images/clients/Avatar.png",
    },
];

export default function Testimonials() {
    return (
        <section className="
  relative overflow-hidden
  bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
  sm:pt-24 pt-10
">


            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 sm:gap-14 gap-10 relative">

                    {/* LEFT – FIXED CONTENT */}
                    <div className="lg:col-span-5">
                        <h6 className="section-label mb-3">Testimonials</h6>

                        <h2 className="heading-lg">
                            Our Work Speaks<br />for It’s Self
                        </h2>

                        <p className="mt-5 text-body">
                            Client experiences that reflect our commitment to quality,
                            performance, and long-term partnership.
                        </p>

                        {/* Navigation Buttons */}
                        <div className="mt-10 flex gap-4">
                            <button
                                className="testimonial-prev flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow hover:scale-105 transition"
                            >
                                <Image
                                    src="/images/icons/left-arrow.svg"
                                    alt="left-arrow"
                                    width={20}
                                    height={20}
                                />
                            </button>

                            <button
                                className="testimonial-next flex h-12 w-12 items-center justify-center rounded-xl bg-gradient text-white shadow hover:scale-105 transition"
                            >
                                <Image
                                    src="/images/icons/right-arrow.svg"
                                    alt="left-arrow"
                                    width={20}
                                    height={20}
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
                            spaceBetween={32}
                            slidesPerView={2}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 },
                            }}
                            className="!p-6"
                        >
                            {TESTIMONIALS.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-full rounded-2xl bg-white sm:p-8 p-4 shadow-lg">

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
                                                width={12}
                                                height={12}
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
