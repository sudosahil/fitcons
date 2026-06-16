// ---------------------------------------------------------------------------
// Centralized content for the Tushar Menath coaching landing page.
// Swap copy / numbers / images here without touching the components.
// ---------------------------------------------------------------------------

export const BRAND = {
  name: "Tushar Menath",
  tagline: "I AM > I WAS",
  instagram: "https://www.instagram.com/tushar_menath",
  youtube: "https://youtube.com/@tusharmenath",
  whatsapp: "https://wa.me/910000000000",
  email: "coaching@tusharmenath.com",
} as const;

export const TRUST_INDICATORS = [
  "ICN Classic & Men's Physique Champion 2025",
  "10+ Years Training Experience",
  "100% Natural Athlete",
  "60,000+ Fitness Community",
];

export const STATS = [
  { value: 10, suffix: "+", label: "Years Training" },
  { value: 500, suffix: "+", label: "Clients Coached" },
  { value: 60, suffix: "K+", label: "Community" },
  { value: 1, prefix: "#", suffix: "", label: "ICN 2025 Champion" },
];

export type Feature = {
  title: string;
  desc: string;
  icon: string; // key into Icon component
};

export const FEATURES: Feature[] = [
  {
    title: "Customized Workout Program",
    desc: "Training built around your body, schedule, and equipment — engineered to grow muscle and strength every week.",
    icon: "dumbbell",
  },
  {
    title: "Personalized Nutrition Plan",
    desc: "Flexible, sustainable nutrition tailored to your goals, preferences and lifestyle. No crash diets, ever.",
    icon: "nutrition",
  },
  {
    title: "Weekly Check-ins",
    desc: "Every week we review progress, adjust your plan, and keep momentum so you never plateau.",
    icon: "calendar",
  },
  {
    title: "WhatsApp Support",
    desc: "Direct line to your coach. Questions, form checks, and motivation whenever you need it.",
    icon: "chat",
  },
  {
    title: "Progress Tracking",
    desc: "Data-driven check-ins tracking weight, measurements, lifts and photos so we make smart decisions.",
    icon: "chart",
  },
  {
    title: "Habit & Lifestyle Coaching",
    desc: "We build the habits, mindset and routines that make your transformation permanent.",
    icon: "brain",
  },
  {
    title: "Contest Prep Guidance",
    desc: "Stage-ready peaking, posing and conditioning from a reigning ICN Classic & Physique champion.",
    icon: "trophy",
  },
  {
    title: "Muscle Building & Fat Loss",
    desc: "Proven strategies to recomposition your body — build lean muscle while stripping stubborn fat.",
    icon: "fire",
  },
];

export type Reason = { title: string; desc: string };

export const REASONS: Reason[] = [
  {
    title: "Personalized Approach",
    desc: "No copy-paste templates. Your plan is built for your body, your goals and your real life.",
  },
  {
    title: "Sustainable Dieting",
    desc: "We use flexible nutrition you can actually maintain — so results stick long after the program ends.",
  },
  {
    title: "Scientific Training",
    desc: "Progressive overload, smart volume and recovery — training rooted in evidence, not gym myths.",
  },
  {
    title: "Accountability System",
    desc: "Weekly check-ins and direct coach access keep you consistent when motivation runs out.",
  },
  {
    title: "Lifestyle Integration",
    desc: "Fitness that fits your career, family and social life — not the other way around.",
  },
  {
    title: "Long-Term Results",
    desc: "We chase the physique that lasts a lifetime, not the quick fix that fades in a month.",
  },
];

export type Transformation = {
  name: string;
  result: string;
  duration: string;
  quote: string;
  tag: "Fat Loss" | "Muscle Gain" | "Recomposition";
  image: string;
};

export const TRANSFORMATIONS: Transformation[] = [
  {
    name: "Rahul S.",
    result: "−18 kg fat loss",
    duration: "16 weeks",
    tag: "Fat Loss",
    quote:
      "I'd failed every diet before this. Tushar's plan finally made it simple, and the weight actually stayed off.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Arjun M.",
    result: "+9 kg lean muscle",
    duration: "24 weeks",
    tag: "Muscle Gain",
    quote:
      "Three years of spinning my wheels — then real, visible growth. The structure changed everything.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vikram P.",
    result: "Full recomposition",
    duration: "20 weeks",
    tag: "Recomposition",
    quote:
      "Leaner and stronger at the same time. People at work genuinely didn't recognize me.",
    image:
      "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sandeep K.",
    result: "Stage-ready prep",
    duration: "28 weeks",
    tag: "Recomposition",
    quote:
      "Took me from the gym to the competition stage. Placed top 3 in my first ever show.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  },
];

export const APPLY_REASONS = [
  "You want to lose stubborn fat",
  "You want to build muscle naturally",
  "You struggle with consistency",
  "You need real accountability",
  "You want a sustainable lifestyle",
  "You are serious about transforming your physique",
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How much does coaching cost?",
    a: "Coaching is offered in several tiers depending on your goals and the level of support you need. Once you complete the application quiz, we'll recommend the most suitable plan and share exact pricing on your consultation call — no obligation.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Absolutely. A large part of our clients start as complete beginners. Every plan is built from your current level, with technique guidance and progressions so you train safely and effectively from day one.",
  },
  {
    q: "Do I need gym access?",
    a: "A gym makes progress faster, but it isn't mandatory. We design programs around the equipment you have — full gym, home setup or minimal equipment — without compromising results.",
  },
  {
    q: "How often do we communicate?",
    a: "You get structured weekly check-ins plus direct WhatsApp access to your coach throughout the week for questions, form checks and adjustments. You're never left guessing.",
  },
  {
    q: "How soon can I expect results?",
    a: "Most clients see noticeable changes within the first 4–6 weeks. Real, lasting transformation typically unfolds over 12–24 weeks — we prioritise results that last over quick fixes that fade.",
  },
  {
    q: "Do you provide meal plans?",
    a: "Yes. You receive a personalized nutrition plan built around your preferences, calories and macros — flexible enough to fit your lifestyle while keeping you on track.",
  },
  {
    q: "Is contest prep available?",
    a: "Yes. As a reigning ICN Classic & Men's Physique champion, Tushar offers full contest-prep coaching — peaking, conditioning, posing and stage-day strategy.",
  },
  {
    q: "What makes your coaching different?",
    a: "Everything is genuinely personalized and 100% natural. You work directly with a champion athlete who has lived the process — not a faceless template. The focus is sustainable systems that transform your physique and keep it.",
  },
];

// Decorative imagery — clean, editorial photography
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  about:
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1100&q=80",
  cta: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
} as const;

export const GOALS = [
  "Lose Fat",
  "Build Muscle",
  "Body Recomposition",
  "Contest Prep",
  "Get Stronger",
  "General Fitness",
];

export const EXPERIENCE_LEVELS = [
  "Complete Beginner",
  "Some Experience (< 2 years)",
  "Intermediate (2–4 years)",
  "Advanced (4+ years)",
];

export const CHALLENGES = [
  "Staying Consistent",
  "Nutrition / Dieting",
  "Lack of a Plan",
  "Motivation & Accountability",
  "Plateaued Progress",
  "Time Management",
];

export const TIMELINES = [
  "ASAP (1–3 months)",
  "3–6 months",
  "6–12 months",
  "No rush — long term",
];

// ---------------------------------------------------------------------------
// Coaching plans + the Plan Finder (a quick budget-based recommender, separate
// from the full application quiz).
// NOTE: prices are placeholders — update priceLabel with Tushar's real rates.
// ---------------------------------------------------------------------------

export type Plan = {
  id: "kickstart" | "transform" | "elite";
  name: string;
  badge: string;
  priceLabel: string;
  bestFor: string;
  features: string[];
};

export const PLANS: Record<Plan["id"], Plan> = {
  kickstart: {
    id: "kickstart",
    name: "Kickstart",
    badge: "Foundation",
    priceLabel: "from ₹2,499 / mo",
    bestFor: "Beginners building their first real routine.",
    features: [
      "Custom training program",
      "Simple nutrition targets",
      "Bi-weekly check-ins",
      "Chat support",
    ],
  },
  transform: {
    id: "transform",
    name: "Transform",
    badge: "Most popular",
    priceLabel: "from ₹4,999 / mo",
    bestFor: "Committed lifters chasing visible, lasting change.",
    features: [
      "Fully personalized training & nutrition",
      "Weekly 1-on-1 check-ins",
      "Direct WhatsApp access",
      "Progress, habit & mindset coaching",
    ],
  },
  elite: {
    id: "elite",
    name: "Elite 1:1",
    badge: "Premium",
    priceLabel: "from ₹9,999 / mo",
    bestFor: "Stage prep & those who want a champion on call.",
    features: [
      "Everything in Transform",
      "Contest prep, peaking & posing",
      "Stage-day strategy",
      "Priority daily access to Tushar",
    ],
  },
};

// Plan Finder questions
export const PF_GOALS = [
  "Lose fat",
  "Build muscle",
  "Body recomposition",
  "Contest prep",
];

export const PF_LEVELS = ["Beginner", "Intermediate", "Advanced"];

export const PF_BUDGETS = [
  { label: "Under ₹3,000 / mo", value: "kickstart" as const },
  { label: "₹3,000 – ₹7,000 / mo", value: "transform" as const },
  { label: "₹7,000+ / mo", value: "elite" as const },
];
