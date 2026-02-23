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
    name: string;
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



export interface TechnologyService {
    slug: string;
    hero: {
        title: string;
        description: string;
        stats?: {
            label: string;
            value: string;
        }[];
    };

    sectionHeading: {
        sectionLabel: string;
        heading: string;
        subheading: string;
    };

    expertiseImage: {
        src: string;
        alt: string;
    };

    expertise: {
        chip: string;
        title: string;
        description: string;
    }[];
    comparison?: {
        title: string;
        sql: string;
        mongodb: string;
    }[];

    faq: {
        items: {
            title: string;
            content: string;
        }[];
    };

    caseStudy?: {
        sectionHeading: {
            sectionLabel: string;
            heading: string;
            subheading: string;
        };
        category: string;
        title: string;
        description: string;
        metrics: {
            value: string;
            label: string;
            variant?: "dark";
        }[];
        backgroundLayerImage: string;
        caseImage: {
            src: string;
            alt: string;
        };
    };
}

export type BlogType =
    | "Software"
    | "Website"
    | "Application"
    | "QA & Testing"
    | "Microsoft"
    | "DevOps & Cloud"
    | "Salesforce"
    | "Cybersecurity"
    | "AI"
    | "Blockchain";


export interface BlogSection {
    heading?: string;
    paragraphs?: string[];
    list?: string[];
}

export interface BlogContent {
    mainHeading: string;  
    sections: BlogSection[];
}
export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    content: BlogContent;
    image: string;
    category: string;
    blogType: BlogType;
    date: string;
    slug: string;
}
