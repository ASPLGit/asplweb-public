import { TechnologyService } from "@/types/app";

export const technologies: TechnologyService[] = [
  {
    slug: "react",

    hero: {
      title: "React Development",
      description:
        "We design and build scalable React applications that are engineered for performance, clarity, and long-term growth from modern web platforms to enterprise dashboards that businesses rely on daily.",
      stats: [
        { label: "React Projects Delivered", value: "10+" },
        { label: "Years with React Engineering", value: "6+" },
        { label: "Average Lighthouse Performance", value: "90+" },
        { label: "Code Review & Quality Coverage", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "React Expertise",
      heading: "What We Build with React",
      subheading:
        "From customer-facing platforms to complex enterprise systems, we use React to build structured, maintainable applications that support long-term business growth not short-term launches.",
    },

    expertiseImage: {
      src: "/images/tech/react.svg",
      alt: "React technology",
    },

    expertise: [
      {
        chip: "UI/UX",
        title: "Responsive React Interfaces",
        description:
          "Thoughtfully designed, high-performance interfaces that adapt seamlessly across devices while maintaining speed, usability, and visual clarity.",
      },
      {
        chip: "Performance",
        title: "Optimized React Performance",
        description:
          "Strategic code-splitting, lazy loading, and rendering optimizations to ensure consistent performance as your product scales.",
      },
      {
        chip: "Scalable",
        title: "Scalable Component Architecture",
        description:
          "Well-structured, reusable component systems built for long-term maintainability and predictable growth.",
      },
      {
        chip: "Integration",
        title: "API & Backend Integration",
        description:
          "Reliable integration with REST, GraphQL, and third-party systems to keep your ecosystem connected and efficient.",
      },
      {
        chip: "Enterprise",
        title: "Enterprise React Solutions",
        description:
          "Secure, scalable dashboards, SaaS platforms, and enterprise applications designed for operational stability.",
      },
      {
        chip: "Modern Stack",
        title: "Modern React Stack",
        description:
          "TypeScript-driven development, structured state management, and modern tooling to ensure clarity, scalability, and cost efficiency.",
      },
    ],

    faq: {
      items: [
        {
          title: "What React development services do you offer?",
          content:
            "We provide end-to-end React development from UI architecture and application builds to performance optimization and long-term technical support.",
        },
        {
          title: "Can you work on existing React projects?",
          content:
            "Yes. We frequently step into existing React applications to refactor, stabilize, optimize, or extend them with a long-term improvement roadmap.",
        },
      ],
    },

    caseStudy: {
      sectionHeading: {
        sectionLabel: "React Case Study",
        heading: "Our Work in Action",
        subheading:
          "A real-world React platform engineered for scale, measurable performance improvements, and long-term operational reliability.",
      },
      category: "React Web Platform",
      title: "Scalable KYC & Identity Verification Platform",
      description:
        "A performance-focused React platform built with structured architecture and modern tooling to support secure onboarding and sustainable growth.",
      metrics: [
        { value: "65%", label: "Faster onboarding" },
        { value: "90%", label: "Performance improvement", variant: "dark" },
      ],
      backgroundLayerImage: "/images/layer1.webp",
      caseImage: {
        src: "/images/caseStudy/case1.jpg",
        alt: "React case study",
      },
    },
  },

  {
    slug: "nextjs",
    hero: {
      title: "Next.js Development",
      description:
        "We build structured, production-ready web applications using Next.js engineered for performance, search visibility, and long-term scalability. Our focus is not just speed at launch, but stability and growth over time.",
      stats: [
        { label: "Next.js Projects Delivered", value: "5+" },
        { label: "Years Engineering with Next.js", value: "6+" },
        { label: "Average Lighthouse Performance", value: "95+" },
        { label: "Stable Production Deployments", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Next.js Expertise",
      heading: "How We Build with Next.js",
      subheading:
        "From search-focused marketing platforms to large-scale enterprise systems, we use Next.js to create fast, secure, and maintainable web applications built on clean architecture and practical performance strategy.",
    },

    expertiseImage: {
      src: "/images/tech/nextjs.svg",
      alt: "Next.js framework",
    },

    expertise: [
      {
        chip: "SSR & SSG",
        title: "Server-Side & Static Rendering Strategy",
        description:
          "We implement SSR, SSG, and incremental strategies thoughtfully balancing performance, SEO, and infrastructure cost efficiency based on your real business needs.",
      },
      {
        chip: "App Router",
        title: "Modern App Router Architecture",
        description:
          "Structured applications using the Next.js App Router, layouts, nested routing, streaming, and server components to maintain clarity as your platform evolves.",
      },
      {
        chip: "Performance",
        title: "Performance Engineering",
        description:
          "Optimized image handling, intelligent caching, edge rendering, and code-splitting techniques to consistently deliver strong Core Web Vitals.",
      },
      {
        chip: "SEO",
        title: "Built-In SEO & Metadata Architecture",
        description:
          "Clean metadata management, Open Graph structure, schema markup, and technical SEO integrated directly into the application not added as an afterthought.",
      },
      {
        chip: "Full-Stack",
        title: "Full-Stack Next.js Applications",
        description:
          "API routes, server actions, authentication systems, and backend integrations designed to keep your architecture streamlined and maintainable.",
      },
      {
        chip: "Deployment",
        title: "Scalable Deployment & Infrastructure",
        description:
          "Reliable deployments on Vercel, cloud platforms, or custom environments with CI/CD pipelines, monitoring, and long-term infrastructure planning.",
      },
    ],

    faq: {
      items: [
        {
          title: "Why choose Next.js instead of traditional React setups?",
          content:
            "Next.js extends React with structured routing, server-side rendering, static generation, and built-in performance optimizations. It reduces architectural complexity and makes production deployment more predictable.",
        },
        {
          title: "Is Next.js suitable for large-scale applications?",
          content:
            "Yes. With server components, modular routing, and scalable deployment options, Next.js supports enterprise-grade systems while keeping the codebase organized and maintainable.",
        },
        {
          title: "Do you build with the latest Next.js App Router?",
          content:
            "Yes. We adopt the App Router, server components, streaming, and layout patterns where they provide clear architectural and performance advantages.",
        },
        {
          title: "Can you migrate an existing React application to Next.js?",
          content:
            "Absolutely. We carefully migrate or refactor existing React applications into Next.js while preserving business logic and improving performance, SEO, and long-term maintainability.",
        },
      ],
    },
  },
  {
    slug: "angular",
    hero: {
      title: "Angular Development",
      description:
        "We engineer structured, enterprise-focused Angular applications built to handle complex workflows, long product lifecycles, and evolving business requirements. Our approach prioritizes clarity, stability, and predictable scalability.",
      stats: [
        { label: "Angular Projects Delivered", value: "10+" },
        { label: "Years Engineering with Angular", value: "10+" },
        { label: "Enterprise Systems Delivered", value: "5+" },
        { label: "Code Quality & Test Coverage", value: "95%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Angular Expertise",
      heading: "How We Architect with Angular",
      subheading:
        "From enterprise platforms to data-heavy internal systems, we use Angular to build disciplined, maintainable applications where structure, performance, and long-term sustainability matter.",
    },

    expertiseImage: {
      src: "/images/tech/angular.svg",
      alt: "Angular framework",
    },

    expertise: [
      {
        chip: "Architecture",
        title: "Structured Enterprise Architecture",
        description:
          "Well-defined Angular module structures, services, and strict typing patterns designed to manage complex business rules without creating technical debt.",
      },
      {
        chip: "TypeScript",
        title: "TypeScript-Driven Development",
        description:
          "Strongly typed systems that improve reliability, reduce runtime issues, and make large codebases easier to scale and maintain over time.",
      },
      {
        chip: "Performance",
        title: "Performance-Focused Angular Engineering",
        description:
          "Optimized change detection strategies, lazy-loaded modules, and efficient state handling to maintain responsive user experiences even in large applications.",
      },
      {
        chip: "State",
        title: "Predictable State Management",
        description:
          "RxJS-driven reactive patterns and NgRx architecture where structured, scalable state control is required for enterprise environments.",
      },
      {
        chip: "UI Systems",
        title: "Reusable UI & Design Systems",
        description:
          "Custom Angular component libraries and scalable design systems to maintain consistency across dashboards, portals, and enterprise tools.",
      },
      {
        chip: "Integration",
        title: "Enterprise API & System Integrations",
        description:
          "Reliable integration with REST APIs, GraphQL services, authentication providers, and enterprise backends while maintaining clean separation of concerns.",
      },
    ],

    faq: {
      items: [
        {
          title: "When should I choose Angular instead of React?",
          content:
            "Angular is well-suited for large-scale applications that benefit from a structured framework, built-in architectural conventions, and strong TypeScript enforcement from the ground up.",
        },
        {
          title: "Is Angular a good choice for enterprise applications?",
          content:
            "Yes. Angular’s opinionated architecture, dependency injection system, and reactive programming model make it particularly effective for enterprise-grade systems with complex workflows.",
        },
        {
          title: "Do you use RxJS and NgRx in Angular projects?",
          content:
            "Yes. We use RxJS as a core reactive pattern and implement NgRx where centralized, predictable state management is essential for long-term scalability.",
        },
        {
          title: "Can you maintain or upgrade existing Angular applications?",
          content:
            "Absolutely. We assess legacy Angular systems, modernize architecture, upgrade framework versions, and improve performance while preserving business continuity.",
        },
      ],
    },
  },
  {
    slug: "dotnet",
    hero: {
      title: ".NET & ASP.NET Development",
      description:
        "We engineer secure and scalable applications using the .NET platform and ASP.NET Core, designed to support complex enterprise requirements, modern deployment environments, and long-term operational reliability.",
      stats: [
        { label: ".NET Projects Delivered", value: "20+" },
        { label: "Years of .NET Engineering", value: "10+" },
        { label: "Enterprise Platforms Delivered", value: "12+" },
        { label: "High-Traffic Systems Deployed", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: ".NET Expertise",
      heading: "How We Build with .NET & ASP.NET",
      subheading:
        "From high-performance backend APIs to full enterprise systems and distributed architectures, our .NET solutions are structured for reliability, maintainability, and long-term business growth.",
    },

    expertiseImage: {
      src: "/images/tech/dotnet-logo.svg",
      alt: ".NET framework technology",
    },

    expertise: [
      {
        chip: "Web & APIs",
        title: "ASP.NET Core Applications & APIs",
        description:
          "Designing secure, well-structured RESTful APIs and web platforms using ASP.NET Core, optimized for performance, maintainability, and cross-platform deployment.",
      },
      {
        chip: "Cross-Platform",
        title: "Cross-Platform .NET Development",
        description:
          "Building applications that operate reliably across Windows, Linux, and macOS environments using .NET’s unified runtime and tooling ecosystem.",
      },
      {
        chip: "Microservices",
        title: "Microservices & Distributed Architecture",
        description:
          "Developing modular, container-ready microservices using .NET, enabling scalable cloud-native systems within enterprise ecosystems.",
      },
      {
        chip: "Cloud Ready",
        title: "Cloud & Azure Integration",
        description:
          "Integrating .NET systems with cloud infrastructure, serverless workflows, monitoring tools, and CI/CD pipelines for predictable and efficient deployments.",
      },
      {
        chip: "Web Apps",
        title: "Structured MVC Web Platforms",
        description:
          "Implementing proven MVC patterns to clearly separate business logic, data layers, and presentation — ensuring maintainable and stable applications over time.",
      },
      {
        chip: "Enterprise",
        title: "Enterprise Resource Planning Systems",
        description:
          "Designing secure ERP platforms that centralize operations, finance, inventory, and reporting into unified, scalable systems aligned with business workflows.",
      },
      {
        chip: "Modernization",
        title: "Legacy System Modernization",
        description:
          "Upgrading and restructuring existing ASP.NET applications into modern architectures, improving performance and security while minimizing operational disruption.",
      },
      {
        chip: "Advisory",
        title: "Architecture & Technical Advisory",
        description:
          "Providing strategic guidance on .NET architecture, scalability planning, system design decisions, and technology roadmaps for complex enterprise solutions.",
      },
      {
        chip: "Performance",
        title: "High-Performance Optimization",
        description:
          "Leveraging asynchronous programming models, efficient middleware pipelines, and optimized database interactions to maintain responsive and scalable systems.",
      },
    ],

    faq: {
      items: [
        {
          title: "What is ASP.NET and when is it the right choice?",
          content:
            "ASP.NET is a powerful web framework within the .NET ecosystem used to build secure, scalable, and high-performance applications. It is particularly well-suited for enterprise systems, data-intensive platforms, and applications that require long-term stability and structured architecture.",
        },
        {
          title: "What types of applications can be developed using ASP.NET?",
          content:
            "ASP.NET supports enterprise portals, ERP platforms, RESTful APIs, SaaS products, internal dashboards, and backend services designed to handle complex business rules and high traffic environments.",
        },
        {
          title: "Why choose your team for .NET development?",
          content:
            "We approach .NET development with an architectural mindset — prioritizing maintainability, security, scalability, and cost efficiency. Our focus is on building systems that remain reliable and adaptable as your business evolves.",
        },
        {
          title: "Can you modernize or migrate legacy ASP.NET systems?",
          content:
            "Yes. We assess existing systems, upgrade framework versions, refactor architecture, enhance security standards, and transition applications to modern, cloud-ready environments while ensuring business continuity.",
        },
        {
          title: "How is ASP.NET project cost determined?",
          content:
            "Project cost depends on complexity, integration requirements, performance needs, and delivery timelines. We provide transparent estimates and flexible engagement models aligned with your long-term business objectives.",
        },
      ],
    }
  },
  {
    slug: "nodejs",
    hero: {
      title: "Node.js Development",
      description:
        "We engineer scalable, event-driven backend systems using Node.js — built to handle real-time workloads, API ecosystems, and high-concurrency environments with predictable performance and long-term stability.",
      stats: [
        { label: "Node.js Projects Delivered", value: "12+" },
        { label: "Years of Node.js Engineering", value: "10+" },
        { label: "APIs & Backend Services Built", value: "100%" },
        { label: "Full-Stack Node & React Systems", value: "8+" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Node.js Expertise",
      heading: "How We Build with Node.js",
      subheading:
        "From real-time platforms to distributed backend systems, we use Node.js to create efficient, non-blocking architectures that scale smoothly as traffic and business complexity grow.",
    },

    expertiseImage: {
      src: "/images/tech/nodejs.svg",
      alt: "Node.js runtime",
    },

    expertise: [
      {
        chip: "APIs",
        title: "Scalable API Architecture",
        description:
          "Designing structured REST and GraphQL APIs with clean routing, modular services, and optimized data handling to support evolving product ecosystems.",
      },
      {
        chip: "Real-Time",
        title: "Real-Time & Event-Driven Systems",
        description:
          "Building event-based systems such as live dashboards, messaging platforms, and notification engines using asynchronous and socket-driven architectures.",
      },
      {
        chip: "Microservices",
        title: "Modular Microservices Design",
        description:
          "Developing container-ready microservices that allow independent scaling, faster deployment cycles, and flexible system expansion.",
      },
      {
        chip: "Backend",
        title: "Backend for Web & Mobile Platforms",
        description:
          "Creating secure backend layers that manage authentication, business logic, data validation, and integration workflows for modern applications.",
      },
      {
        chip: "Performance",
        title: "High-Concurrency Optimization",
        description:
          "Built on Node.js’s non-blocking architecture to handle high traffic and concurrent workloads without performance bottlenecks.",
      },
      {
        chip: "Integration",
        title: "System & Third-Party Integrations",
        description:
          "Integrating databases, payment systems, cloud services, and external APIs with structured error handling and performance monitoring.",
      },
    ],

    faq: {
      items: [
        {
          title: "Why is Node.js a strong choice for backend development?",
          content:
            "Node.js uses an event-driven, asynchronous architecture that allows applications to handle many concurrent connections efficiently. This makes it especially suitable for APIs, real-time platforms, and scalable backend systems.",
        },
        {
          title: "Is Node.js appropriate for enterprise systems?",
          content:
            "Yes. When implemented with disciplined architecture and modular design, Node.js supports enterprise-grade APIs, microservices, and distributed applications with strong performance characteristics.",
        },
        {
          title: "Can Node.js support high-traffic applications?",
          content:
            "Absolutely. Its lightweight runtime and non-blocking model make it effective for high-traffic environments, particularly where real-time communication or rapid API responses are required.",
        },
        {
          title: "Do you improve or maintain existing Node.js applications?",
          content:
            "Yes. We assess existing systems, refactor inefficient modules, optimize performance bottlenecks, and modernize architecture to ensure long-term maintainability and scalability.",
        },
      ],
    },
  },
  {
    slug: "azure",

    hero: {
      title: "Microsoft Azure Cloud Solutions",
      description:
        "We architect and manage secure, cloud-native systems on Microsoft Azure enabling businesses to modernize infrastructure, improve operational resilience, and scale confidently as demand grows.",
      stats: [
        { label: "Azure Engagements Delivered", value: "70+" },
        { label: "Cloud Environments Deployed", value: "100+" },
        { label: "Enterprise Workloads Migrated", value: "50+" },
        { label: "Average Production Uptime", value: "99.9%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Azure Expertise",
      heading: "How We Build on Microsoft Azure",
      subheading:
        "From infrastructure design to full application modernization, we use Azure to create resilient, secure, and scalable cloud ecosystems aligned with long-term business strategy.",
    },

    expertiseImage: {
      src: "/images/tech/azure.svg",
      alt: "Microsoft Azure cloud platform",
    },

    expertise: [
      {
        chip: "Cloud Infra",
        title: "Cloud Architecture & Infrastructure Design",
        description:
          "Designing Azure environments with high availability, redundancy, and cost-aware resource planning to ensure performance and operational continuity.",
      },
      {
        chip: "App Hosting",
        title: "Application Hosting & Modernization",
        description:
          "Deploying and modernizing web and backend applications using Azure App Services, containers, and cloud-native architectural patterns.",
      },
      {
        chip: "Migration",
        title: "Structured Cloud Migration",
        description:
          "Transitioning legacy and on-premise systems to Azure through phased migration strategies that minimize downtime and preserve data integrity.",
      },
      {
        chip: "DevOps",
        title: "CI/CD & DevOps Enablement",
        description:
          "Implementing automated build and deployment pipelines with Azure DevOps to improve release velocity, testing reliability, and infrastructure consistency.",
      },
      {
        chip: "Security",
        title: "Cloud Security & Governance",
        description:
          "Establishing identity management, access controls, monitoring policies, and compliance-aligned configurations to protect enterprise workloads.",
      },
      {
        chip: "Data",
        title: "Data Platforms & Storage Solutions",
        description:
          "Designing scalable databases, cloud storage systems, and managed data services optimized for availability, performance, and future growth.",
      },
    ],

    faq: {
      items: [
        {
          title: "Why is Microsoft Azure a strong choice for cloud transformation?",
          content:
            "Azure provides a mature cloud ecosystem with enterprise-grade security, global infrastructure, and integrated tooling. It supports both modern cloud-native applications and legacy system modernization within a unified platform.",
        },
        {
          title: "Can you migrate existing infrastructure to Azure?",
          content:
            "Yes. We evaluate current systems, define migration roadmaps, and execute structured transitions to Azure while maintaining business continuity and system integrity.",
        },
        {
          title: "Is Azure suitable for complex enterprise workloads?",
          content:
            "Absolutely. Azure supports high-demand enterprise environments with scalable compute resources, compliance tooling, identity management, and global availability.",
        },
        {
          title: "Do you provide ongoing Azure optimization and management?",
          content:
            "Yes. We provide continuous monitoring, cost optimization, security updates, and performance tuning to ensure your Azure environment remains efficient and aligned with evolving business needs.",
        },
      ],
    },
  },
  {
    slug: "aws",

    hero: {
      title: "Amazon Web Services (AWS) Solutions",
      description:
        "We architect and operate secure, scalable cloud environments on AWS — helping businesses modernize infrastructure, handle high-demand workloads, and scale predictably as operations grow.",
    },

    sectionHeading: {
      sectionLabel: "AWS Expertise",
      heading: "How We Build on AWS",
      subheading:
        "From foundational infrastructure to cloud-native application platforms, we use AWS to create resilient, flexible, and cost-optimized environments aligned with long-term business objectives.",
    },

    expertiseImage: {
      src: "/images/tech/aws.svg",
      alt: "Amazon Web Services cloud platform",
    },

    expertise: [
      {
        chip: "Infrastructure",
        title: "Cloud Infrastructure Architecture",
        description:
          "Designing AWS environments with redundancy, auto-scaling, and fault-tolerant configurations to ensure reliability and performance under varying traffic loads.",
      },
      {
        chip: "Compute",
        title: "Application & Compute Optimization",
        description:
          "Deploying and tuning web applications and backend services using AWS compute resources selected for performance efficiency and cost balance.",
      },
      {
        chip: "Serverless",
        title: "Serverless & Event-Driven Architectures",
        description:
          "Building event-driven systems using serverless services to reduce infrastructure overhead while maintaining scalability and responsiveness.",
      },
      {
        chip: "Migration",
        title: "Cloud Migration & System Modernization",
        description:
          "Transitioning legacy applications and on-premise workloads to AWS through structured migration strategies that minimize downtime and operational risk.",
      },
      {
        chip: "Security",
        title: "Security & Governance Frameworks",
        description:
          "Implementing identity management, access controls, monitoring policies, and secure network configurations to protect cloud environments.",
      },
      {
        chip: "DevOps",
        title: "DevOps & Infrastructure Automation",
        description:
          "Automating infrastructure provisioning and deployment workflows using AWS-native tools and infrastructure-as-code practices.",
      },
    ],

    faq: {
      items: [
        {
          title: "Why choose AWS for cloud infrastructure?",
          content:
            "AWS provides a mature and flexible cloud ecosystem with global infrastructure, extensive service offerings, and built-in security controls. It supports both rapid scaling and long-term operational stability.",
        },
        {
          title: "Is AWS suitable for large-scale and high-traffic applications?",
          content:
            "Yes. AWS infrastructure is designed to scale elastically, making it effective for applications that experience fluctuating demand or sustained high traffic.",
        },
        {
          title: "Can you migrate existing applications to AWS?",
          content:
            "Absolutely. We assess current systems, define migration roadmaps, and execute transitions to AWS while maintaining data integrity and minimizing service disruption.",
        },
        {
          title: "Do you provide ongoing AWS optimization and support?",
          content:
            "Yes. We provide continuous monitoring, cost management, security updates, and performance tuning to ensure your AWS environment remains efficient and aligned with evolving business requirements.",
        },
      ],
    },
  },
  {
    slug: "sql-server",

    hero: {
      title: "SQL Server Database Solutions",
      description:
        "We architect and manage enterprise-grade database systems using Microsoft SQL Server, delivering structured data governance, performance optimization, and secure, scalable platforms for mission-critical applications. MySQL is supported where flexible or web-focused environments require it.",
    },

    sectionHeading: {
      sectionLabel: "SQL Server Expertise",
      heading: "How We Engineer with SQL Server",
      subheading:
        "From transactional enterprise systems to large-scale data platforms, we design and maintain SQL Server environments built for reliability, compliance, and long-term operational stability.",
    },

    expertiseImage: {
      src: "/images/tech/sql-server-logo.svg",
      alt: "Microsoft SQL Server database",
    },

    expertise: [
      {
        chip: "Architecture",
        title: "Enterprise SQL Server Architecture",
        description:
          "Designing structured SQL Server environments using normalized schema design, indexing strategies, partitioning, and performance-focused database architecture aligned with enterprise standards.",
      },
      {
        chip: "Performance",
        title: "Query Optimization & Execution Planning",
        description:
          "Improving performance through execution plan analysis, index tuning, stored procedure optimization, and workload balancing for high-demand applications.",
      },
      {
        chip: "Security",
        title: "Advanced Security & Compliance Controls",
        description:
          "Implementing role-based access control, Transparent Data Encryption (TDE), auditing, row-level security, and compliance-ready configurations for regulated industries.",
      },
      {
        chip: "High Availability",
        title: "High Availability & Disaster Recovery",
        description:
          "Configuring Always On Availability Groups, failover clustering, and backup strategies to ensure resilience and minimal downtime.",
      },
      {
        chip: "Scalability",
        title: "Scalable Enterprise Data Platforms",
        description:
          "Building SQL Server systems capable of handling high transaction volumes, complex reporting workloads, and distributed enterprise architectures.",
      },
      {
        chip: "Integration",
        title: ".NET & Enterprise Integration",
        description:
          "Deep integration with .NET applications, APIs, reporting tools, and enterprise systems for consistent and secure data exchange.",
      },
      {
        chip: "Migration",
        title: "Version Upgrades & Legacy Modernization",
        description:
          "Upgrading legacy SQL Server environments, optimizing schema design, and transitioning to modern architectures without disrupting business operations.",
      },
      {
        chip: "MySQL",
        title: "MySQL Support for Web & SaaS Platforms",
        description:
          "Supporting MySQL deployments for web-driven or cost-sensitive applications where flexibility and lightweight infrastructure are priorities.",
      },
    ],
    comparison: [
      {
        title: "Data Structure",
        sql:
          "Structured tables with fixed schema. Best for systems where data relationships and consistency matter.",
        mongodb:
          "Flexible document format. Better when data changes often or structure is not strictly relational.",
      },
      {
        title: "Best Fit",
        sql:
          "ERP systems, finance platforms, enterprise applications requiring strong transactional control.",
        mongodb:
          "SaaS products, real-time apps, content-driven platforms that evolve quickly.",
      },
      {
        title: "Scaling",
        sql:
          "Scales with performance tuning and high-availability setups. Predictable in enterprise environments.",
        mongodb:
          "Built for horizontal scaling across distributed systems and growing datasets.",
      },
      {
        title: "Stability vs Flexibility",
        sql:
          "Prioritizes stability, governance, and long-term reliability.",
        mongodb:
          "Prioritizes flexibility and faster development cycles.",
      },
    ],

    faq: {
      items: [
        {
          title: "When should I choose SQL Server?",
          content:
            "SQL Server is ideal for enterprise systems that require strong security controls, structured governance, advanced reporting capabilities, and close integration with Microsoft technologies.",
        },
        {
          title: "Is SQL Server suitable for high-transaction environments?",
          content:
            "Yes. With proper indexing, partitioning, and high-availability configurations, SQL Server can efficiently handle large transaction volumes and complex workloads.",
        },
        {
          title: "Do you implement high availability in SQL Server?",
          content:
            "Absolutely. We configure Always On Availability Groups, failover clusters, replication strategies, and structured backup plans to ensure resilience and continuity.",
        },
        {
          title: "When would MySQL be preferred instead?",
          content:
            "MySQL is often selected for web-focused and SaaS platforms where lightweight deployment and cost efficiency are primary considerations. We help evaluate the right fit based on system requirements.",
        },
        {
          title: "Can you modernize legacy SQL Server environments?",
          content:
            "Yes. We assess existing database environments, upgrade versions, refactor schema design, optimize performance, and align infrastructure with modern application architecture.",
        },
      ],
    },
  },
  {
    slug: "mongodb",

    hero: {
      title: "MongoDB Database Solutions",
      description:
        "We design scalable and adaptable data platforms using MongoDB — enabling modern applications to handle dynamic data structures, real-time workloads, and large-scale growth with efficiency.",
    },

    sectionHeading: {
      sectionLabel: "MongoDB Expertise",
      heading: "How We Engineer with MongoDB",
      subheading:
        "From real-time applications to distributed data platforms, we use MongoDB to build flexible, performance-focused database systems that evolve alongside growing business requirements.",
    },

    expertiseImage: {
      src: "/images/tech/mongodb.svg",
      alt: "MongoDB NoSQL database",
    },

    expertise: [
      {
        chip: "NoSQL",
        title: "Structured Document Data Modeling",
        description:
          "Designing flexible document schemas that allow applications to evolve without rigid relational constraints while maintaining data clarity and consistency.",
      },
      {
        chip: "Scalability",
        title: "Horizontal Scaling & Sharded Architectures",
        description:
          "Implementing sharding and distributed cluster strategies to support growing datasets and increasing traffic without compromising performance.",
      },
      {
        chip: "Performance",
        title: "Query & Aggregation Optimization",
        description:
          "Improving performance through index planning, aggregation pipeline tuning, and query pattern optimization for efficient data retrieval.",
      },
      {
        chip: "Real-Time",
        title: "Real-Time & Event-Based Systems",
        description:
          "Supporting event-driven platforms, activity feeds, analytics dashboards, and streaming-based systems requiring fast and responsive data access.",
      },
      {
        chip: "Integration",
        title: "Backend & API Integration",
        description:
          "Integrating MongoDB seamlessly with Node.js, APIs, and modern application stacks to ensure consistent and efficient data flow.",
      },
      {
        chip: "Migration",
        title: "Data Migration & Structural Refactoring",
        description:
          "Migrating relational or legacy NoSQL systems to MongoDB through structured planning, ensuring data integrity and optimized schema design.",
      },
    ],
    comparison: [
      {
        title: "Data Structure",
        sql:
          "Structured tables with fixed schema. Best for systems where data relationships and consistency matter.",
        mongodb:
          "Flexible document format. Better when data changes often or structure is not strictly relational.",
      },
      {
        title: "Best Fit",
        sql:
          "ERP systems, finance platforms, enterprise applications requiring strong transactional control.",
        mongodb:
          "SaaS products, real-time apps, content-driven platforms that evolve quickly.",
      },
      {
        title: "Scaling",
        sql:
          "Scales with performance tuning and high-availability setups. Predictable in enterprise environments.",
        mongodb:
          "Built for horizontal scaling across distributed systems and growing datasets.",
      },
      {
        title: "Stability vs Flexibility",
        sql:
          "Prioritizes stability, governance, and long-term reliability.",
        mongodb:
          "Prioritizes flexibility and faster development cycles.",
      },
    ],


    faq: {
      items: [
        {
          title: "When is MongoDB the right choice?",
          content:
            "MongoDB is well suited for applications that require flexible schemas, rapid iteration, and horizontal scalability — especially where data structures evolve frequently.",
        },
        {
          title: "Can MongoDB support large-scale applications?",
          content:
            "Yes. With proper indexing, sharding strategies, and distributed cluster design, MongoDB can effectively support high-traffic and large-volume data environments.",
        },
        {
          title: "How does MongoDB differ from relational databases?",
          content:
            "Unlike relational databases that rely on fixed tables and predefined schemas, MongoDB stores data in document-based structures. This allows greater flexibility while still supporting indexing and structured query patterns.",
        },
        {
          title: "Do you migrate existing systems to MongoDB?",
          content:
            "Yes. We evaluate existing data models, plan structured migrations, and optimize schemas to ensure performance, consistency, and minimal operational disruption.",
        },
      ],
    },
  },
  {
    slug: "solidity",

    hero: {
      title: "Solidity Smart Contract",
      description:
        "Solidity is a contract-oriented programming language used to define and execute deterministic logic on blockchain networks. We use Solidity to build secure, upgradeable, and production-ready smart contracts that power decentralized systems and programmable digital assets.",
    },

    sectionHeading: {
      sectionLabel: "Solidity Engineering",
      heading: "What We Build Using Solidity",
      subheading:
        "Solidity enables programmable on-chain logic for decentralized applications, token economies, identity systems, and automated governance models. We focus on secure design, gas optimization, and predictable contract behavior.",
    },

    expertiseImage: {
      src: "/images/tech/solidity.svg",
      alt: "Solidity programming language",
    },

    expertise: [
      {
        chip: "Smart Contracts",
        title: "Deterministic On-Chain Logic",
        description:
          "Developing structured smart contracts that enforce predefined rules on-chain, eliminating reliance on centralized intermediaries.",
      },
      {
        chip: "Tokens",
        title: "ERC Token Standard Implementation",
        description:
          "Building ERC-20, ERC-721, and ERC-1155 compliant contracts to support fungible tokens, NFTs, governance mechanisms, and programmable digital ownership.",
      },
      {
        chip: "Automation",
        title: "Autonomous Execution & Escrow Systems",
        description:
          "Designing self-executing contracts for escrow flows, governance voting, reward distribution, and rule-based automation.",
      },
      {
        chip: "Security",
        title: "Security-First Contract Design",
        description:
          "Applying access control patterns, input validation, reentrancy protection, and structured testing to reduce vulnerabilities before deployment.",
      },
      {
        chip: "EVM",
        title: "EVM-Compatible Deployment",
        description:
          "Deploying contracts across Ethereum and other EVM-compatible networks while ensuring consistent bytecode behavior and gas efficiency.",
      },
      {
        chip: "Integration",
        title: "Frontend & Backend Integration",
        description:
          "Connecting Solidity contracts to web interfaces and backend services using Web3 libraries for transaction handling, event listening, and state synchronization.",
      },
    ],

    faq: {
      items: [
        {
          title: "What is Solidity primarily used for?",
          content:
            "Solidity is used to define smart contracts that execute logic on blockchain networks. These contracts manage digital assets, enforce rules, and automate interactions without centralized control.",
        },
        {
          title: "Which blockchain networks support Solidity?",
          content:
            "Solidity contracts run on Ethereum and other EVM-compatible networks, allowing deployment across multiple blockchain ecosystems with consistent behavior.",
        },
        {
          title: "Is Solidity suitable for production systems?",
          content:
            "Yes. With structured architecture, testing, and security validation, Solidity contracts can power production-grade decentralized platforms.",
        },
        {
          title: "How do smart contracts interact with web applications?",
          content:
            "Web applications interact with Solidity contracts through Web3 libraries that allow reading contract state, sending transactions, and listening to on-chain events.",
        },
      ],
    },
  },
  {
    slug: "ethereum",

    hero: {
      title: "Ethereum Blockchain Infrastructure",
      description:
        "Ethereum is a programmable blockchain network that enables decentralized logic, digital asset management, and trust-minimized execution. We use Ethereum to build production-ready decentralized systems with secure smart contracts and scalable on-chain architecture.",
    },

    sectionHeading: {
      sectionLabel: "Ethereum Platform",
      heading: "How We Build on Ethereum",
      subheading:
        "Ethereum provides a distributed execution layer for smart contracts and decentralized applications. We design systems that leverage Ethereum’s security model, consensus mechanisms, and programmable infrastructure to support real-world digital products.",
    },

    expertiseImage: {
      src: "/images/tech/ethereum.svg",
      alt: "Ethereum blockchain platform",
    },

    expertise: [
      {
        chip: "Infrastructure",
        title: "Decentralized Application Foundation",
        description:
          "Using Ethereum as a base execution layer to power decentralized applications without centralized control or single points of failure.",
      },
      {
        chip: "Smart Contracts",
        title: "Secure Smart Contract Deployment",
        description:
          "Deploying deterministic smart contracts on the Ethereum Virtual Machine (EVM) with structured logic, gas optimization, and controlled upgrade strategies.",
      },
      {
        chip: "EVM",
        title: "EVM-Compatible Ecosystem Development",
        description:
          "Building systems that remain interoperable across Ethereum and other EVM-compatible networks using standardized contract interfaces.",
      },
      {
        chip: "Tokens",
        title: "Tokenization & Digital Asset Systems",
        description:
          "Implementing ERC-compliant token models to support digital ownership, governance mechanisms, access permissions, and asset transfers.",
      },
      {
        chip: "Security",
        title: "Consensus-Based Execution",
        description:
          "Designing applications where transaction validation and rule enforcement are governed by blockchain consensus rather than centralized authorities.",
      },
      {
        chip: "Integration",
        title: "Web & Backend Integration",
        description:
          "Connecting Ethereum smart contracts with web interfaces and backend services using Web3 libraries, RPC endpoints, and event-based synchronization.",
      },
    ],

    faq: {
      items: [
        {
          title: "What is Ethereum used for in real-world systems?",
          content:
            "Ethereum is used to run smart contracts that manage digital assets, enforce programmable rules, and coordinate decentralized workflows across multiple participants.",
        },
        {
          title: "How does Ethereum differ from Bitcoin?",
          content:
            "While Bitcoin primarily functions as a digital currency network, Ethereum provides a programmable execution environment that supports decentralized applications and smart contract logic.",
        },
        {
          title: "Is Ethereum suitable for enterprise applications?",
          content:
            "Yes. When architected carefully, Ethereum can support identity systems, asset tokenization, traceability platforms, and multi-party coordination systems that require transparent execution.",
        },
        {
          title: "How do web applications interact with Ethereum?",
          content:
            "Web and backend systems interact with Ethereum using Web3-compatible libraries to read blockchain state, submit transactions, and monitor smart contract events.",
        },
      ],
    },
  }

];
