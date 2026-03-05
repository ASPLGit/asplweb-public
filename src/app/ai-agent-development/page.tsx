import AIAgentDevelopmentPage from "@/components/sections/ai/AI-agent-development";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "AI Agent Development",
    description:
        "AI agent development services to build autonomous agents, task automation systems, and intelligent assistants powered by modern AI models.",
    alternates: {
        canonical: "/ai-agent-development",
    },
};



export default function AIAgentDevelopment() {
    return (
        <section>
            <AIAgentDevelopmentPage />
        </section>
    );
}

