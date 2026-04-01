import HeroCarousel from "@/components/HeroCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import CalendarSection from "@/components/CalendarSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesGrid />
      <CalendarSection />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
