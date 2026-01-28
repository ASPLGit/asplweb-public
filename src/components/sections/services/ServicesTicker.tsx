"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SERVICES = [
  "Software Development",
  "Web Design & Development",
  "Mobile App Development",
  "Cloud Solutions",
  "DevOps",
  "Cybersecurity",
  "Blockchain & Web3",
  "AI & ML",
];

export default function ServicesTicker() {
  return (
    <section className="bg-black py-4 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={32}
        loop={true}
        allowTouchMove={false}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="services-ticker"
      >
        {SERVICES.concat(SERVICES).map((service, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <span className="text-white text-sm font-medium whitespace-nowrap flex items-center gap-3">
              {service}
              <span className="text-white/40">✦</span>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
