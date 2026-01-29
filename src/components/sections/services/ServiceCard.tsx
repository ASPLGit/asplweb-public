import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  image: string;
  services: string[];
  href?: string;
}

export default function ServiceCard({
  title,
  image,
  services,
  href = "#",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="
        group relative block
        h-[320px] w-full
        overflow-hidden
        rounded-3xl
        bg-black
        shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]
        transition-all duration-300
        sm:hover:-translate-y-2
      "
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
        "
      />

      {/* BASE OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* GRADIENT */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90 via-black/55 to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col justify-end gap-5 sm:p-6 p-4 text-white">

        {/* TITLE */}
        <h3 className="text-xl font-semibold leading-snug">
          {title}
        </h3>

        {/* BOTTOM ROW */}
        <div className="flex items-end justify-between gap-4">

          {/* SERVICE CHIPS */}
          <div className="flex flex-wrap gap-2">
            {services.map((item, index) => (
              <span
                key={index}
                className="
                  rounded-md
                  border border-white/70
                  bg-white/5 backdrop-blur
                  px-3 py-1
                  text-xs font-medium
                  text-white/90
                  transition
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* ARROW CTA */}
          <div
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-full
              bg-white
              text-black
              transition-all duration-300
              sm:group-hover:translate-x-1
              sm:group-hover:-translate-y-1
              sm:group-hover:rotate-45
            "
          >
            <Image
              src="/images/icons/arrow-up-right-black.svg"
              alt="arrow"
              width={18}
              height={18}
            />
          </div>

        </div>
      </div>
    </Link>
  );
}
