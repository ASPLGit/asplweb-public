"use client";

import Image from "next/image";

const LOCATIONS = [
    {
        title: "Head Office (India)",
        address:
            "A-1204, Ganesh Glory 11, near BSNL Office, Jagatpur, Ahmedabad, Gujarat 382481.",
        phone: "+91 635-273-7547",
    },
    {
        title: "Cayman Islands",
        address:
            "48 Honey Hill Crescent, Savannah, Grand Cayman, Cayman Islands KY1-1106",
        phone: "+1 345-926-6408",
    },
];

export default function OfficeLocations() {
    return (
        <section>
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT – ADDRESS LIST */}
                    <div className="space-y-6 max-w-md">
                        <div className="space-y-2">
                            <p className="section-label">
                                Our Locations
                            </p>
                            <h3 className="heading-lg">
                                Global Offices
                            </h3>
                        </div>

                        <div className="space-y-4 pt-4">
                            {LOCATIONS.map((loc, index) => (
                                <div
                                    key={index}
                                    className="
            group
            flex gap-3
            rounded-xl
            border border-sky-100
            bg-sky-50
            p-5
            transition-all duration-300
            hover:-translate-y-1
            hover:border-blue-400
            hover:shadow-[0_20px_45px_-20px_rgba(59,130,246,0.35)]
        "
                                >
                                    {/* Pin */}
                                    <div
                                        className="
                mt-1 h-3 w-3
                rounded-full
                bg-gradient
                shrink-0
                transition
                group-hover:scale-110
            "
                                    />

                                    <div className="space-y-2">
                                        <p className="heading-sm text-slate-900">
                                            {loc.title}
                                        </p>

                                        <p className="text-body-md text-slate-600 leading-relaxed">
                                            {loc.address}
                                        </p>

                                        <p className="text-body-md text-gradient font-medium">
                                            {loc.phone}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* RIGHT – WORLD MAP */}
                    <div className="relative w-full">
                        <Image
                            src="/images/map.png"
                            alt="World map"
                            width={300}
                            height={300}
                            className="!w-full max-w-[720px] mx-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
