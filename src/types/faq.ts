export interface FAQItem {
    title: string;
    content: string;
}

export interface FAQSectionData {
    label?: string;
    heading?: string;
    items: FAQItem[];
}