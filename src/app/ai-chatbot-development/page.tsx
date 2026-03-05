import AIChatBotDevelopmentPage from "@/components/sections/ai/AI-chatbot-development";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Chatbot Development",
    description:
        "AI chatbot development services for websites, apps, and customer support. Build intelligent conversational assistants powered by modern language models.",
    alternates: {
        canonical: "/ai-chatbot-development",
    },
};


export default function AIChatBotDevelopment() {

    return (
        <section>
            <AIChatBotDevelopmentPage />
        </section>
    );
}

