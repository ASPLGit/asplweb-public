import Button from "@/components/ui/Button";
import ServicesTicker from "./ServicesTicker";

export default function ServicesHeroSection() {
    return (
        <>
            <section className="relative">
                <div className="bg-[url('/images/bg.webp')] relative bg-cover bg-center bg-no-repeat 2xl:py-[200px] h-screen 2xl:h-auto w-full flex flex-col items-center justify-center">
                    <div
                        className="
            absolute inset-0
            bg-[url('/images/layer1.webp')]
            bg-cover bg-top bg-no-repeat
            sm:blur-[15px]
            opacity-40
        "
                    />

                    {/* Dark Overlay */}
                    <div
                        className="
            absolute inset-0
            bg-black/10
        "
                    />
                    <div className="container relative z-10">
                        <div className="flex items-center justify-center flex-col  2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto text-center">

                            <h2 className="heading-xl">
                                <span className="font-lora italic">Services</span> <br />What We Do Best
                            </h2>

                            <p className="text-body-white max-w-xl">
                                We offer a comprehensive range of technology services designed to help businesses build reliable digital products, scale efficiently, and adapt to evolving technology needs.
                            </p>

                            <div className="flex gap-4">
                                <Button variant="blue" to="/about">
                                    About
                                </Button>

                                <Button variant="white" to="/contact">
                                    Contact
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
