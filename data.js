/** Site-wide content for Clover Green Power */
const SITE = {
  name: "Clover Green Power",
  tagline: "Powering Nigeria Through Renewable Energy",
  description:
    "Clover Green Power builds cleaner, smarter, and sustainable energy infrastructure across Nigeria through solar, hydro, wind, biodegradable energy, and smart grid innovation.",
  email: "hello@clovergreenpower.com",
  phone: "+234 800 CLOVER (256 837)",
  phoneAlt: "+234 1 700 0000",
  address: "Port Harcourt, Rivers State, Nigeria",
};

const NAV_LINKS = [
  { href: "index.html", label: "Home", page: "home" },
  { href: "about.html", label: "About", page: "about" },
  { href: "investment.html", label: "Invest", page: "investment" },
  { href: "contact.html", label: "Contact", page: "contact" },
];

const HERO_STATS = [
  { value: 500, suffix: "+", label: "MW Projected Capacity" },
  { value: 120, suffix: "+", label: "Communities to Impact" },
  { value: 2.5, suffix: "M", label: "Tons CO₂ Reduction Goal", decimals: 1 },
  { value: 15000, suffix: "+", label: "Jobs to Be Created" },
];

const TECHNOLOGIES = [
  {
    title: "Solar Energy",
    description:
      "Utility-scale and distributed solar farms designed for Nigeria's high irradiance zones, from the North to the Niger Delta.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    title: "Hydro Power",
    description:
      "Run-of-river and mini-hydro systems leveraging Nigeria's river networks for reliable baseload renewable generation.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    title: "Wind Energy",
    description:
      "Coastal and highland wind corridors assessed for optimal turbine placement and grid integration across the federation.",
    image: "https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?w=1200&q=80",
  },
  {
    title: "Biodegradable Energy",
    description:
      "Converting agricultural residue, food waste, and organic biomass into biogas and clean electricity through anaerobic digestion—cutting landfill methane while powering communities.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    icon: "recycle",
  },
  {
    title: "Smart Grid Technology",
    description:
      "IoT-enabled distribution, battery storage, and demand-response systems to stabilize Nigeria's evolving power network.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Clover Green Power represents the kind of infrastructure investment Nigeria needs—scalable, sustainable, and built for communities that have waited too long for reliable electricity.",
    author: "Dr. Amara Okafor",
    role: "Energy Policy Advisor, Abuja",
  },
  {
    quote:
      "Their integrated approach to solar and smart grid deployment gives investors confidence in both impact and long-term returns.",
    author: "James Mitchell",
    role: "Clean Energy Fund Partner, London",
  },
  {
    quote:
      "We partnered on a community microgrid pilot in Ogun State. The results exceeded our expectations in uptime and local job creation.",
    author: "Fatima Bello",
    role: "Regional Development Director",
  },
];

const FAQ_ITEMS = [
  {
    question: "What regions does Clover Green Power operate in?",
    answer:
      "We are headquartered in Port Harcourt, Rivers State, with active development across Ogun, Niger, Kaduna, and other regions, with plans for nationwide expansion through 2030.",
  },
  {
    question: "How can I invest in your projects?",
    answer:
      "Visit our Investment page to review tiers and submit an inquiry. Our team responds within 2 business days with tailored materials.",
  },
  {
    question: "What technologies do you deploy?",
    answer:
      "We integrate solar PV, mini-hydro, wind where viable, biodegradable and biomass energy, battery storage, and smart grid IoT for reliable, scalable clean power.",
  },
  {
    question: "Is my investment secured?",
    answer:
      "Projects follow international ESG and financial standards with independent audits, insurance, and regulated SPV structures.",
  },
  {
    question: "How do you measure community impact?",
    answer:
      "We track households electrified, jobs created, CO₂ avoided, and local revenue generated—published in quarterly impact reports.",
  },
];

const INVESTMENT_RANGES = ["$50K – $250K", "$250K – $2M", "$2M – $10M", "$10M+"];

const CAPACITY_DATA = [
  { year: "2025", mw: 25 },
  { year: "2026", mw: 175 },
  { year: "2027", mw: 300 },
  { year: "2028", mw: 500 },
  { year: "2030", mw: 1000 },
];

const FUNDING_DATA = [
  { phase: "Seed", raised: 15, target: 25 },
  { phase: "Series A", raised: 45, target: 80 },
  { phase: "Growth", raised: 120, target: 200 },
];

const ESG_INDICATORS = [
  { label: "Carbon Offset", value: 92 },
  { label: "Community Engagement", value: 88 },
  { label: "Governance Score", value: 95 },
  { label: "Renewable Mix", value: 100 },
];
