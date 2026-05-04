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
    slug: "blockchain-developer",
    title: "Blockchain Developer (2–3 Years Experience)",
    type: "Full Time",
    location: "Ahmedabad / India",
    experience: "2–3 Years",
    summary:
      "We are looking for a skilled Blockchain Developer with 2–3 years of hands-on experience to design, develop, and maintain blockchain-based applications. The ideal candidate should have a strong understanding of decentralized systems, smart contracts, and blockchain protocols, along with the ability to build secure and scalable solutions.",
    responsibilities: [
      "Design and develop blockchain based solutions and decentralized applications (dApps)",
      "Write, test, and deploy smart contracts on platforms like Ethereum, Polygon, or similar",
      "Collaborate with cross functional teams including backend, frontend, and product teams",
      "Optimize and improve performance, scalability, and security of blockchain systems",
      "Integrate blockchain solutions with existing systems and APIs",
      "Conduct code reviews and ensure best practices in development",
      "Stay updated with the latest blockchain trends, tools, and technologies",
    ],
    requirements: [
      "2–3 years of experience in blockchain development",
      "Strong proficiency in programming languages such as Solidity, JavaScript, TypeScript, or Go",
      "Experience with blockchain platforms like Ethereum, Binance Smart Chain, or Polygon",
      "Knowledge of smart contract development and frameworks like Hardhat, Truffle, or Foundry",
      "Understanding of cryptography, consensus algorithms, and decentralized architectures",
      "Experience with Web3 libraries such as Web3.js or Ethers.js",
      "Familiarity with REST APIs and backend development",
      "Strong problem solving and debugging skills",
    ],
    niceToHave: [
      "Experience with DeFi, NFTs, or token standards (ERC-20, ERC-721, ERC-1155)",
      "Knowledge of Layer 2 solutions and scaling techniques",
      "Familiarity with cloud platforms like AWS, Azure, or GCP",
      "Understanding of security best practices and smart contract audits",
      "Experience with CI/CD pipelines and DevOps tools",
    ],
    benefits: [
      "5 days working week",
      "Competitive salary based on experience and skills",
      "Opportunity to work on cutting edge blockchain and Web3 projects",
    ],
  },
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
  }

];
