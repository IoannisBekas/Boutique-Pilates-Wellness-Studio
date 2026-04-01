export const studio = {
  name: "Boutique Pilates & Wellness Studio",
  shortName: "Boutique Studio",
  description:
    "Boutique reformer Pilates, yoga, aerial, and recovery sessions in a calming studio built for strength, mobility, and restoration.",
  tagline: "Reformer • Yoga • Aerial • Wellness",
  heroEyebrow: "Private & small-group sessions",
  heroHeading: "Boutique Pilates & Wellness Studio",
  heroCopy:
    "A warm studio for strength, mobility, and restoration with reformer classes, aerial movement, and recovery-focused wellness care.",
  servicesIntro:
    "Explore our core offerings, each designed to help you move better, feel stronger, and build a steady wellness routine.",
  calendarIntro:
    "Choose a time that fits your week and book directly through our live scheduling page.",
  bookingHeading: "Ready to join us?",
  bookingCopy:
    "View current availability, reserve a class, or claim a private session in just a few clicks.",
  contactHeading: "Visit Us",
  contactCopy:
    "Step into a calm, light-filled studio with reformers, aerial hammocks, and restorative wellness support in one place.",
  addressLines: ["123 Wellness Way", "Los Angeles, CA 90001"],
  fullAddress: "123 Wellness Way, Los Angeles, CA 90001",
  phoneDisplay: "(555) 123-4567",
  phoneValue: "+15551234567",
  email: "hello@boutiquestudio.com",
  instagramHandle: "@boutiquestudio",
  instagramUsername: "boutiquestudio",
  bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.795055018698!2d-118.2562476847844!3d34.045437980607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b55f5f4b59%3A0xc0fb176fc7dcbea0!2sDowntown%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
} as const;

export const studioLinks = {
  booking: studio.bookingUrl,
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    studio.fullAddress,
  )}`,
  email: `mailto:${studio.email}`,
  instagram: `https://www.instagram.com/${studio.instagramUsername}`,
  phone: `tel:${studio.phoneValue}`,
} as const;

export const heroImages = [
  {
    src: "/images/hero-1.jpg",
    alt: "Pilates studio interior with reformers and warm natural light",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Instructor guiding a boutique Pilates class",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Aerial yoga setup inside the studio",
  },
  {
    src: "/images/hero-4.jpg",
    alt: "Wellness-focused movement session in a calming studio",
  },
] as const;

export const services = [
  {
    title: "Pilates Reformer",
    description:
      "Strengthen and lengthen with guided reformer sessions that build core stability, posture, and control.",
    image: "/images/service-reformer.jpg",
    imageAlt: "Pilates reformer equipment in the studio",
  },
  {
    title: "Aerial Yoga",
    description:
      "Stretch, decompress, and improve mobility with hammock-supported movement that feels both playful and restorative.",
    image: "/images/service-aerial.jpg",
    imageAlt: "Aerial yoga hammock suspended in the studio",
  },
  {
    title: "Barre",
    description:
      "Low-impact strength training inspired by ballet, Pilates, and yoga for endurance, alignment, and tone.",
    image: "/images/service-barre.jpg",
    imageAlt: "Barre-inspired movement class in progress",
  },
  {
    title: "Wellness",
    description:
      "Recovery-focused care including massage, alignment support, and bodywork to complement your movement practice.",
    image: "/images/service-wellness.jpg",
    imageAlt: "Wellness treatment room prepared for recovery work",
  },
] as const;

export const galleryPhotos = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Studio lounge area with neutral textures and natural light",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Reformer stations arranged for a small-group class",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Detail shot of the studio interior and equipment",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Open practice space prepared for aerial and mobility work",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Quiet wellness corner designed for restoration",
  },
] as const;

export const siteMetadata = {
  description: studio.description,
  keywords: [
    "pilates studio",
    "reformer pilates",
    "aerial yoga",
    "barre classes",
    "wellness studio",
    "private pilates sessions",
  ],
} as const;
