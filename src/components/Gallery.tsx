import Image from "next/image";
import { galleryPhotos } from "@/content/studio";

export default function Gallery() {
  return (
    <section id="gallery-section" className="py-32 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-brand-dark mb-6">The Studio</h2>
          <p className="text-brand-brown/80 max-w-2xl mx-auto text-lg font-light">
            A serene space designed for focus, strength, and restoration.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {galleryPhotos.map((photo, idx) => {
            let spanClasses = "";
            if (idx === 0) spanClasses = "col-span-2 row-span-2 p-0";
            else if (idx === 3) spanClasses = "col-span-2 row-span-1 p-0";
            else spanClasses = "col-span-1 row-span-1 p-0";

            return (
              <div
                key={photo.src}
                className={`group relative overflow-hidden rounded-3xl ${spanClasses}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
