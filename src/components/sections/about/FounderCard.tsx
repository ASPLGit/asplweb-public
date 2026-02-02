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
    return (
        <div className="container">
            <div className="max-w-4xl mx-auto">
                <div
                    className="
                        grid grid-cols-1 sm:grid-cols-[120px_1fr]
                        gap-6
                        items-start
                        rounded-2xl
                        border border-slate-200
                        bg-white
                        p-6 sm:p-8
                        shadow-sm
                    "
                >
                    {/* IMAGE */}
                    <div className="flex justify-center sm:justify-start">
                        <div className="relative h-[110px] w-[110px] rounded-xl overflow-hidden bg-slate-100">
                            <Image
                                src={data.image}
                                alt={data.name}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                            {data.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            {data.role}
                        </p>

                        {/* QUOTE */}
                        <p className="mt-3 text-sm italic text-slate-600">
                            “{data.quote}”
                        </p>

                        {/* DESCRIPTION */}
                        {data.description.map((text, i) => (
                            <p
                                key={i}
                                className="mt-3 text-sm leading-relaxed text-slate-600"
                            >
                                {text}
                            </p>
                        ))}

                        {/* LINK */}
                        <a
                            href={data.linkedin}
                            target="_blank"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                            LinkedIn
                            <Image
                                src="/images/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={14}
                                height={14}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
