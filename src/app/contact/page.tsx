import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import OfficeLocations from "@/components/sections/contact/OfficeLocations";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Contact our team to discuss your project, ask questions, or explore how we can help build AI-powered solutions and modern software products for your business.",
    alternates: {
        canonical: "/contact",
    },
};

export default function Contact() {
    return (
        <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] pb-10 sm:pb-20">
            <ContactHeroSection />
            <ContactSection />
            <OfficeLocations />
        </section>
    );
}