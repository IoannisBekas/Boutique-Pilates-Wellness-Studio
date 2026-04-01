import Image from "next/image";
import { services, studio } from "@/content/studio";

export default function ServicesGrid() {
  return (
    <section id="services-section" className="py-32 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-serif text-5xl text-brand-dark mb-6">Our Services</h2>
          <p className="text-brand-brown/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            {studio.servicesIntro}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-brand-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-brand-sand"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-4 text-brand-dark">{service.title}</h3>
                <p className="text-brand-brown/80 font-light leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
