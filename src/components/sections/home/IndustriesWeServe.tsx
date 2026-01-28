// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Image from "next/image";
// import SectionHeading from "@/components/common/SectionHeading";

// const INDUSTRIES = [
//     {
//         name: "Information Technology",
//         image: "/images/industries/it.jpg",
//     },
//     {
//         name: "Blockchain & Web3",
//         image: "/images/industries/bc.jpg",
//     },
//     {
//         name: "Cloud & SaaS",
//         image: "/images/industries/saas.jpg",
//     },
//     {
//         name: "Healthcare",
//         image: "/images/industries/health.jpg",
//     },
//     {
//         name: "Automation ,AI & ML",
//         image: "/images/industries/ai.jpg",
//     },
//     {
//         name: "Cybersecurity",
//         image: "/images/industries/cyber.jpg",
//     },
//     {
//         name: "Enterprise & Business Systems",
//         image: "/images/industries/enterprise.jpg",
//     },
// ];

// export default function IndustriesWeServe() {
//     return (
//         <section className="space-y-10 relative overflow-hidden
//   bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
//   sm:pt-24 pt-10">
//             <div className="container">
//                 <div className="mb-28">
//                     <SectionHeading
//                         sectionLabel="Industries We Serve"
//                         heading="Delivering Solutions Across Industries"
//                         subheading="We deliver tailored IT solutions across diverse sectors, transforming business challenges into innovative digital solutions. From healthcare management to blockchain applications, our expertise spans multiple industries."
//                     />
//                 </div>
//                 <Swiper
//                     spaceBetween={24}
//                     slidesPerView={1}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         1024: { slidesPerView: 4 },
//                     }}
//                 >
//                     {INDUSTRIES.map((item, index) => (
//                         <SwiperSlide key={index}>
//                             <div
//                                 className="
//                                 group
//                                 relative
//                                 h-[220px]
//                                 w-full
//                                 overflow-hidden
//                                 rounded-2xl
//                                 bg-white
//                                 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]
//                                 transition-all
//                                 duration-300
//                                 hover:-translate-y-1
//                                 hover:shadow-xl
//                             "
//                             >
//                                 {/* Image */}
//                                 <div className="relative h-full w-full">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.name}
//                                         fill
//                                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                     />
//                                 </div>

//                                 {/* Title */}
//                                 <div
//                                     className="
//                                     absolute
//                                     bottom-0
//                                     left-0
//                                     w-full
//                                     bg-black/10
//                                     backdrop-blur
//                                     px-4
//                                     py-3
//                                     text-center
//                                 "
//                                 >
//                                     <p className="text-sm text-white font-normal">
//                                         {item.name}
//                                     </p>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </section>
//     );
// }


"use client";

import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";

const INDUSTRIES = [
    {
        name: "Information Technology",
        description: "Custom software, enterprise platforms, and scalable IT solutions.",
        image: "/images/industries/it.jpg",
    },
    {
        name: "Blockchain & Web3",
        description: "Decentralized apps, smart contracts, and Web3 infrastructure.",
        image: "/images/industries/bc.jpg",
    },
    {
        name: "Cloud & SaaS",
        description: "Cloud-native platforms and scalable SaaS architectures.",
        image: "/images/industries/saas.jpg",
    },
    {
        name: "Healthcare",
        description: "Secure digital health platforms and data-driven systems.",
        image: "/images/industries/health.jpg",
    },
    {
        name: "Automation, AI & ML",
        description: "Intelligent automation and AI-powered decision systems.",
        image: "/images/industries/ai.jpg",
    },
    {
        name: "Cybersecurity",
        description: "Security-first systems, audits, and compliance solutions.",
        image: "/images/industries/cyber.jpg",
    },
    {
        name: "Enterprise & Business Systems",
        description: "ERP, CRM, and enterprise-grade digital transformation.",
        image: "/images/industries/enterprise.jpg",
    },
];

export default function IndustriesWeServe() {

    return (
        <section className="sm:space-y-20 space-y-10 relative overflow-hidden
  bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
  sm:pt-20 pt-10 sm:pb-10 pb-0">

            <div className="container relative sm:space-y-16 space-y-10">
                <SectionHeading
                    sectionLabel="Industries We Serve"
                    heading="Industry-Focused Digital Solutions"
                    subheading="We partner with businesses across industries to design, build, and scale secure digital systems that drive real outcomes."
                />

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-5">
                    {INDUSTRIES.map((item, index) => (
                        <div
                            key={index}
                            className="
                                group relative
                                sm:rounded-2xl rounded-xl
                                bg-white
                                border border-slate-200/70
                                overflow-hidden
                                transition-all duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_20px_40px_rgba(2,132,199,0.12)]
                            "
                        >
                            {/* Image */}
                            <div className="relative sm:h-[230px] h-[160px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="
                                        object-cover
                                        transition-all duration-500
                                        group-hover:scale-110
                                        group-hover:brightness-110
                                    "
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/30" />

                                {/* Hover gradient */}
                                <div
                                    className="
                                        absolute inset-0
                                        bg-gradient-to-t
                                        from-black/80 via-black/50 to-transparent
                                        opacity-0
                                        transition-opacity duration-300
                                        group-hover:opacity-100
                                    "
                                />

                                {/* Content */}
                                <div
                                    className="
        absolute inset-x-0 bottom-0
        p-4
        text-white
        bg-black/50

        /* Mobile: visible by default */
        opacity-100 translate-y-0

        /* Desktop: hover interaction */
        sm:opacity-0 sm:translate-y-6
        sm:bg-transparent
        sm:transition-all sm:duration-300
        sm:group-hover:opacity-100
        sm:group-hover:translate-y-0
    "
                                >
                                    <p className="text-xs leading-relaxed text-slate-100">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="flex items-center justify-center gap-2 sm:p-4 p-3">
                                <span className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-sky-500" />
                                <p className="sm:text-sm text-xs font-semibold text-slate-900 text-center">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
