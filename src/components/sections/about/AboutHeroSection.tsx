import HeroSection from "@/components/common/HeroSection";

export default function AboutHeroSection() {
    return (
        <>
            <HeroSection
                title={<> <span className="italic font-lora">Aplombsoft <br /></span>
                    Your Technology Partner.</>}
                description="A global software development partner helping businesses design, build, and scale reliable digital products through cost-effective and innovative technology solutions."
                primaryCta={{ label: "Services", href: "/services", }}
                secondaryCta={{ label: "Contact", href: "/contact", }} />
        </>
    );
}
