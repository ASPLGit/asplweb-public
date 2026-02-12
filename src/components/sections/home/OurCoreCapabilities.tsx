"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { CAPABILITIES } from "@/data/coreCapabilities";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function OurCoreCapabilities() {
    return (
        <section className="bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)] pt-10 sm:pt-10">
            <div className="space-y-0 sm:space-y-10">
                <div className="container lg:hidden block">
                    <h3 className="heading-lg">
                        Our Core Capabilities
                    </h3>
                    {/* Navigation Buttons */}
                    <div className="mt-5 flex items-center gap-4">
                        {/* PREV */}
                        <button
                            aria-label="Previous slide"
                            className="
                                capability-prev
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

                        {/* NEXT */}
                        <button
                            aria-label="Next slide"
                            className="
                                capability-next
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
                <div className="flex items-center gap-10">
                    <div className="lg:flex flex-col pl-[5%] hidden">
                        <h3 className="heading-lg">
                            Our Core Capabilities
                        </h3>
                        {/* Navigation Buttons */}
                        <div className="mt-10 flex items-center gap-4">
                            {/* PREV */}
                            <button
                                className="
                                capability-prev
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

                            {/* NEXT */}
                            <button
                                className="
                                capability-next
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
                        <div className="mt-6">
                            <Link
                                href="/services"
                                className="
      inline-flex items-center gap-2
      text-sm font-medium text-black underline
      hover:text-blue-500
      transition
      group
    "
                            >
                                View all services
                                <span className="transition-transform group-hover:translate-x-1">
                                    <Image src="/images/icons/arrow-up-right-black.svg" alt="right icon" width={20} height={20} />
                                </span>
                            </Link>
                        </div>

                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        speed={800}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop
                        navigation={{
                            prevEl: ".capability-prev",
                            nextEl: ".capability-next",
                        }}
                        slidesPerView={1.1}
                        breakpoints={{
                            640: { slidesPerView: 1.3, centeredSlides: true },
                            768: { slidesPerView: 2, centeredSlides: true },
                            1200: { slidesPerView: 2.5, centeredSlides: false },
                        }}
                        className="sm:!p-14 !p-10"
                    >
                        {CAPABILITIES.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CapabilitySlide {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex sm:hidden justify-center">
                    <Button variant="blue" to="/services">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
}

/* ================= SLIDE CARD ================= */

interface CapabilityCardProps {
    title: string;
    desc: string;
    img: string;
    href: string;
}

function CapabilitySlide({ title, desc, img, href }: CapabilityCardProps) {
    return (
        <div
            className="
                group relative block
                h-[320px]
                overflow-hidden
                rounded-3xl
                bg-black
                shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)]
                transition-transform duration-300
                sm:hover:-translate-y-2
            "
        >
            {/* Image */}
            <Image
                src={img}
                alt={title}
                fill
                className="
                    object-cover
                    transition-transform duration-700
                    sm:group-hover:scale-110
                "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Gradient */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/90 via-black/50 to-transparent
                "
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="sm:text-2xl text-lg font-medium">
                    {title}
                </h3>

                <p className="mt-2 sm:text-sm text-xs text-white/90 leading-relaxed max-w-md">
                    {desc}
                </p>

                <Link
                    href={href}
                    className="
                        mt-4 inline-flex items-center gap-2 hover:text-blue-500
                        sm:text-sm text-xs font-medium
                        underline underline-offset-4
                        opacity-90
                        transition
                        group-hover:opacity-100
                    "
                >
                    Explore Service
                    <Image
                        src="/images/icons/arrow-up-right.svg"
                        alt="arrow"
                        width={18}
                        height={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </div>
    );
}
