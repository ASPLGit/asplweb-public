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
    slug: "dotnet-fullstack-developer",
    title: ".NET Developer (Full Stack)",
    type: "Full Time",
    location: "Ahmedabad / India",
    experience: "0–3 Years",
    summary:
      "We are looking for a motivated .NET developer (Fresher to 3 years experience) who is eager to build scalable backend systems and contribute to modern full-stack applications. This role offers hands-on exposure to real-world enterprise and product-based projects.",
    responsibilities: [
      "Develop and maintain backend services using .NET / .NET Core",
      "Build and integrate RESTful APIs with frontend applications",
      "Work on frontend components using modern frameworks (React / Angular or similar)",
      "Collaborate with cross-functional teams to deliver high-quality features",
      "Write clean, maintainable, and well-documented code",
      "Participate in testing, debugging, and performance optimization",
    ],
    requirements: [
      "Basic to intermediate knowledge of C# and .NET / .NET Core",
      "Understanding of REST APIs and database concepts (SQL Server or similar)",
      "Familiarity with HTML, CSS, and JavaScript",
      "Eagerness to learn full-stack development",
      "Strong logical thinking and problem-solving skills",
    ],
    niceToHave: [
      "Exposure to React, Angular, or other frontend frameworks",
      "Knowledge of Git and version control workflows",
      "Understanding of cloud platforms (Azure is a plus)",
      "Internship or academic project experience in web development",
    ],
    benefits: [
      "Opportunity to work on enterprise-grade and SaaS products",
      "Hands-on mentorship from experienced developers",
      "Career growth into full-stack or solution architecture roles",
      "Performance-driven learning environment",
    ],
  },

];
