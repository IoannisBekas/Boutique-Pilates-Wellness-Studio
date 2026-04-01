import { studio, studioLinks } from "@/content/studio";

export default function CalendarSection() {
  return (
    <section id="calendar-section" className="py-32 bg-brand-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-5xl text-brand-dark mb-6">Available Sessions</h2>
        <p className="text-brand-brown/80 text-lg leading-relaxed font-light mb-12">
          {studio.calendarIntro}
        </p>
        
        <div className="bg-brand-beige p-10 md:p-16 rounded-3xl shadow-sm border border-brand-sand">
          <h3 className="font-serif text-3xl mb-8 text-brand-dark">{studio.bookingHeading}</h3>
          <p className="text-brand-brown/70 mb-10 text-lg">
            {studio.bookingCopy}
          </p>
          <a
            href={studioLinks.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-brown hover:bg-brand-dark text-brand-white px-10 py-5 rounded-full font-medium transition-colors duration-300 tracking-wider uppercase text-sm shadow-lg hover:shadow-xl"
          >
            Book a Session
          </a>
          <p className="mt-6 text-sm font-light text-brand-brown/70">
            Questions before booking? Reach us at{" "}
            <a href={studioLinks.email} className="font-medium text-brand-dark hover:text-brand-brown transition-colors">
              {studio.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
