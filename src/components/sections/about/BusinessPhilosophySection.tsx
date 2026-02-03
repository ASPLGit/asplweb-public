import Image from "next/image";

const PHILOSOPHY = [
    {
        title: "Scalability",
        description:
            "We ask whether a solution can grow naturally with the business without needing a complete rebuild.",
        icon: "/images/values/core7.svg",
    },
    {
        title: "Creativity",
        description:
            "We focus on solving problems thoughtfully, using creativity where it adds clarity and value.",
        icon: "/images/values/core8.svg",
    },
    {
        title: "Cost-Effectiveness",
        description:
            "Every decision is evaluated on real business impact avoiding unnecessary complexity or cost.",
        icon: "/images/values/core9.svg",
    },
];

export default function BusinessPhilosophySection() {
    return (
        <section className="relative bg-slate-50 py-10 sm:py-14 2xl:py-20 overflow-hidden">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-20 gap-10 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="heading-lg">
                            Our Business Philosophy
                        </h2>

                        <p className="text-body max-w-lg">
                            At AplombSoft, we believe real value is created when technology
                            decisions are made with clarity and purpose. Every project we take
                            on is evaluated through a practical lens ensuring what we build
                            today continues to deliver value tomorrow.
                        </p>

                        {/* QUOTE */}
                        <div className="mt-10 border-l-4 border-blue-600 pl-6">
                            <p className="text-lg font-medium text-slate-800 font-lora leading-relaxed italic">
                                “We build for today,
                                <br />
                                with tomorrow in mind.”
                            </p>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-6 h-full w-0.5 bg-gradient-to-b from-blue-600/40 via-blue-600/20 to-transparent" />

                        <div className="space-y-8">
                            {PHILOSOPHY.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    group
                    relative
                    rounded-xl
                    bg-white
                    p-6
                    shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]
                    transition-all duration-300
                    hover:-translate-y-1
                    flex gap-8
                  "
                                >

                                    <div
                                        className="
                      flex h-12 w-12 min-w-12 min-h-12 items-center justify-center
                      rounded-lg
                      bg-blue-50
                      border border-blue-100
                    "
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={24}
                                            height={24}
                                            className="min-w-6 min-h-6"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900">
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
