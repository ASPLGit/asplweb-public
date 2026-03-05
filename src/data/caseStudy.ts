type CaseStudy = {
    id: string;
    category: string;
    title: string;
    description: string;
    metrics: Array<{ value: string; label: string; variant?: "light" | "dark" }>;
    tags: string[];
    layerImage: string;
    visual: { src: string; alt: string };
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
            src: "/images/caseStudy/case-study1.jpg",
            alt: "KYC Case Study",
        },
    },
];