import Button from "@/components/ui/Button";

interface HeroSectionProps {
    title: React.ReactNode;
    description: string;
    primaryCta?: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
}

export default function HeroSection({
    title,
    description,
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {

    return (
        <section>
            <div className="bg-[url('/images/bg.webp')] relative bg-cover bg-center bg-no-repeat 2xl:py-[250px] h-screen 2xl:h-auto w-full flex flex-col items-center justify-center">
                <div
                    className="
            absolute inset-0
            sm:bg-[url('/images/layer3.webp')] bg-[url('/images/layer4.webp')]
            bg-cover bg-bottom bg-no-repeat
            sm:blur-[1px]
            opacity-50
        "
                />
                <div className="container relative z-10">
                    <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto text-center items-center justify-center">

                        <h2 className="heading-xl">
                            {title}
                        </h2>

                        <p className="text-body-white max-w-xl">
                            {description}
                        </p>

                        <div className="flex gap-4">
                            {primaryCta && (
                                <Button variant="blue" to={primaryCta.href}>
                                    {primaryCta.label}
                                </Button>
                            )}

                            {secondaryCta && (
                                <Button variant="white" to={secondaryCta.href}>
                                    {secondaryCta.label}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}