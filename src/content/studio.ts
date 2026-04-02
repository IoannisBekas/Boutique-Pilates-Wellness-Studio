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
    "Explore our range of boutique offerings tailored for your wellness and strength.",
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
    src: "/images/hero-1.png",
    alt: "Pilates studio interior with reformers and warm natural light",
  },
  {
    src: "/images/hero-2.png",
    alt: "Instructor guiding a boutique Pilates class",
  },
  {
    src: "/images/hero-3.png",
    alt: "Aerial yoga setup inside the studio",
  },
  {
    src: "/images/hero-4.png",
    alt: "Wellness-focused movement session in a calming studio",
  },
] as const;

export const services = [
  {
    title: "Pilates Reformer",
    description:
      "Strengthen and lengthen with reformer sessions. Build core stability and lean muscle tone.",
    image: "/images/service-reformer.png",
    imageAlt: "Pilates reformer equipment in the studio",
  },
  {
    title: "Aerial Yoga",
    description:
      "Stretch and decompress using aerial hammocks. Enhance flexibility and relieve spinal tension.",
    image: "/images/service-aerial.png",
    imageAlt: "Aerial yoga hammock suspended in the studio",
  },
  {
    title: "Barre",
    description:
      "Low-impact strength training combining ballet-inspired moves with elements of Pilates and yoga.",
    image: "/images/service-barre.png",
    imageAlt: "Barre-inspired movement class in progress",
  },
  {
    title: "Wellness",
    description:
      "Holistic care including massage therapy, chiropractic alignments, and physical recovery.",
    image: "/images/service-wellness.png",
    imageAlt: "Wellness treatment room prepared for recovery work",
  },
] as const;

export const galleryPhotos = [
  {
    src: "/images/gallery-1.png",
    alt: "Studio lounge area with neutral textures and natural light",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Reformer stations arranged for a small-group class",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Detail shot of the studio interior and equipment",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Open practice space prepared for aerial and mobility work",
  },
  {
    src: "/images/gallery-5.png",
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
