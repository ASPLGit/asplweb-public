export interface OpenPosition {
  slug: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
}


export const OPEN_POSITIONS: OpenPosition[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote / India",
    experience: "2–4 Years",
    summary:
      "We are looking for a frontend developer who enjoys building clean, performant, and user-focused interfaces.",
    responsibilities: [
      "Build responsive and accessible user interfaces",
      "Collaborate with designers and backend developers",
      "Maintain and improve existing frontend code",
      "Ensure performance and cross-browser compatibility",
    ],
    requirements: [
      "Strong experience with HTML, CSS, JavaScript",
      "Hands-on experience with React / Next.js",
      "Understanding of responsive design principles",
      "Good problem-solving skills",
    ],
    niceToHave: [
      "Experience with Tailwind CSS",
      "Basic understanding of UI/UX principles",
    ],
    benefits: [
      "Remote-friendly work environment",
      "Flexible working hours",
      "Opportunity to work on real-world projects",
      "Learning and growth-focused culture",
      "Collaborative and supportive team",
    ],
  },

  {
    slug: "backend-developer",
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote / India",
    experience: "3–5 Years",
    summary:
      "We are seeking a backend developer to build secure, scalable APIs and services.",
    responsibilities: [
      "Design and develop backend APIs",
      "Work with databases and cloud services",
      "Ensure security and performance",
    ],
    requirements: [
      "Experience with Node.js or similar backend technologies",
      "Strong understanding of databases",
      "API design and integration experience",
    ],
    benefits: [
      "Remote work flexibility",
      "Challenging and meaningful projects",
      "Long-term growth opportunities",
      "Supportive engineering culture",
    ],
  },
];
