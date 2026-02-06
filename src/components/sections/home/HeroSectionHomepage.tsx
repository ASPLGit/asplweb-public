import PartnersStrip from "@/components/common/PartnersStrip";
import Button from "@/components/ui/Button";

export default function HeroSectionHomepage() {
    return (
        <>
            <section className="relative">
                <div
                    className="
    relative
    bg-[url('/images/bg.webp')]
    bg-cover bg-center bg-no-repeat
    sm:h-screen h-[90vh] 2xl:py-[250px] 2xl:h-auto
    w-full
    flex flex-col items-center justify-center

    after:content-['']
    after:absolute
    after:inset-0
    after:bg-[url('/images/layer3.webp')]
    after:bg-cover
    after:blur-[1px]
    after:bg-top
    after:bg-no-repeat
    after:opacity-50
    after:pointer-events-none
  "
                >
                    <div
                        className="
            absolute inset-0
            bg-black/50
        "
                    />
                    <div className="container text-center relative z-10">
                        <div className="flex flex-col items-center 2xl:gap-8 sm:gap-6 gap-4">

                            <h2 className="heading-xl">
                                <span className="italic font-lora">Purpose Driven IT Solutions</span>
                                <br />
                                for Competitive Growth.
                            </h2>

                            <p className="subheading mx-auto">
                                We deliver robust web, app, custom software, cloud computing, and data-driven solutions engineered for security, scalability, and long-term success.
                            </p>

                            <div className="flex gap-4 items-center justify-center">
                                <Button variant="blue" to="/services">
                                    Services
                                </Button>

                                <Button variant="white" to="/contact">
                                    Contact
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="2xl:mt-[-140px] 2xl:relative absolute bottom-10 flex items-center justify-center w-full">
                    <PartnersStrip />
                </div>
            </section>
        </>
    );
}