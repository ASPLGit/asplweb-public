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
        group
        relative
        block
        h-[300px]
        w-full
        overflow-hidden
        rounded-2xl
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
          "
        />
      </div>

      {/* DARK + GRADIENT OVERLAY */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[60%]
          bg-gradient-to-t from-black/100 via-black/50 to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col gap-5 sm:p-6 p-4 justify-end">
        {/* TOP */}
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        {/* BOTTOM */}
        <div className="flex items-end justify-between sm:gap-5 gap-0">
          {/* CHIPS */}
          <div className="flex flex-wrap sm:gap-5 gap-2">
            {services.map((item, index) => (
              <span
                key={index}
                className="
                  sm:rounded-lg rounded-md
                  border border-white
                  sm:p-3 p-1
                  text-xs text-white
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* ARROW BUTTON */}
          <div
            className="
              flex min-h-10 min-w-10 items-center justify-center
              rounded-full
              bg-white
              transition-all duration-300
              group-hover:translate-x-1
              group-hover:rotate-45
            "
          >
            <Image
              src="/images/icons/arrow-up-right-black.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
