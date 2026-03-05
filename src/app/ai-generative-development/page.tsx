import AIGenerativeDevelopmentPage from "@/components/sections/ai/AI-generative-development";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Generative AI Development",
    description:
        "Generative AI development services to build AI systems that create text, images, code, and intelligent content using advanced AI models.",
    alternates: {
        canonical: "/ai-generative-development",
    },
};



export default function AIAutomation() {

    return (
        <section>
            <AIGenerativeDevelopmentPage />
        </section>
    );
}

