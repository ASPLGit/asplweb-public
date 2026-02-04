'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const SERVICES = [
    { title: "Software Development", slug: "software-development" },
    { title: "Website Development", slug: "web-development" },
    { title: "Mobile App Development", slug: "mobile-development" },
    { title: "Enterprise Salesforce", slug: "salesforce" },
    { title: "Cloud Solutions", slug: "cloud-solutions" },
    { title: "DevOps Solutions", slug: "devops" },
    { title: "Cybersecurity", slug: "cybersecurity" },
    { title: "Blockchain & Web3", slug: "blockchain" },
    { title: "AI & ML", slug: "ai-ml" },
    { title: "QA & Software Testing", slug: "qa-testing" },
];

export default function OtherServicesNav() {
    const pathname = usePathname();

    return (
        <section className="">
            <div className="container">
                {/* Heading */}
                <div className="mb-10">
                    <span className="section-label">Services</span>
                    <h2 className="heading-lg mt-3">
                        Other Services
                    </h2>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap gap-4 max-w-5xl">
                    {SERVICES.map((service) => {
                        const isActive =
                            pathname === `/services/${service.slug}`;

                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={`
                                    relative group
                                    rounded-full px-6 py-3
                                    text-sm font-medium
                                    transition-all duration-300
                                    ${isActive
                                        ? "bg-black text-white"
                                        : "bg-slate-100 text-slate-700"
                                    }
                                `}
                            >
                                <span className="relative z-10">
                                    {service.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
