import ServiceCard from "./ServiceCard";

const SERVICES = [
    {
        title: "Software Development",
        image: "/images/img1.jpg",
        href: "/services/software-development",
        services: [
            "Enterprise Apps",
            "Custom Software",
            "SaaS Platforms",
            "API Integration",
            "System Modernization",
        ],
    },
    {
        title: "Website Development",
        image: "/images/img2.jpg",
        href: "/services/web-development",
        services: [
            "Responsive Websites",
            "Frontend Development",
            "Backend Development",
            "UI/UX Design",
            "CMS Solutions",
        ],
    },
    {
        title: "Mobile App Development",
        image: "/images/img3.jpg",
        href: "/services/mobile-development",
        services: [
            "iOS Apps",
            "Android Apps",
            "Cross-Platform",
            "App UI/UX",
            "App Maintenance",
        ],
    },
    {
        title: "Blockchain & Web3",
        image: "/images/img4.jpg",
        href: "/services/web-development",
        services: [
            "Smart Contracts",
            "DApps",
            "NFT Platforms",
            "Token Development",
            "Web3 Integration",
        ],
    },
    {
        title: "Microsoft & Cloud Solutions",
        image: "/images/img5.webp",
        href: "/services/web-development",
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
        image: "/images/img6.jpg",
        href: "/services/web-development",
        services: [
            "CI/CD Pipelines",
            "Cloud Automation",
            "Infrastructure as Code",
            "Monitoring",
            "Release Management",
        ],
    },
    {
        title: "AI & Machine Learning",
        image: "/images/img7.jpg",
        href: "/services/web-development",
        services: [
            "Predictive Analytics",
            "Data Modeling",
            "AI Automation",
            "Machine Learning",
            "Business Intelligence",
        ],
    },
    {
        title: "Cybersecurity Solutions",
        image: "/images/img8.jpg",
        href: "/services/web-development",
        services: [
            "Application Security",
            "Network Security",
            "Vulnerability Testing",
            "Risk Management",
            "Compliance",
        ],
    },
];


export default function ServiceSection() {
    return (
        <section className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        image={service.image}
                        services={service.services}
                        href={service.href}
                    />
                ))}
            </div>
        </section>
    );
}