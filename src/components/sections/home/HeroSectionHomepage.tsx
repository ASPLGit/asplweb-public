import PartnersStrip from "@/components/common/PartnersStrip";
import Button from "@/components/ui/Button";

export default function HeroSectionHomepage() {
    return (
        <>
            <section className="relative">
                <div className="bg-[url('/images/bg.webp')] relative bg-cover bg-center bg-no-repeat 2xl:py-[200px] h-screen 2xl:h-auto w-full flex flex-col items-center justify-center">
                         <div
                className="
            absolute inset-0
            sm:bg-[url('/images/layer1.webp')] bg-[url('/images/layer4.webp')]
            bg-cover bg-top bg-no-repeat
            sm:blur-[0px]
            opacity-70
        "
            />

            {/* Dark Overlay */}
            {/* <div
                className="
            absolute inset-0
            bg-black/0
        "
            /> */}
                    <div className="container text-center relative z-10">
                        <div className="flex flex-col items-center 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto">

                            <h2 className="heading-xl">
                                <span className="italic font-lora">Enterprise Ready</span>
                                <br />
                                Software & Digital Solutions.
                            </h2>

                            <p className="text-body-white max-w-xl mx-auto">
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