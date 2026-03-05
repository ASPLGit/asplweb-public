import AIDevelopmentPage from "@/components/sections/ai/AI-development";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "AI Development Services",
    description:
        "Custom AI development services to build intelligent applications, machine learning models, and AI-powered software solutions for modern businesses.",
    alternates: {
        canonical: "/ai-development",
    },
};


export default function AIDevelopment() {

    return (
        <section>
            <AIDevelopmentPage />
        </section>
    );
}

