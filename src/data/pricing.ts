export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  badge?: string;
  highlight?: boolean;
  features: { label: string; included: boolean }[];
  cta: string;
};

export const PLANS: Plan[] = [
  {
    id: "service-symphony",
    name: "Service Symphony",
    tagline: "Foundations for waiters and sommeliers ready to elevate their craft.",
    price: 750,
    originalPrice: 1700,
    cta: "Coming soon",
    features: [
      { label: "1 year unlimited access", included: true },
      { label: "Mastering the Art of Waiter Service · 40+ videos", included: true },
      { label: "Pour, Present and Pour — Wine Education · 50+ videos", included: true },
      { label: "Premium course materials", included: true },
      { label: "Field tips and lifehacks", included: true },
      { label: "Certificate of completion", included: true },
      { label: "Members-only community group", included: true },
      { label: "Service online member support", included: true },
      { label: "Personalized coaching", included: false },
      { label: "The Bartender's Artistry · 40+ videos", included: false },
      { label: "Restaurant Operation Pro · 40+ videos", included: false },
      { label: "Exclusive access to industry experts", included: false },
      { label: "“Wine Bible” by Karen MacNeil (e-book)", included: false },
    ],
  },
  {
    id: "harmonia-gastronomica",
    name: "Harmonia Gastronomica",
    tagline: "Wine, bar and waiter excellence — the complete service trio.",
    price: 999,
    originalPrice: 2450,
    badge: "Most popular",
    highlight: true,
    cta: "Coming soon",
    features: [
      { label: "1 year unlimited access", included: true },
      { label: "Mastering the Art of Waiter Service · 40+ videos", included: true },
      { label: "Pour, Present and Pour — Wine Education · 50+ videos", included: true },
      { label: "Premium course materials", included: true },
      { label: "Field tips and lifehacks", included: true },
      { label: "Certificate of completion", included: true },
      { label: "Members-only community group", included: true },
      { label: "Harmonia online member support", included: true },
      { label: "Personalized coaching", included: true },
      { label: "The Bartender's Artistry · 40+ videos", included: true },
      { label: "Access to online resources", included: true },
      { label: "Restaurant Operation Pro · 40+ videos", included: false },
      { label: "Exclusive access to industry experts", included: false },
      { label: "“Wine Bible” by Karen MacNeil (e-book)", included: false },
    ],
  },
  {
    id: "hospitality-maestro",
    name: "Hospitality Maestro",
    tagline: "Service, wine, mixology, and operations — the full mastery path.",
    price: 1500,
    originalPrice: 3050,
    cta: "Coming soon",
    features: [
      { label: "1 year unlimited access", included: true },
      { label: "Mastering the Art of Waiter Service · 40+ videos", included: true },
      { label: "Pour, Present and Pour — Wine Education · 50+ videos", included: true },
      { label: "Premium course materials", included: true },
      { label: "Field tips and lifehacks", included: true },
      { label: "Certificate of completion", included: true },
      { label: "Members-only community group", included: true },
      { label: "Maestro online member support", included: true },
      { label: "Personalized coaching", included: true },
      { label: "The Bartender's Artistry · 40+ videos", included: true },
      { label: "Access to online resources", included: true },
      { label: "Restaurant Operation Pro · 40+ videos", included: true },
      { label: "Exclusive access to industry experts", included: true },
      { label: "“Wine Bible” by Karen MacNeil (e-book)", included: true },
    ],
  },
];
