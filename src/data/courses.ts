export type Course = {
  id: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  description: string;
  tags: string[];
  comingSoon?: boolean;
};

export const COURSES: Course[] = [
  {
    id: "mastering-waiter-service",
    title: "Mastering the Art of Waiter Service",
    category: "Service",
    level: "Beginner",
    duration: "12 hours",
    lessons: 42,
    description:
      "From your first walk to a table to crafting the perfect service sequence — learn the craft used in five-star dining rooms worldwide.",
    tags: ["Sequence of service", "Guest reading", "Tray handling"],
  },
  {
    id: "pour-present-pour-wine",
    title: "Pour, Present and Pour — Wine Education",
    category: "Wine",
    level: "Intermediate",
    duration: "16 hours",
    lessons: 54,
    description:
      "A field-tested approach to wine: tasting, pairing, presenting, and selling — without the intimidation.",
    tags: ["Old world", "New world", "Pairing"],
  },
  {
    id: "bartenders-artistry",
    title: "The Bartender's Artistry",
    category: "Bar",
    level: "Intermediate",
    duration: "11 hours",
    lessons: 38,
    description:
      "Speed, balance, and showmanship behind the bar — classic and modern recipes plus station design.",
    tags: ["Mixology", "Speed bar", "Recipes"],
    comingSoon: true,
  },
  {
    id: "restaurant-operation-pro",
    title: "Restaurant Operation Pro",
    category: "Operations",
    level: "Advanced",
    duration: "14 hours",
    lessons: 41,
    description:
      "Cost control, scheduling, hiring, and culture — what it takes to run a restaurant that actually lasts.",
    tags: ["P&L", "Scheduling", "Culture"],
    comingSoon: true,
  },
  {
    id: "guest-experience-mastery",
    title: "Guest Experience Mastery",
    category: "Hospitality",
    level: "Advanced",
    duration: "8 hours",
    lessons: 26,
    description:
      "Turn first-time guests into regulars. Memory cues, recovery scripts, and the psychology of belonging.",
    tags: ["Loyalty", "Recovery", "Psychology"],
    comingSoon: true,
  },
  {
    id: "english-for-hospitality",
    title: "English for Hospitality Professionals",
    category: "Communication",
    level: "Beginner",
    duration: "10 hours",
    lessons: 30,
    description:
      "Practical, situational English for waiters, bartenders, and front-of-house staff working in international rooms.",
    tags: ["Service English", "Phrases", "Confidence"],
    comingSoon: true,
  },
];
