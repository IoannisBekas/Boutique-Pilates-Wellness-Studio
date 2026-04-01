import { Instagram } from "lucide-react";
import { studio, studioLinks } from "@/content/studio";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-beige py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="font-serif text-2xl mb-2 text-brand-white">{studio.shortName}</h3>
          <p className="text-brand-sand/70 font-light">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href={studioLinks.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-sand hover:text-brand-white transition-colors"
          >
            Book via Google Calendar
          </a>
          <a
            href={studioLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-sand hover:text-brand-white transition-colors flex items-center"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
