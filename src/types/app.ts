export interface FeatureItem {
    id: string;
    title: string;
    description: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface FeatureSection {
    items: FeatureItem[];
}
export interface TechnologyItem {
    logo: string;
}

export interface FAQSectionData {
    items: FAQItem[];
    href?: string;
}

export interface FAQItem {
    title: string;
    content: string;
}

export interface Service {
    slug: string;
    title: string;
    description: string;

    cta?: {
        primary?: {
            label: string;
            href: string;
        };
        secondary?: {
            label: string;
            href: string;
        };
    };

    section: {
        label: string;
        heading: string;
        subheading: string;
    };

    featureSection: FeatureSection;
    stats?: StatItem[];
    TechnologySection: {
        items: TechnologyItem[];
    }
    faq: {
        items: FAQItem[];
    }
}
