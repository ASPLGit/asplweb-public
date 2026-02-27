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
    <div
      className="
        relative p-10
      "
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 left-1/3 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-indigo-200/30 blur-3xl rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {TECHNOLOGY_GROUPS.map((group) => (
          <div key={group.category}>
            {/* CATEGORY */}
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {group.category}
            </h3>

            {/* TECHNOLOGY CARDS */}
            <div className="space-y-4">
              {group.items.map((tech) => (
                <Link
                  key={tech.slug}
                  href={`/technologies/${tech.slug}`}
                  onClick={onNavigate}
                  className="
    group
    relative
    flex items-center justify-between
    overflow-hidden
    rounded-xl
    border border-slate-200
    bg-white
    px-4 py-3
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_15px_40px_-10px_rgba(2,132,199,0.15)]
  "
                >
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div
                      className="
        relative
        transition-all duration-300
 
        group-hover:scale-110
        group-hover:rotate-6
      "
                      style={{ perspective: "800px" }}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="
          transition-all duration-300
          drop-shadow-sm
          group-hover:drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]
        "
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-800 transition-colors duration-300 group-hover:text-sky-700">
                      {tech.name}
                    </span>

                    {/* ICON WRAPPER */}

                  </div>
                </Link>


              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
