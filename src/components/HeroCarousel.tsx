import Image from "next/image";
import { heroImages, studio } from "@/content/studio";

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-dark">
        {heroImages.map((image, index) => (
          <div key={image.src} className="hero-slide">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            {studio.heroHeading}
          </h1>
          <p className="font-sans text-xl md:text-2xl font-light mb-10 text-brand-beige">
            {studio.tagline}
          </p>
          <a
            href="#calendar-section"
            className="inline-flex items-center justify-center bg-brand-brown hover:bg-brand-dark text-brand-beige px-10 py-5 rounded-full font-medium transition-all duration-300 tracking-wider uppercase text-sm shadow-xl hover:shadow-2xl"
          >
            See Availability
          </a>
        </div>
      </div>
    </section>
  );
}
