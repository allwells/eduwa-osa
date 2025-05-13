import type { Blog, Service, Testimonial, Transformation } from "~/types";

export const SERVICES: Service[] = [
  {
    id: "Deep Work",
    subtitle: "8-Week Group",
    title: "Deep Work",
    description:
      "An intensive group journey focused on inner mastery to transcend limitations and unlock exponential results in life and work.",
    image: "/images/services/deep-work.jpg",
  },
  {
    id: "Launchpad",
    subtitle: "Power Call",
    title: "Launchpad",
    description:
      "A high-impact, 2-4 hour deep-dive session for rapid clarity, strategic planning, and immediate action on your next move.",
    image: "/images/services/launchpad.jpg",
  },
  {
    id: "One-on-One Coaching",
    subtitle: "12-Week",
    title: "One-on-One Coaching",
    description:
      "A personalized, long-term journey for deep, lasting transformation into your most aligned, powerful, and empowered self.",
    image: "/images/services/one-on-one.jpg",
  },
  {
    id: "VIP Intensive",
    subtitle: "VIP",
    title: "VIP Coaching Intensive",
    description:
      "A high-touch, private half or full-day experience designed to catalyze rapid breakthroughs, realignment, and strategic execution.",
    image: "/images/services/vip.jpg",
  },
  {
    id: "Shift Lab",
    subtitle: "Organizational",
    title: "Shift Lab",
    description:
      "A custom workshop and training experience to activate untapped potential, elevate team culture, and engineer sustainable growth for your organization.",
    image: "/images/services/organizational.jpg",
  },
];

export const TRANSFORMATION: Transformation[] = [
  {
    subtitle: "Inner Work",
    title: "Coaching & Leadership",
    description:
      "Helping individuals and leadership teams dissolve subconscious blocks, rewire mental models, and build an unshakable internal foundation for mastery, success, and innovation.",
  },
  {
    subtitle: "Brain Science",
    title: "Performance Optimization",
    description:
      "Leveraging brain science to optimize performance, decision-making, and behavioral transformation at both personal and organizational levels.",
  },
  {
    subtitle: "Inner Alignment",
    title: "Psycho-Spiritual Mastery",
    description:
      "Bridging psychology and spirituality to help individuals and organizations access deeper self-awareness, cultivate aligned leadership, and foster a culture of authenticity and excellence.",
  },
  {
    subtitle: "Foundation",
    title: "Philosophical Mastery",
    description:
      "Cultivating a principles-driven approach to leadership, strategy, and sustainable success—ensuring organizations operate with clarity, depth, and long-term vision.",
  },
  {
    subtitle: "Scaling Impact",
    title: "Organizational Strategy",
    description:
      "Designing frameworks for sustainable success and cultural transformation, elevating perspectives, and pioneering a new paradigm of transformational growth.",
  },
];

export const BLOGS: Blog[] = [
  {
    id: "1",
    slug: "deep-work-vs-busywork",
    title: "Deep Work vs. Busywork: How to Reclaim Focus",
    description:
      "Learn how Deep Work principles help professionals escape distraction and produce meaningful results.",
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
    title: "Designing Your Deep Work Rituals for Maximum Output",
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
