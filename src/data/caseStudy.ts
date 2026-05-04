type CaseStudy = {
    id: string;
    category: string;
    title: string;
    description: string;
    metrics: Array<{ value: string; label: string; variant?: "light" | "dark" }>;
    tags: string[];
    layerImage: string;
    visual: { image?: string; alt?: string; video?: string };
};

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: "kyc-identity-verification",
        category: "FinTech Platform",
        title: "Scalable KYC & Identity Verification",
        description:
            "Built a reusable, privacy-first identity verification system that eliminated repeated KYC, reduced onboarding friction, and improved regulatory compliance.",
        metrics: [
            { value: "65%", label: "Faster onboarding", variant: "dark" },
            { value: "90%", label: "Cost reduction" },
        ],
        tags: ["FinTech", "Identity Verification", "Compliance", "KYC Automation"],
        layerImage: "/images/layer6.webp",
        visual: {
            image: "/images/caseStudy/case-study1.jpg",
            alt: "KYC Case Study",
        },
    },
    {
        id: "aplombsync-employee-sync",
        category: "HR Data Infrastructure",
        title: "Enterprise Employee Data Synchronization Platform",
        description:
            "AplombSync is an enterprise platform that synchronizes employee data across multiple HR systems, eliminating manual updates, preventing data inconsistencies, and ensuring compliance through automated bidirectional synchronization and intelligent conflict resolution.",
        metrics: [
            { value: "70%", label: "Less HR admin workload", variant: "dark" },
            { value: "99%", label: "Data accuracy across systems" },
        ],
        tags: [
            "HR Technology",
            "Data Synchronization",
            "Enterprise Integration",
            "Employee Data Management",
            "Automation",
            "HRIS Integration"
        ],
        layerImage: "/images/layer6.webp",
        visual: {
            image: "/images/caseStudy/case-study2.webp",
            alt: "AplombSync Case Study",
        },
    }
];