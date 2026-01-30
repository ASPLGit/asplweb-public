import Image from "next/image";

interface Props {
    data: {
        name: string;
        role: string;
        image: string;
        quote: string;
        linkedin: string;
        description: string[];
        reverse?: boolean;
    };
}

export default function FounderCard({ data }: Props) {
    const isReverse = data.reverse;

    return (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* IMAGE */}
                <div className={`lg:col-span-4 ${isReverse ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100">
                        <Image
                            src={data.image}
                            alt={data.name}
                            width={600}
                            height={700}
                            className="h-[300px] w-full object-cover object-top"
                        />

                        {/* Role badge */}
                        <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                            {data.role}
                        </span>
                    </div>
                </div>

                {/* CONTENT */}
                <div className={`lg:col-span-8 ${isReverse ? "lg:order-1" : ""}`}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                        <h3 className="text-2xl font-semibold text-slate-900">
                            {data.name}
                        </h3>

                        {/* Quote strip */}
                        <div className="mt-3 border-l-2 border-blue-500 pl-4">
                            <p className="text-sm italic text-slate-600 font-semibold">
                                “{data.quote}”
                            </p>
                        </div>

                        {data.description.map((text, i) => (
                            <p
                                key={i}
                                className="mt-4 text-base leading-relaxed text-slate-600"
                            >
                                {text}
                            </p>
                        ))}

                        <a
                            href={data.linkedin}
                            target="_blank"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                            View LinkedIn
                            <Image
                                src="/images/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={16}
                                height={16}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
