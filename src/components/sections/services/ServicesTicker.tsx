"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SERVICES = [
  "Enterprise Software Development",
  "Web Design & Development",
  "Mobile App Development",
  "Cloud & Azure Solutions",
  "DevOps & Automation",
  "Cybersecurity",
  "Blockchain & Web3",
  "AI & Machine Learning",
];

export default function ServicesTicker() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-6">
      {/* subtle top & bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200" />

      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={24}
        loop
        allowTouchMove={false}
        speed={9000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="services-ticker"
      >
        {SERVICES.concat(SERVICES).map((service, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div
              className="
                flex items-center gap-4
                rounded-full
                border border-slate-200
                bg-white
                px-5 py-2
                text-sm
                font-medium
                text-slate-700
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <span>{service}</span>

              {/* separator dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
