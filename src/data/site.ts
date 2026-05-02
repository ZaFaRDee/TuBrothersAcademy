export const SITE = {
  name: "TU Brothers Academy",
  shortName: "TU Brothers",
  tagline: "Master hospitality. Lead the room.",
  description:
    "TU Brothers Academy is an online training platform for waiters, sommeliers, bartenders and hospitality professionals — built by industry veterans who served the world's finest dining rooms.",
  url: "https://tubrothersacademy.com",
  email: "info@tubrothersacademy.com",
  phone: "+1 (929) 690-9972",
  address: "63-48 Alderton St, Flushing, NY 11374, USA",
  founder: "Diyorbek Turgunboev",
  founded: 2023,
  social: {
    instagram: "https://instagram.com/tubrothersacademy",
    youtube: "https://youtube.com/@tubrothersacademy",
    linkedin: "https://linkedin.com/company/tubrothersacademy",
    facebook: "https://facebook.com/tubrothersacademy",
  },
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Articles", href: "/articles" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
] as const;
