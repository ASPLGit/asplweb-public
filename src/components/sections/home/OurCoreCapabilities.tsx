// import Button from "@/components/ui/Button";
// import { CAPABILITIES } from "@/data/capabilities";
// import Image from "next/image";
// import Link from "next/link";


// export default function OurCoreCapabilities() {
//     return (
//         <section className="bg-lightblue py-10 sm:py-14 2xl:py-20">
//             <div className="container sm:space-y-14 space-y-8">
//                 <h3 className="heading-lg text-center">Our Core Capabilities</h3>
//                 <div className="sm:space-y-6 space-y-4">
//                     {/* ROW 1 */}
//                     <div className="grid grid-cols-1">
//                         <CapabilityCard {...CAPABILITIES[0]} />

//                     </div>

//                     {/* ROW 2 */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <CapabilityCard {...CAPABILITIES[1]} />
//                         <CapabilityCard {...CAPABILITIES[2]} />
//                     </div>

//                     {/* ROW 3 */}
//                     <div className="grid grid-cols-1">
//                         <CapabilityCard {...CAPABILITIES[3]} />
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center">
//                     <Button variant="blue" to="/services">
//                         View All Services
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ================= CARD ================= */

// interface CapabilityCardProps {
//     title: string;
//     desc: string;
//     img: string;
//     href: string;
// }

// function CapabilityCard({ title, desc, img, href }: CapabilityCardProps) {
//     return (
//         <div className="relative h-[260px] rounded-2xl overflow-hidden">
//             {/* Background Image */}
//             <Image
//                 src={img}
//                 alt={title}
//                 fill
//                 priority={false}
//                 className="object-cover"
//             />

//             {/* Bottom Overlay */}
//             <div
//                 className="
//           absolute bottom-0 left-0 w-full h-[60%]
//           bg-gradient-to-t from-black/100 via-black/50 to-transparent
//         "
//             />

//             {/* Content */}
//             <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 text-white">
//                 {/* Title */}
//                 <h3 className="text-2xl font-normal">
//                     {title}
//                 </h3>

//                 {/* Description + Button */}
//                 <div className="max-w-xl">
//                     <p className="text-sm text-white/90 leading-relaxed">
//                         {desc}
//                     </p>

//                     <Link
//                         href={href}
//                         className="
//               mt-4 inline-flex items-center gap-2 group
//               rounded-full border-white border
//               pl-5 pr-3 py-2 text-sm font-normal
//               text-white group
//               transition-all duration-300
//             "
//                     >
//                         Read More
//                         <Image
//                             src="/images/icons/arrow-up-right.svg"
//                             alt="arrow"
//                             width={20}
//                             height={20}
//                             className="transition-transform duration-300 ease-out group-hover:translate-x-1"
//                         />
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { CAPABILITIES } from "@/data/coreCapabilities";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function OurCoreCapabilities() {
    return (
        <section className="bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)] py-10 sm:py-14 2xl:py-20">
            <div className="space-y-0 sm:space-y-10">
                <h3 className="heading-lg text-center sm:hidden block">
                    Our Core Capabilities
                </h3>
                <div className="flex items-center gap-10">
                    <h3 className="heading-lg pl-[5%] hidden sm:block">
                        Our Core Capabilities
                    </h3>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        speed={800}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop
                        slidesPerView={1.1}
                        breakpoints={{
                            640: { slidesPerView: 1.3, centeredSlides: true },
                            768: { slidesPerView: 2, centeredSlides: true },
                            1024: { slidesPerView: 2.5, centeredSlides: false },
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
                <div className="flex justify-center">
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
                shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]
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
