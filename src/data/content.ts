/**
 * The Way Back Community — content model
 *
 * Copy lives here, typed and named, separated from layout and presentation.
 * Every string below is verbatim from the source design.
 */

export type Testimonial = {
  quote: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type Stat = {
  value: string;
  label: string;
};

export type MethodStep = {
  title: string;
  description: string;
};

export type Feature = {
  cadence: string;
  title: string;
  description: string;
};

export type Week = {
  label: string;
  title: string;
  description: string;
};

export type WhyItem = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote: "Really informative, and taught me life lessons I didn't know or took for granted.",
    author: "Romana K.",
    rating: 5,
  },
  {
    quote: "Found it useful, and gave me a new perspective on dealing with my children.",
    author: "Salma A.",
    rating: 5,
  },
  {
    quote: "Loved the theory and the practical element of it combined.",
    author: "Sumaiyaa R.",
    rating: 5,
  },
  {
    quote: "Found it very insightful. I wish the remaining sessions were online too.",
    author: "Salma B.",
    rating: 5,
  },
  {
    quote: "Loved it. I pray you run something online too.",
    author: "Faiha",
    rating: 5,
  },
  {
    quote: "Need more like this.",
    author: "Syed T.",
    rating: 4,
  },
] as const;

export const stats: readonly Stat[] = [
  { value: "15", label: "years teaching & writing" },
  { value: "160", label: "parents at the first seminar" },
  { value: "4", label: "continents of study" },
  { value: "90", label: "minute masterclass each month" },
] as const;

export const method: readonly MethodStep[] = [
  { title: "Understand", description: "The teenage brain, and the world they are actually living in." },
  { title: "Interpret", description: "What their silence and their behaviour are really telling you." },
  { title: "Respond", description: "The right move, instead of the reflex that pushes them away." },
  { title: "Reconnect", description: "The door opens again, a little at a time." },
] as const;

export const features: readonly Feature[] = [
  {
    cadence: "Every two weeks",
    title: "Live coaching, together",
    description:
      "Work through real parenting situations, live, every two weeks. Your exact question, about your exact child.",
  },
  {
    cadence: "Always on",
    title: "A private WhatsApp community",
    description:
      "A closed group of parents who get it. Ask anything, any time of day or night. Never alone with it again.",
  },
  {
    cadence: "Every month",
    title: "A 90-minute masterclass",
    description:
      "One live, ninety minute masterclass each month on the brain, the phone, and the newest research.",
  },
  {
    cadence: "On demand",
    title: "The expert podcast",
    description:
      "Conversations with psychologists, educators, researchers and parents who have walked this road.",
  },
] as const;

export const weeks: readonly Week[] = [
  {
    label: "Week 1",
    title: "The Phone",
    description: "Why it is built to be almost impossible to put down. The design, the dopamine, the hooks.",
  },
  {
    label: "Week 2",
    title: "The World",
    description: "What they are really watching and scrolling, and the culture they are growing up inside.",
  },
  {
    label: "Week 3",
    title: "The Language",
    description: "The slang, the codes, the emojis and the in-jokes, finally translated for you.",
  },
  {
    label: "Week 4",
    title: "The Why",
    description: "Why they are really on there, what they are looking for, and what you can do with it.",
  },
] as const;

export const whyItWorks: readonly WhyItem[] = [
  { title: "Accountability", description: "You actually put it into practice, with people who check in on you." },
  { title: "Community", description: "Parents walking the same road, in real time, not a comment section." },
  { title: "Ongoing support", description: "Not one and done. Someone is there every fortnight." },
  { title: "Live discussion", description: "Ask about your child, tonight, and get a real answer." },
  { title: "Practical steps", description: "Never just theory. Always something you can do this week." },
] as const;

export const forYou: readonly string[] = [
  "Your teenager barely speaks to you.",
  "You worry about the phone, and what is on it.",
  "You feel overwhelmed, and unsure where to start.",
  "You have tried, and it has not worked yet.",
  "You simply do not want to do this alone.",
] as const;

export const included: readonly string[] = [
  "Behind the Screen, the four-week masterclass",
  "Live coaching every two weeks",
  "A private WhatsApp community",
  "One live 90-minute masterclass every month",
  "The expert podcast",
  "Every session recorded, yours to keep",
] as const;

export const faqs: readonly Faq[] = [
  {
    question: "What if my teenager will not talk to me?",
    answer:
      "That is exactly what this is for. We start with the small shifts that make a closed door open, even when nothing has worked yet.",
  },
  {
    question: "What if they are already seventeen?",
    answer:
      "It is never too late. The brain keeps forming into the mid twenties, and the relationship can change at any age.",
  },
  {
    question: "What if my partner is not interested?",
    answer:
      "Many parents start on their own. One person changing how they show up is often enough to shift the whole home.",
  },
  {
    question: "What if I have already made mistakes?",
    answer:
      "Every parent has. None of it is beyond repair. We focus on the next step, never the last one.",
  },
  {
    question: "What if I am not good with technology?",
    answer:
      "If you can send a message, you can be here. It runs on WhatsApp and Zoom, nothing new to learn.",
  },
  {
    question: "What if my first month feels like a waste?",
    answer:
      "Cancel any time, no contract. And because every session is recorded, nothing is lost even if you only make it to the first few weeks.",
  },
  {
    question: "Can I cancel any time?",
    answer:
      "Yes. Month to month, cancel whenever you need, and every session is recorded so nothing is ever lost.",
  },
] as const;

export const heroCredentials: readonly string[] = [
  "15 years teaching",
  "160 parents at the first seminar",
  "Live coaching every two weeks",
  "Founder of Behind the Screen",
] as const;
