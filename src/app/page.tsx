import FAQSection from "@/components/common/FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import TrustedBy from "@/components/common/TrustedBy";
import ContactSection from "@/components/sections/contact/ContactSection";
import OfficeLocations from "@/components/sections/contact/OfficeLocations";
import CaseStudy from "@/components/sections/home/CaseStudy";
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
      <CaseStudy />
      <FAQSection data={homepageFAQ} href= "#contact" />
      <ContactSection />
      <OfficeLocations />
    </section>

  );
}
