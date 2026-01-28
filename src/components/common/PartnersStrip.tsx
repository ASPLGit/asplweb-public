"use client";

import Image from "next/image";

const PARTNERS = [
    { name: "Google Cloud", logo: "/images/partners/p-3.svg" },
  { name: "Microsoft", logo: "/images/partners/p-1.svg" },
  { name: "AWS", logo: "/images/partners/p-2.svg" },
  { name: "Azure", logo: "/images/partners/p-4.svg" },
  { name: "Docker", logo: "/images/partners/p-5.svg" },
];

export default function PartnersStrip() {
  return (
    <div className="relative mt-20">
      <div className="container">
        {/* TEXT */}
        <p className="text-sm text-white/70 whitespace-nowrap mb-4 text-center">
          Expertise with
        </p>

        {/* LOGOS */}
        <div
          className="
            relative flex items-center sm:gap-10 gap-4
            overflow-hidden max-w-2xl mx-auto
            [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]
          "
        >
          {PARTNERS.map((item) => (
            <Image
              key={item.name}
              src={item.logo}
              alt={item.name}
              width={140}
              height={60}
              className="
                sm:!h-[20px] h-4 w-auto object-contain
                transition-all duration-300
                grayscale brightness-200 opacity-60
                hover:grayscale-0 hover:brightness-100 hover:opacity-100
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
