import Button from "@/components/ui/Button";

export default function CareersHeroSection() {
    return (
        <>
            <section className="relative">
                <div className="bg-[url('/images/bg.webp')] relative bg-cover bg-center bg-no-repeat 2xl:py-[250px] h-screen 2xl:h-auto w-full flex flex-col items-center justify-center">
                    <div
                        className="
            absolute inset-0
            bg-[url('/images/layer2.webp')]
            bg-cover bg-bottom bg-no-repeat
            sm:blur-[1px]
            opacity-50
        "
                    />
                    {/* <div
                        className="
            absolute inset-0
            bg-black/0
        "
                    /> */}
                    <div className="container text-center relative z-10">
                        <div className="flex flex-col items-center 2xl:gap-8 sm:gap-6 gap-4 max-w-3xl mx-auto">

                            <h2 className="heading-xl">
                                <>Build Your Career With<br />  <span className="italic font-lora">Aplombsoft</span>.</>

                            </h2>

                            <p className="text-body-white max-w-xl mx-auto">
                               Join a team of designers, developers, and problem-solvers building scalable, real-world software products for global clients.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
