export const projectFilters = ["All", "React", "Django", "REST API", "AI"];

export const projects = [
  {
    id: 1,
    title: "Globe Online Judge",
    description:
      "A competitive programming platform where students solve problems, join timed contests and follow live standings, with a local judge for C++ and Python and a global rating system.",
    image: "/projects/online-judge.png",
    technologies: ["React", "TypeScript", "Django REST Framework", "PostgreSQL"],
    filters: ["React", "Django", "REST API"],
    demo: "",
    github: "https://github.com/rabeyasumi",
  },
  {
    id: 2,
    title: "Pet Adoption Platform",
    description:
      "A REST API for browsing pets with filtering, search and ordering, plus favourites and adoption requests. Admin approvals run in one atomic transaction, so a pet can never go to two adopters.",
    image: "/projects/pet-adoption.png",
    technologies: ["Django", "Django REST Framework", "Token Auth"],
    filters: ["Django", "REST API"],
    demo: "",
    github: "https://github.com/rabeyasumi",
  },
  {
    id: 3,
    title: "Django E-commerce Store",
    description:
      "A single-vendor store covering product browsing, cart, coupons, orders and SSLCommerz payments, with customer accounts built on a custom user model.",
    image: "/projects/ecommerce-store.png",
    technologies: ["Django", "SSLCommerz", "ThemeWagon"],
    filters: ["Django"],
    demo: "",
    github: "https://github.com/rabeyasumi",
  },
  {
    id: 4,
    title: "AI Job Application Tracker",
    description:
      "A job-hunt tracker with application statuses, interview scheduling and a dashboard. AI analysis compares your profile with a job description and returns a match score and a learning path.",
    image: "/projects/job-tracker.png",
    technologies: ["Django", "Groq API", "LLM"],
    filters: ["Django", "AI"],
    demo: "",
    github: "https://github.com/rabeyasumi",
  },
];
