import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { studio, studioLinks } from "@/content/studio";

export default function Contact() {
  return (
    <section id="contact-section" className="py-24 bg-brand-white border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-serif text-5xl text-brand-dark mb-8">{studio.contactHeading}</h2>
            <p className="text-brand-brown/80 mb-12 text-lg font-light leading-relaxed">
              {studio.contactCopy}
            </p>
            
            <address className="space-y-6 not-italic">
              <div className="flex items-start text-brand-brown">
                <MapPin className="w-6 h-6 mr-4 text-brand-dark/70 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Studio Address</h4>
                  <a
                    href={studioLinks.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light text-brand-brown/80 hover:text-brand-dark transition-colors"
                  >
                    {studio.addressLines[0]}
                    <br />
                    {studio.addressLines[1]}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center text-brand-brown">
                <Phone className="w-6 h-6 mr-4 text-brand-dark/70 shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href={studioLinks.phone} className="font-light text-brand-brown/80 hover:text-brand-dark transition-colors">
                    {studio.phoneDisplay}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center text-brand-brown">
                <Mail className="w-6 h-6 mr-4 text-brand-dark/70 shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href={studioLinks.email} className="font-light text-brand-brown/80 hover:text-brand-dark transition-colors">
                    {studio.email}
                  </a>
                </div>
              </div>
            </address>
            
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href={studioLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-dark hover:text-brand-brown transition-colors"
              >
                <Instagram className="w-6 h-6 mr-2" />
                <span className="font-medium">{studio.instagramHandle}</span>
              </a>
              <a
                href={studioLinks.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-brand-sand px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-dark transition-colors hover:border-brand-brown hover:text-brand-brown"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="h-[400px] bg-brand-beige rounded-3xl overflow-hidden shadow-sm border border-brand-sand relative">
            <iframe 
              src={studio.mapEmbedUrl}
              title={`${studio.name} map`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-75 brightness-110"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
