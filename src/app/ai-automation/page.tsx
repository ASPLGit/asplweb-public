import AIAutomationPage from "@/components/sections/ai/AI-automation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Automation Services",
    description:
        "AI automation services to streamline workflows, reduce manual work, and improve operational efficiency with intelligent automation solutions.",
    alternates: {
        canonical: "/ai-automation",
    },
};

export default function AIAutomation() {
    return (
        <section>
            <AIAutomationPage />
        </section>
    );
}

