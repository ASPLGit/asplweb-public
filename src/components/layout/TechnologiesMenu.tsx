import Link from "next/link";
import Image from "next/image";
import { TECHNOLOGY_GROUPS } from "@/data/technologiesMenu";

interface TechnologiesMenuProps {
  onNavigate?: () => void;
}

export default function TechnologiesMenu({
  onNavigate,
}: TechnologiesMenuProps) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {TECHNOLOGY_GROUPS.map((group) => (
          <div key={group.category}>
            {/* CATEGORY */}
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-800">
              {group.category}
            </h3>

            {/* TECHNOLOGY CARDS */}
            <div className="space-y-3">
              {group.items.map((tech) => (
                <Link
                  key={tech.slug}
                  href={`/technologies/${tech.slug}`}
                  onClick={onNavigate}
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                    rounded-lg
                    border border-slate-200
                    bg-white
                    px-4 py-3
                    transition-all duration-300 max-w-[200px]
                    hover:-translate-y-0.5
                    hover:border-sky-300
                    hover:shadow-[0_10px_30px_rgba(2,132,199,0.05)]
                  "
                >
                  {/* TEXT */}
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-800 group-hover:text-sky-700 transition">
                      {tech.name}
                    </span>
                  </div>

                  {/* DECORATIVE ICON (BOTTOM RIGHT, HALF CUT) */}
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="
                      pointer-events-none
                      absolute
                      -bottom-2
                      -right-1
                      opacity-50
                      transition-transform duration-300
                      group-hover:scale-100 group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
