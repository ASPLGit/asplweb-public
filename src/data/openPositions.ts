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
  }

];
