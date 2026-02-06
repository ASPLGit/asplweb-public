import Image from "next/image";

interface Props {
    data: {
        name: string;
        role: string;
        image: string;
        quote: string;
        linkedin: string;
        description: string[];
    };
}

export default function FounderCard({ data }: Props) {
    return (
        <div className="container" id="about">
            <div className="max-w-5xl mx-auto">
                <div
                    className="
                        group
                        relative
                        sm:rounded-2xl rounded-xl
                        border border-slate-200
                        bg-white
                        overflow-hidden
                        shadow-[0_20px_50px_rgba(15,23,42,0.08)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_35px_80px_rgba(15,23,42,0.14)]
                    "
                >
                    <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr]">

                        {/* IMAGE – FULL HEIGHT */}
                        <div className="relative h-full min-h-[320px] sm:min-h-full">
                            <Image
                                src={data.image}
                                alt={data.name}
                                fill
                                className="
                                    object-cover object-top
                                "
                            />

                            {/* subtle overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 sm:p-10">
                            {/* NAME */}
                            <h3 className="text-2xl font-semibold text-slate-900">
                                {data.name}
                            </h3>

                            {/* ROLE */}
                            <p className="mt-1 text-sm font-medium text-slate-500">
                                {data.role}
                            </p>

                            {/* QUOTE */}
                            <div className="relative mt-5 pl-4">
                                <span className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-blue-500 to-cyan-400" />
                                <p className="text-sm italic text-slate-600">
                                    “{data.quote}”
                                </p>
                            </div>

                            {/* DESCRIPTION */}
                            {data.description.map((text, i) => (
                                <p
                                    key={i}
                                    className="mt-4 text-sm leading-relaxed text-slate-600"
                                >
                                    {text}
                                </p>
                            ))}

                            {/* LINK */}
                            <a
                                href={data.linkedin}
                                target="_blank"
                                className="
                                    mt-6
                                    inline-flex items-center gap-2
                                    text-sm font-medium
                                    text-blue-600
                                    transition
                                    hover:text-blue-700
                                "
                            >
                                View LinkedIn
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
        </div>
    );
}
