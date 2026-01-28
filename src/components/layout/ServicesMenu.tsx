import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

export const SERVICE_GROUPS = [
  {
    category: "Application Development",
    items: [
      {
        title: "Software Development",
        slug: "software-development",
        services: [
          "SaaS Platforms",
          "API Integration",
          "System Modernization",
        ],
      },
      {
        title: "Website Development",
        slug: "web-development",
        services: [
          "Frontend Development",
          "Backend Development",
          "UI/UX Design",
        ],
      },
      {
        title: "Mobile App Development",
        slug: "mobile-development",
        services: [
          "iOS Apps",
          "Android Apps",
          "Cross-Platform",
        ],
      },
    ],
  },

  {
    category: "Cloud & DevOps",
    items: [
      {
        title: "Microsoft & Cloud Solutions",
        slug: "cloud-solutions",
        services: [
          "Cloud Migration",
          "Azure Services",
          "Cloud Security",
          "Infrastructure Setup",
          "Managed Cloud",
        ],
      },
      {
        title: "DevOps & Cloud Automation",
        slug: "devops",
        services: [
          "CI/CD Pipelines",
          "Cloud Automation",
          "Infrastructure as Code",
          "Monitoring",
          "Release Management",
        ],
      },
    ],
  },

  {
    category: "Emerging Technologies",
    items: [
      {
        title: "Blockchain & Web3",
        slug: "blockchain",
        services: [
          "Smart Contracts",
          "DApps",
          "NFT Platforms",
          "Token Development",
          "Web3 Integration",
        ],
      },
      {
        title: "AI & Machine Learning",
        slug: "ai-ml",
        services: [
          "Predictive Analytics",
          "AI Automation",
          "Machine Learning",
          "Business Intelligence",
        ],
      },
    ],
  },

  {
    category: "Security & Compliance",
    items: [
      {
        title: "Cybersecurity Solutions",
        slug: "cybersecurity",
        services: [
          "Application Security",
          "Network Security",
          "Vulnerability Testing",
          "Risk Management",
          "Compliance",
        ],
      },
    ],
  },
];



interface ServicesMenuProps {
  onNavigate?: () => void;
}

export default function ServicesMenu({ onNavigate }: ServicesMenuProps) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {SERVICE_GROUPS.map((group) => (
          <div key={group.category}>
            {/* CATEGORY */}
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800 mb-3">
              {group.category}
            </h3>

            {/* SERVICES */}
            <div className="space-y-4">
              {group.items.map((service) => (
                <div key={service.title}>
                  <Link href={`/services/${service.slug}`}
                    onClick={onNavigate}
                    className="
                      text-sm font-medium text-gradient hover:underline flex items-center gap-1
                      hover:text-sky-600
                    "
                  >
                    {service.title}
                    <Image src="/images/icons/chev-right.svg" alt="arrow" className="h-4 w-4 inline-block" width={16} height={16} />

                  </Link>
                  {/* CHIPS (lighter & tighter) */}
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {service.services.map((chip) => (
                      <span
                        key={chip}
                        className="
                          rounded-md
                          bg-slate-100
                          px-2 py-0.5
                          text-[11px] text-slate-600
                          hover:bg-sky-100 hover:text-sky-700
                          transition
                        "
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="mt-8 flex justify-end">
        <Button
          variant="blue"
          to="/services"
          onClick={onNavigate}
        >
          View All Services
        </Button>
      </div>
    </div>
  );
}

