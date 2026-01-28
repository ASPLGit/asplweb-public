import HeroSection from "@/components/common/HeroSection";

export default function ContactHeroSection() {
    return (
        <>
            <HeroSection
                title={
                    <>
                        <span className="italic font-lora">Let’s Talk</span>
                        <br />
                        About Your Project.
                    </>
                }
                description="Have an idea or a challenge in mind? Reach out to us and let’s discuss how we can help bring it to life with the right technology and expertise."

                primaryCta={{ label: "Home", href: "/", }}
                secondaryCta={{ label: "Services", href: "/services", }} />
        </>
    );
}
