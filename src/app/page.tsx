import FAQSection from "@/components/common/FAQ";
import FeaturedCaseStudy from "@/components/common/FeaturedCaseStudy";
import SectionHeading from "@/components/common/SectionHeading";
import TrustedBy from "@/components/common/TrustedBy";
import ContactSection from "@/components/sections/contact/ContactSection";
import OfficeLocations from "@/components/sections/contact/OfficeLocations";
import HeroSectionHomepage from "@/components/sections/home/HeroSectionHomepage";
import IndustriesWeServe from "@/components/sections/home/IndustriesWeServe";
import OurCoreCapabilities from "@/components/sections/home/OurCoreCapabilities";
import Testimonials from "@/components/sections/home/Testimonials";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import { homepageFAQ } from "@/data/homePageFAQ";

export default function Home() {
  return (
    <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] pb-10 sm:pb-20">
      <HeroSectionHomepage />
      <SectionHeading
        sectionLabel="Our Expertise"
        heading="18+ Years of Proven Technical Expertise"
        subheading="Our experts having 18+ years of experience in custom software development with suitable architecture, latest technology and with extreme security implementation and management."
      />
      <OurCoreCapabilities />
      <WhoWeAre />
      <TrustedBy />
      <Testimonials />
      <IndustriesWeServe />
      <FeaturedCaseStudy
        sectionHeading={{
          sectionLabel: "Recent Case Studies",
          heading: "Our Work in Action",
          subheading:
            "Real-world projects where design, technology, and performance come together.",
        }}
        category="FinTech Platform"
        title="Scalable KYC & Identity Verification"
        description="Built a reusable, privacy-first identity verification system that eliminated repeated KYC, reduced onboarding friction, and improved regulatory compliance."
        metrics={[
          {
            value: "65%",
            label: "Faster onboarding",
          },
          {
            value: "40%",
            variant: "dark",
            label: "Cost reduction",
          },
        ]}
        backgroundLayerImage="/images/layer6.webp"
        caseImage={{
          src: "/images/caseStudy/case1.jpg",
          alt: "KYC Case Study",
        }}
      />
      <FAQSection data={homepageFAQ} href="#contact" />
      <ContactSection />
      <OfficeLocations />
    </section>

  );
}
