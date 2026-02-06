import Image from "next/image";
import Link from "next/link";

const VALUES = [
  {
    title: "Partnership Over Projects",
    description:
      "We focus on long-term partnerships, collaborating closely with our clients as an extended team to drive continuous growth and shared success.",
    icon: "/images/values/core1.svg",
  },
  {
    title: "Cost-Effective Innovation",
    description:
      "We balance innovation with practicality, delivering solutions that provide real value while remaining cost-efficient and sustainable.",
    icon: "/images/values/core2.svg",
  },
  {
    title: "Quality as a Standard",
    description:
      "Quality is not an afterthought. From planning to delivery, we prioritize reliability, performance, and maintainability in everything we build.",
    icon: "/images/values/core3.svg",
  },
  {
    title: "Transparency & Trust",
    description:
      "Open communication, clear processes, and honest collaboration are central to how we work ensuring clients always know where things stand.",
    icon: "/images/values/core4.svg",
  },
  {
    title: "Scalability with Purpose",
    description:
      "We design solutions with growth in mind, making sure systems are flexible and ready to evolve as businesses scale.",
    icon: "/images/values/core5.svg",
  },
  {
    title: "Thoughtful Technology Choices",
    description:
      "We stay technology-agnostic and focus on selecting the right tools and architectures that genuinely serve business needs, not trends.",
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