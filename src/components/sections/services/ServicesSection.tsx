import { SERVICES } from "@/data/allServices";
import ServiceCard from "./ServiceCard";


export default function ServiceSection() {
    return (
        <section className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        image={service.image}
                        services={service.services}
                        href={service.href}
                    />
                ))}
            </div>
        </section>
    );
}