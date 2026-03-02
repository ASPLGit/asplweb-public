import { SERVICES } from "@/data/allServices";
import ServiceCard from "./ServiceCard";


export default function ServiceSection() {
    return (
        <section className="relative">
            {/* background accents */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)",
                        backgroundSize: "26px 26px",
                    }}
                />
            </div>

            <div className="container relative">
                {/* Mobile: horizontal snap carousel */}
                <div className="md:hidden relative -mx-4 px-4">
                    {/* edge fades */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />

                    <div
                        className="flex gap-4 overflow-x-auto py-2 snap-x snap-mandatory
                        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {SERVICES.map((service, index) => (
                            <div
                                key={service.href ?? service.title ?? index}
                                className="snap-start min-w-[280px] max-w-[360px] w-[85%] sm:w-[70%]"
                            >
                                <ServiceCard
                                    title={service.title}
                                    image={service.image}
                                    services={service.services}
                                    href={service.href}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop/tablet: staggered bento grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {SERVICES.map((service, index) => {
                        const stagger =
                            index % 3 === 1
                                ? "lg:translate-y-6"
                                : index % 3 === 2
                                    ? "lg:translate-y-12"
                                    : "";

                        return (
                            <div
                                key={service.href ?? service.title ?? index}
                                className={`transition-transform duration-300 ${stagger}`}
                            >
                                <ServiceCard
                                    title={service.title}
                                    image={service.image}
                                    services={service.services}
                                    href={service.href}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
