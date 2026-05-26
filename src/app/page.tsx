import CaseStudiesSection from "@/components/common/CaseStudiesSection";
import FAQSection from "@/components/common/FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import TrustedBy from "@/components/common/TrustedBy";
import ContactSection from "@/components/sections/contact/ContactSection";
import OfficeLocations from "@/components/sections/contact/OfficeLocations";
import HeroSectionHomepage from "@/components/sections/home/HeroSectionHomepage";
import IndustriesWeServe from "@/components/sections/home/IndustriesWeServe";
import OurCoreCapabilities from "@/components/sections/home/OurCoreCapabilities";
import Testimonials from "@/components/sections/home/Testimonials";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import Button from "@/components/ui/Button";
import { homepageFAQ } from "@/data/homePageFAQ";
import Link from "next/link";


export default function Home() {
  return (
    <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] pb-10 sm:pb-20">
      <HeroSectionHomepage />
      <SectionHeading
        sectionLabel="Our Expertise"
        heading="11+ Years of Proven Technical Expertise"
        subheading="Our experts having 11+ years of experience in custom software development with suitable architecture, latest technology and with extreme security implementation and management."
      />
      <OurCoreCapabilities />
      <WhoWeAre />
      <TrustedBy />
      <Testimonials />
      <IndustriesWeServe />
      <section className="relative w-full overflow-hidden  bg-[url('/images/bg.webp')]
    bg-cover bg-bottom bg-no-repeat after:content-['']
    after:absolute
    after:inset-0
    after:bg-[url('/images/layer3.webp')]
    after:bg-cover
    after:blur-[1px]
    after:bg-top
    after:bg-no-repeat
    after:opacity-50
    after:pointer-events-none">
        {/* Background */}
        <div
          className="
            absolute inset-0
            bg-black/70
        "
        />


        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-14 sm:py-16 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Scalable & Secure <span className="text-blue-100">.NET Development</span>
          </h2>

          {/* Subheading */}
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-blue-100 leading-relaxed">
            Build high-performance, enterprise-grade applications with modern .NET technologies,
            designed for scalability, security, and long-term growth.
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-blue-100 leading-relaxed">
            Planning a migration from legacy systems? Learn how to modernize safely with our
            <Link
              href="/blogs/migrate-legacy-to-modern-dotnet"
              className="underline underline-offset-4 hover:text-white transition mx-1"
            >
               .NET migration guide
            </Link>
            covering architecture decisions, zero-downtime strategies, and real-world challenges.
          </p>

          {/* CTA */}
          <Button
            variant="white"
            to="/technologies/dotnet"
            className="mt-8"
          >
            Explore .NET Development
          </Button>

        </div>
      </section>

      <CaseStudiesSection
        sectionHeading={{
          sectionLabel: "Recent Case Studies",
          heading: "Our Work in Action",
          subheading:
            "Real-world projects where design, technology, and performance come together.",
        }}
        caseStudies={[
          {
            category: "FinTech Platform",
            title: "Scalable KYC & Identity Verification",
            description:
              "Built a reusable, privacy-first identity verification system that eliminated repeated KYC, reduced onboarding friction, and improved regulatory compliance.",
            metrics: [
              { value: "65%", label: "Faster onboarding" },
              { value: "90%", label: "Cost reduction" },
            ],
            image: "/images/caseStudy/case-study4.png",
          },
          {
            category: ".NET Modernization",
            title: "Legacy .NET to Cloud-Native Microservices",
            description:
              "Migrated a monolithic legacy .NET application to a modern microservices-based architecture using .NET Core and cloud infrastructure. Reduced technical debt and ensured zero downtime.",
            metrics: [
              { value: "70%", label: "Performance improvement" },
              { value: "0 Downtime", label: "Seamless migration" },
            ],
            image: "/images/caseStudy/case-study3.png",
            cta: {
              label: "Explore .NET Services",
              href: "/technologies/dotnet",
            },
          },
        ]}
      />

      <FAQSection data={homepageFAQ} href="#contact" />
      <ContactSection />
      <OfficeLocations />
    </section>

  );
}
