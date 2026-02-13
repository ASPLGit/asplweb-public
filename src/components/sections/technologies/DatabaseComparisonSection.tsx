import Button from "@/components/ui/Button";

interface ComparisonItem {
    title: string;
    sql: string;
    mongodb: string;
}

interface DatabaseComparisonSectionProps {
    data: ComparisonItem[];
}

export default function DatabaseComparisonSection({
    data,
}: DatabaseComparisonSectionProps) {
    return (
        <section className="py-10 sm:py-14 2xl:py-20 bg-sky-50">
            <div className="container">

                <div className="rounded-3xl sm:bg-white sm:shadow-xl sm:p-12">
                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* LEFT PANEL */}
                        <div className=" bg-[url('/images/bg.webp')] relative
                                bg-cover bg-center text-white sm:rounded-2xl rounded-xl sm:p-8 p-6 flex flex-col justify-between">
                            <div
                                className="
                                    absolute inset-0
                                    bg-[url('/images/layer3.webp')]
                                    bg-cover bg-right-top rounded-2xl
                                    opacity-40
                                "
                            />
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="sm:text-2xl text-xl font-semibold">
                                        Choosing the Right <br />
                                        Database Architecture
                                    </h2>

                                    <p className="mt-5 text-white/80 text-sm leading-relaxed">
                                        Compare SQL Server and MongoDB across structure,
                                        scalability, security, and long-term system design to
                                        determine the right fit for your application.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Button variant="white" to="/contact">Get a Quote</Button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="lg:col-span-2">

                            {/* Column Headers */}
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <h3 className="text-lg font-semibold text-blue-700">
                                    SQL Server
                                </h3>
                                <h3 className="text-lg font-semibold text-green-600">
                                    MongoDB
                                </h3>
                            </div>

                            {/* Comparison Rows */}
                            <div className="sm:space-y-6 space-y-4">
                                {data.map((item, index) => (
                                    <div key={index} className="sm:space-y-4 space-y-2">

                                        {/* Title (Only Once) */}
                                        <h4 className="text-sm font-semibold text-slate-800">
                                            {item.title}
                                        </h4>

                                        {/* SQL + Mongo Row */}
                                        <div className="grid grid-cols-2 gap-8">
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {item.sql}
                                            </p>

                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {item.mongodb}
                                            </p>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </section >
    );
}
