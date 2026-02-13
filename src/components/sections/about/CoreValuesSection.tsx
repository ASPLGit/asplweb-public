import Image from "next/image";
import Link from "next/link";

const VALUES = [
  {
    title: "Partnership Over Projects",
    description:
      "At AplombSoft, we don’t see ourselves as a vendor delivering isolated tasks. We work alongside you as a long-term technology partner, staying involved beyond delivery and helping your systems grow as your business grows.",
    icon: "/images/values/core1.svg",
  },
  {
    title: "Practical Innovation",
    description:
      "We enjoy building modern solutions, but only when they make business sense. At AplombSoft, innovation means solving real problems in a cost-conscious way not adding complexity for the sake of trends.",
    icon: "/images/values/core2.svg",
  },
  {
    title: "Quality Is Built In",
    description:
      "From architecture decisions to final deployment, quality is part of how we work. Clean code, thoughtful structure, and reliable performance are not extras they’re standard practice here.",
    icon: "/images/values/core3.svg",
  },
  {
    title: "Transparent Collaboration",
    description:
      "You’ll always know where things stand. We believe in open communication, clear timelines, and honest conversations. That’s how trust is built and how strong technical partnerships last.",
    icon: "/images/values/core4.svg",
  },
  {
    title: "Designed to Scale",
    description:
      "At AplombSoft, we build with the future in mind. Whether it’s application logic, database design, or infrastructure setup, we make sure your systems are ready to evolve without constant rebuilds.",
    icon: "/images/values/core5.svg",
  },
  {
    title: "Technology with Purpose",
    description:
      "We don’t push tools because they’re popular. We choose technologies carefully based on your goals, your team, and your long-term roadmap. The right choice today should still make sense tomorrow.",
    icon: "/images/values/core6.svg",
  },
];



export default function CoreValuesSection() {
  return (
    <section className="bg-sky-50 py-10 sm:py-14 2xl:py-20">
      <div className="container">
        {/* HEADING */}
        <div className="sm:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="heading-lg">
            Core Values at AplombSoft
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* QUOTE CARD */}
          <div
            className="
              flex items-center justify-center
              rounded-xl
              p-8
              text-center
            "
          >
            <blockquote className="text-2xl italic font-medium text-slate-800 leading-relaxed font-lora">
              “We don’t just deliver solutions
              <br />
              we build relationships that last.”
            </blockquote>
          </div>

          {/* VALUE CARDS */}
          {VALUES.map((item, index) => (
            <div
              key={index}
              className="
                group
                sm:rounded-2xl rounded-xl
                bg-white
                sm:p-6 p-4
                shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-md
              "
            >
              <div className="mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={44}
                  height={44}
                  className="
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              <h4 className="text-base font-semibold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}

          {/* CTA CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-[url('/images/bg.webp')]
              bg-cover bg-center
              p-8
              text-white
              flex flex-col justify-center
            "
          >
            <div
              className="
            absolute inset-0
            bg-[url('/images/layer3.webp')]
            bg-cover bg-right-top bg-no-repeat
            sm:blur-[0px]
            opacity-50
        "
            />
            <div className=" relative z-10">
              <h4 className="text-xl font-semibold leading-snug">
                How We Turn Values
                <br />
                Into Services
              </h4>

              <Link
                href="/services"
                className="
                mt-6 inline-block
                text-sm font-medium
                underline underline-offset-4
                hover:opacity-90
              "
              >
                Explore Our Services
              </Link>
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}