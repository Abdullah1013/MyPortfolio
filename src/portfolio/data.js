import tinDog from "../Assets/Projects/Tindog.png";
import commerce from "../Assets/Projects/E-commerce.png";
import racks from "../Assets/Projects/Pacakaging_Rack.png";
import dice from "../Assets/Projects/Dice_Game.png";
import words from "../Assets/Projects/Word-search.png";

export const email = "abdullah5601013@gmail.com";
export const socials = [
  { name: "GitHub", url: "https://github.com/Abdullah1013" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdullah-khan-126122227",
  },
  { name: "X / Twitter", url: "https://x.com/Mr_pathan0" },
];
export const projects = [
  {
    id: "hospital",
    title: "AI Hospital & Appointment Platform",
    short: "A conversation. A specialist. An appointment.",
    category: "AI & Automation",
    label: "Conversational AI / Healthcare",
    description:
      "A configurable AI platform that connects hospitals and patients through WhatsApp and SMS. From hospital information to specialist routing and appointment booking, the conversation becomes the interface.",
    stack: ["NestJS", "React", "OpenAI", "RAG", "Twilio", "Supabase"],
    details: [
      "Built hospital onboarding with configurable AI models, instructions, and a dedicated RAG knowledge base.",
      "Implemented natural-language triage workflows to route patient queries to specialists based on availability and book appointments.",
      "Connected Stripe payments, automatically generated Zoom consultations, and booking notifications for doctors and hospitals.",
    ],
  },
  {
    id: "affiliate",
    title: "Affiliate Marketing App",
    short: "Connecting creators, campaigns, and measurable reach.",
    category: "Full Stack",
    label: "Full Stack / Creator Economy",
    description:
      "A two-sided platform where brands launch campaigns and creators promote them. Campaign insights, flexible plans, and creator payouts come together in one workflow.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    details: [
      "Built creator and brand onboarding, campaign registration, and creator assignments.",
      "Aggregated post-level performance and audience reach so brands can follow each creator’s contribution.",
      "Supported subscription and day-based campaigns, with Stripe payments and creator withdrawals.",
    ],
  },
  {
    id: "social",
    title: "Social Media App",
    short: "Real-time conversations. Connected communities.",
    category: "Real-Time",
    label: "Real-Time / Social",
    description:
      "Contributed to a social platform with real-time messaging, video content, and communities, including a referral system that rewards users for successful referrals.",
    stack: ["React", "Node.js", "Socket.io"],
    details: [
      "Built real-time messaging using Socket.io.",
      "Worked on video content management across posts, feeds, and communities.",
      "Developed a referral system with user earnings.",
    ],
  },
  {
    id: "pos",
    title: "SwiftPOS",
    short: "The everyday operations of retail, connected.",
    category: "Full Stack",
    label: "SaaS / Retail",
    description:
      "A multi-tenant, cloud-based point-of-sale system for retail stores, bringing inventory, sales, and reporting into a single application.",
    stack: ["SaaS", "Real-Time Inventory", "Role-Based Access"],
    details: [
      "Implemented inventory management, barcode scanning, and profit tracking.",
      "Added thermal receipt printing and a live revenue dashboard.",
      "Built role-based access and OTP email verification.",
    ],
    url: "https://swiftpos.pure-syntax.com/",
  },
  {
    id: "poker",
    title: "Multiplayer Poker Backend",
    short: "Every action synced. Every table in play.",
    category: "Real-Time",
    label: "Backend / Multiplayer",
    description:
      "A real-time multiplayer poker backend with game logic, live player actions, and shared game state across concurrent tables.",
    stack: ["Node.js", "Socket.io", "PostgreSQL", "Sequelize"],
    details: [
      "Built the complete game backend and REST APIs.",
      "Synchronized live game state and player actions through WebSockets.",
      "Designed relational data models supporting multiple concurrent players per table.",
    ],
  },
  {
    id: "traders",
    title: "AS Traders",
    short: "An established business, a modern web presence.",
    category: "Full Stack",
    label: "Web Development / B2B",
    description:
      "A responsive B2B website for a chemical and pharmaceutical raw-material supplier in Lahore, organizing a broad product catalog into an accessible browsing experience.",
    stack: ["Next.js", "Responsive Design", "Product Catalog"],
    details: [
      "Developed a dynamic hero carousel and a catalog spanning more than 12 product categories.",
      "Built industry-specific sections for pharma, food, beverage, poultry, and veterinary customers.",
      "Integrated multiple contact channels, including WhatsApp.",
    ],
    url: "https://www.astraderspk.com/",
  },
];
export const experience = [
  {
    company: "Iris Labs",
    role: "Associate Software Engineer",
    date: "Mar 2026 — Present",
    location: "Remote",
    current: true,
    description: "Connecting AI capabilities to real product workflows.",
    bullets: [
      "Built a multi-tenant WhatsApp automation platform with Twilio, client-specific prompts, memory, and knowledge bases on OpenAI and OpenRouter.",
      "Implemented RAG pipelines and tool-calling workflows for data lookups, bookings, and record updates.",
      "Developed Retell voice agents and multi-step n8n automations connected to external services.",
      "Built NestJS and TypeScript services with TypeORM, PostgreSQL, JWT, RBAC, and validated DTOs.",
    ],
  },
  {
    company: "Waywe Gaming",
    role: "MERN Stack Developer",
    date: "Apr 2025 — Mar 2026",
    location: "Lahore, Pakistan",
    description: "Full-stack systems with a real-time backbone.",
    bullets: [
      "Developed an HRM system with role-based access using React, Node.js, and Sequelize.",
      "Built real-time game services and a React dashboard for role-based game statistics.",
      "Migrated backend services to Fly.io and automated delivery with GitHub Actions.",
      "Integrated referral deep links and Facebook authentication.",
    ],
  },
  {
    company: "Integriti",
    role: "Software Trainee",
    date: "Feb 2025 — Apr 2025",
    location: "Lahore, Pakistan",
    description: "Turning the fundamentals into working features.",
    bullets: [
      "Built React.js interfaces and Node.js / Express APIs for authentication and business logic.",
    ],
  },
  {
    company: "A4H",
    role: "MERN Stack Intern",
    date: "Sep 2023 — Jan 2024",
    location: "Bolton, UK · Remote",
    description: "My first steps in an international development team.",
    bullets: [
      "Built responsive React interfaces and Node.js / Express APIs for data handling and secure authentication.",
      "Collaborated in an agile, international remote team to deliver work on deadline.",
    ],
  },
];
export const skillGroups = [
  {
    name: "AI & agentic systems",
    number: "01",
    skills: [
      "OpenAI API",
      "OpenRouter",
      "RAG",
      "Vector embeddings",
      "Tool / function calling",
      "Prompt engineering",
      "Retell",
      "n8n",
      "Twilio",
    ],
  },
  {
    name: "Interfaces & applications",
    number: "02",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML & CSS",
    ],
  },
  {
    name: "APIs & data",
    number: "03",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "MySQL",
      "TypeORM",
      "Sequelize",
      "Socket.io",
      "JWT & RBAC",
      "Python",
    ],
  },
  {
    name: "Shipping & infrastructure",
    number: "04",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Fly.io",
      "Vercel",
      "Netlify",
      "Render",
      "Railway",
    ],
  },
];
export const learningProjects = [
  {
    title: "TinDog",
    type: "Responsive web design",
    image: tinDog,
    description:
      "An early exploration of responsive layouts, Bootstrap, and CSS through a playful landing page.",
    github: "First-website-structure",
    demo: "https://abdullah1013.github.io/First-website-structure/",
  },
  {
    title: "E-commerce",
    type: "Frontend development",
    image: commerce,
    description:
      "An online shopping interface built with JavaScript, jQuery, and Bootstrap, with dynamic interactions and responsive pages.",
    github: "First-e-commerice-web",
    demo: "https://abdullah1013.github.io/First-e-commerice-web/",
  },
  {
    title: "Packaging Rack",
    type: "Business website",
    image: racks,
    description:
      "A responsive product website for a packaging-rack business, built around browsing products and placing orders.",
    github: "My-pacakaging-rack",
    demo: "https://abdullah1013.github.io/My-pacakaging-rack/",
  },
  {
    title: "Dice Game",
    type: "JavaScript experiment",
    image: dice,
    description:
      "A two-player dice game exploring JavaScript interactions, randomized rolls, and game outcomes.",
    github: "dice_game",
    demo: "https://abdullah1013.github.io/dice_game/",
  },
  {
    title: "Word Search",
    type: "C++ fundamentals",
    image: words,
    description:
      "A console-based word puzzle with multiple difficulty levels, built while learning C++ and problem solving.",
    github: "Word_search_game",
  },
];
