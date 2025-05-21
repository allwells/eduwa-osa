import type { Blog, Service, Testimonial, Transformation } from "~/types";

export const SERVICES: Service[] = [
  {
    id: "DeepWork",
    subtitle: "Group Coaching",
    title: "DeepWork",
    description:
      "An 8-week intensive group coaching program to help you launch a more authentic, purposeful and empowered version of yourself.",
    image: "services/deep-work.webp",
  },
  {
    id: "Launchpad",
    subtitle: "Strategy Call",
    title: "Launchpad",
    description:
      "A high-impact, 2-4 hour deep-dive session for rapid clarity, strategic planning, and immediate action on your next move.",
    image: "services/launchpad.webp",
  },
  {
    id: "One-on-One",
    subtitle: "One-on-One",
    title: "12-Week Coaching",
    description:
      "A personalized, long-term journey for deep, lasting transformation into your most aligned, powerful, and empowered self.",
    image: "services/one-on-one.webp",
  },
  {
    id: "VIP Intensive",
    subtitle: "VIP Intensive",
    title: "VIP Coaching",
    description:
      "A high-touch, private half or full-day experience designed to catalyze rapid breakthroughs, realignment, and strategic execution.",
    image: "services/vip.webp",
  },
  {
    id: "Trainings & Workshops",
    subtitle: "Trainings & Workshops",
    title: "Shift Lab",
    description:
      "A custom workshop and training experience to activate untapped potential, elevate team culture, and engineer sustainable growth for your organization.",
    image: "services/organizational.webp",
  },
];

export const TRANSFORMATION: Transformation[] = [
  {
    title: "Excavate",
    description:
      "We begin by uncovering the hidden patterns, inner conflicts, and mental blocks that are holding you back. This phase is all about truth, seeing yourself clearly and compassionately.",
  },
  {
    title: "Realign",
    description:
      "Once we’ve unearthed what’s beneath the surface, we reconnect you with your core: your values, your voice, your vision. You’ll gain a clear sense of who you are and what really matters.",
  },
  {
    title: "Design",
    description:
      "With clarity in place, we move into strategy, designing a clear path that aligns with your highest self. Together, we turn big visions into practical steps and grounded decisions.",
  },
  {
    title: "Express",
    description:
      "This is where it all comes to life. You start showing up, building, and leading from a place of deep authenticity and courage. Your life and work begin to reflect the truest version of you.",
  },
];

export const BLOGS: Blog[] = [
  {
    id: "1",
    slug: "deep-work-vs-busywork",
    title: "DeepWork vs. Busywork: How to Reclaim Focus",
    description:
      "Learn how DeepWork principles help professionals escape distraction and produce meaningful results.",
    cover:
      "https://cdn.prod.website-files.com/678ea0cb75408970238a3515/678ea9179f1c9b37102c1a51_2148952921%20(1)-p-500.jpg",
    publishedAt: "2025-04-10T08:30:00Z",
    category: {
      id: "deepwork",
      slug: "deepwork",
      title: "DeepWork",
    },
    content: {},
  },
  {
    id: "2",
    slug: "coaching-mindset-for-leaders",
    title: "The Coaching Mindset Every Leader Needs",
    description:
      "Why coaching isn’t just for coaches — it's a vital leadership skill in modern teams.",
    cover:
      "https://cdn.prod.website-files.com/678ea0cb75408970238a3515/678f8cc0fe11c54824907ad7_3313%20(1)-p-500.jpg",
    publishedAt: "2025-03-22T14:00:00Z",
    category: {
      id: "coaching",
      slug: "coaching",
      title: "Coaching",
    },
    content: {},
  },
  {
    id: "3",
    slug: "inside-catalyst-codex",
    title: "Inside the Catalyst Codex: A New Model for Transformation",
    description:
      "Explore the key principles behind the Catalyst Codex and how they accelerate team transformation.",
    cover:
      "https://cdn.prod.website-files.com/678ea0cb75408970238a3515/678ea8d6a9f5a3de57d189d1_24793%20(1)-p-500.jpg",
    publishedAt: "2025-02-15T10:00:00Z",
    category: {
      id: "catalyst-codex",
      slug: "catalyst-codex",
      title: "Catalyst Codex",
    },
    content: {},
  },
  {
    id: "4",
    slug: "designing-your-deep-work-rituals",
    title: "Designing Your DeepWork Rituals for Maximum Output",
    description:
      "Create structure around your day to maximize high-focus work with repeatable rituals.",
    cover:
      "https://cdn.prod.website-files.com/678a23da16b71adbeacfb6b7/6791391104daa3fe30c9cb64_27981%20(3).avif",
    publishedAt: "2025-04-18T09:00:00Z",
    category: {
      id: "deepwork",
      slug: "deepwork",
      title: "DeepWork",
    },
    content: {},
  },
  {
    id: "5",
    slug: "coaching-conversations-that-stick",
    title: "Coaching Conversations That Actually Change Behavior",
    description:
      "Practical frameworks for having impactful coaching conversations that lead to real change.",
    cover:
      "https://assets-global.website-files.com/65a3b9e653a920f4f89f6146/663f4e4ee8028f66c8eff037_B%20Tabs%204-p-500.webp",
    publishedAt: "2025-03-05T16:00:00Z",
    category: {
      id: "coaching",
      slug: "coaching",
      title: "Coaching",
    },
    content: {},
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Emily Rivera | Visionary",
    location: "Lagos, Nigeria",
    content:
      "One Power Call with Eduwa gave me more clarity than three months of trying to figure things out alone.",
    photo: null,
  },
  {
    id: "2",
    name: "Jason Lee | Business Owner",
    location: "Nariobi, Kenya",
    content:
      "I came in confused. I left with a clear roadmap, renewed confidence, and a strategy that aligned with my purpose. This session is priceless.",
    photo: null,
  },
  {
    id: "3",
    name: "Ngozi | Entrepreneur",
    location: "Nigeria",
    content:
      "The VIP Intensive wasn’t just a session; it was my moment of breakthrough. I left with clarity, direction, and tangible steps that changed the trajectory of my business and life.",
    photo: null,
  },
  {
    id: "4",
    name: "Chinedu | Creative Director",
    location: "Nigeria",
    content:
      "I’ve experienced various coaching formats, yet nothing matched the depth and immediate impact of the VIP Intensive. It’s like having a personal reset button that catapulted me into action.",
    photo: null,
  },
  {
    id: "5",
    name: "Natalie Chen | Corporate Accountant",
    location: "Gambia",
    content: "Quick turnaround, clear communication, and great results. A+.",
    photo: null,
  },
];
