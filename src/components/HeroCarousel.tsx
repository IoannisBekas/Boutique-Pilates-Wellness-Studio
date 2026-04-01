import Image from "next/image";
import { heroImages, studio, studioLinks } from "@/content/studio";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-brand-sand">
            {studio.heroEyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-balance">
            {studio.heroHeading}
          </h1>
          <p className="font-sans text-xl md:text-2xl font-light mb-4 text-brand-beige">
            {studio.tagline}
          </p>
          <p className="max-w-xl text-base md:text-lg font-light leading-relaxed text-brand-beige/90 mb-10">
            {studio.heroCopy}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#calendar-section"
              className="inline-flex items-center justify-center bg-brand-brown hover:bg-brand-dark text-brand-beige px-10 py-5 rounded-full font-medium transition-all duration-300 tracking-wider uppercase text-sm shadow-xl hover:shadow-2xl"
            >
              See Availability
            </a>
            <a
              href={studioLinks.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-brand-beige/60 bg-white/10 px-10 py-5 rounded-full font-medium tracking-wider uppercase text-sm text-brand-beige transition-colors duration-300 hover:bg-white/20"
            >
              Book Online
            </a>
          </div>
          <p className="mt-6 text-sm font-light tracking-wide text-brand-beige/80"
          >
            Los Angeles studio • Private, duet, and small-group sessions
          </p>
        </div>
      </div>
    </section>
  );
}
