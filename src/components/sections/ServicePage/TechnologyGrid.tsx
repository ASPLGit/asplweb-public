import Image from "next/image";
import { Service } from "@/types/service";

interface TechnologyGridProps {
    data: Service["TechnologySection"];
}

export default function TechnologyGrid({ data }: TechnologyGridProps) {
    return (
        <section>
            <div className="container">
                <div className="bg-white rounded-3xl border border-slate-200 p-10 md:p-14">
                    <div
                        className="
                            grid
                            grid-cols-3
                            sm:grid-cols-4
                            md:grid-cols-5
                            gap-x-10
                            gap-y-14
                            place-items-center place-content-center
                        "
                    >
                        {data.items.map((tech) => (
                            <div
                                key={tech.logo}
                                className="
                                    flex items-center justify-center
                                    opacity-80
                                    hover:opacity-100
                                    transition
                                "
                            >
                                <Image
                                    src={tech.logo}
                                    alt='Technology Logo'
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
