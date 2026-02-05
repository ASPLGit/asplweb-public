import { TechnologyService } from "@/types/app";

export const technologies: TechnologyService[] = [
  {
    slug: "react",

    hero: {
      title: "React Development",
      description:
        "We build fast, scalable, and maintainable user interfaces using React, powering modern web apps, dashboards, and enterprise platforms.",
      stats: [
        { label: "React Projects Delivered", value: "120+" },
        { label: "Years with React", value: "6+" },
        { label: "Lighthouse Performance Score", value: "90+" },
        { label: "Clean Code & Review Coverage", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "React Expertise",
      heading: "What We Build with React",
      subheading:
        "From responsive marketing websites to complex enterprise applications, we use React to deliver fast, scalable, and maintainable user experiences tailored to real business needs.",
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
          "High-performance, responsive React interfaces that adapt seamlessly across devices.",
      },
      {
        chip: "Performance",
        title: "Optimized React Performance",
        description:
          "Code-splitting, lazy loading, and rendering optimizations for blazing-fast apps.",
      },
      {
        chip: "Scalable",
        title: "Scalable Component Architecture",
        description:
          "Modular, reusable component systems that scale with your business.",
      },
      {
        chip: "Integration",
        title: "API & Backend Integration",
        description:
          "Seamless integration with REST, GraphQL, and third-party services.",
      },
      {
        chip: "Enterprise",
        title: "Enterprise React Solutions",
        description:
          "Admin dashboards, SaaS platforms, and enterprise-grade SPAs.",
      },
      {
        chip: "Modern Stack",
        title: "Modern React Stack",
        description:
          "TypeScript, Redux / Context, and modern tooling for future-ready apps.",
      },
    ],

    faq: {
      items: [
        {
          title: "What React development services do you offer?",
          content:
            "End-to-end React development including SPAs, dashboards, UI systems, and performance optimization.",
        },
        {
          title: "Can you work on existing React projects?",
          content:
            "Yes. We can refactor, optimize, scale, or extend existing React applications.",
        },
      ],
    },

    caseStudy: {
      sectionHeading: {
        sectionLabel: "React Case Study",
        heading: "Our Work in Action",
        subheading:
          "A real-world React platform built for scale, performance, and long-term maintainability.",
      },
      category: "React Web Platform",
      title: "Scalable KYC & Identity Verification",
      description:
        "A high-performance React platform built with modern tooling and clean architecture.",
      metrics: [
        { value: "65%", label: "Faster onboarding" },
        { value: "90%", label: "Improved performance", variant: "dark" },
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
        "We build high-performance, SEO-optimized, and production-ready web applications using Next.js, designed for scalability, speed, and long-term maintainability.",
      stats: [
        { label: "Next.js Projects Delivered", value: "80+" },
        { label: "Years with Next.js", value: "5+" },
        { label: "Average Lighthouse Score", value: "95+" },
        { label: "Production-Grade Deployments", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Next.js Expertise",
      heading: "What We Build with Next.js",
      subheading:
        "From SEO-driven marketing sites to complex enterprise platforms, we use Next.js to deliver fast, secure, and scalable web experiences backed by modern architecture.",
    },

    expertiseImage: {
      src: "/images/tech/nextjs.svg",
      alt: "Next.js framework",
    },

    expertise: [
      {
        chip: "SSR & SSG",
        title: "Server-Side & Static Rendering",
        description:
          "Leverage SSR, SSG, and ISR to deliver lightning-fast pages, improved SEO, and optimal performance across global audiences.",
      },
      {
        chip: "App Router",
        title: "Modern App Router Architecture",
        description:
          "Build scalable applications using the Next.js App Router with layouts, nested routes, streaming, and server components.",
      },
      {
        chip: "Performance",
        title: "Performance Optimization",
        description:
          "Advanced image optimization, code-splitting, caching strategies, and edge rendering for exceptional Core Web Vitals.",
      },
      {
        chip: "SEO",
        title: "SEO & Metadata Optimization",
        description:
          "Structured metadata, Open Graph, schema markup, and SEO best practices baked directly into the application.",
      },
      {
        chip: "Full-Stack",
        title: "Full-Stack Next.js Solutions",
        description:
          "API routes, server actions, authentication, and backend integrations for complete full-stack applications.",
      },
      {
        chip: "Deployment",
        title: "Scalable Deployment & Hosting",
        description:
          "Optimized deployments on Vercel, cloud platforms, and custom infrastructures with CI/CD and monitoring.",
      },
    ],

    faq: {
      items: [
        {
          title: "Why choose Next.js over traditional React?",
          content:
            "Next.js enhances React with built-in SSR, SSG, routing, performance optimizations, and SEO capabilities, making it ideal for production-ready applications.",
        },
        {
          title: "Is Next.js suitable for large-scale applications?",
          content:
            "Yes. Next.js is widely used for enterprise-grade platforms thanks to its scalable architecture, server components, and performance tooling.",
        },
        {
          title: "Do you use the Next.js App Router?",
          content:
            "Yes. We build modern applications using the App Router, server components, layouts, and streaming where appropriate.",
        },
        {
          title: "Can you migrate an existing React app to Next.js?",
          content:
            "Absolutely. We can migrate or refactor existing React applications into Next.js while preserving functionality and improving performance and SEO.",
        },
      ],
    },
  }
  ,
  {
    slug: "angular",

    hero: {
      title: "Angular Development",
      description:
        "We build robust, scalable, and enterprise-ready web applications using Angular, designed for long-term maintainability, performance, and complex business workflows.",
      stats: [
        { label: "Angular Projects Delivered", value: "60+" },
        { label: "Years with Angular", value: "5+" },
        { label: "Enterprise Applications Built", value: "40+" },
        { label: "Code Quality & Testing Coverage", value: "95%+" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Angular Expertise",
      heading: "What We Build with Angular",
      subheading:
        "From large-scale enterprise platforms to data-intensive dashboards, we use Angular to deliver structured, maintainable, and high-performance applications.",
    },

    expertiseImage: {
      src: "/images/tech/angular.svg",
      alt: "Angular framework",
    },

    expertise: [
      {
        chip: "Architecture",
        title: "Enterprise-Grade Architecture",
        description:
          "Well-structured Angular architectures using modules, services, and strict typing to support complex business logic.",
      },
      {
        chip: "TypeScript",
        title: "TypeScript-First Development",
        description:
          "Strongly typed Angular applications that improve code reliability, readability, and long-term maintainability.",
      },
      {
        chip: "Performance",
        title: "High-Performance Angular Apps",
        description:
          "Optimized change detection, lazy loading, and efficient state handling for fast and responsive user experiences.",
      },
      {
        chip: "State",
        title: "State Management",
        description:
          "Predictable state management using RxJS patterns and NgRx for large-scale applications.",
      },
      {
        chip: "UI Systems",
        title: "Reusable UI Component Systems",
        description:
          "Custom Angular component libraries and design systems for consistent, scalable user interfaces.",
      },
      {
        chip: "Integration",
        title: "API & Enterprise Integrations",
        description:
          "Seamless integration with REST APIs, GraphQL services, authentication providers, and enterprise backends.",
      },
    ],

    faq: {
      items: [
        {
          title: "When should I choose Angular over React?",
          content:
            "Angular is ideal for large, enterprise-scale applications that require a structured framework, strong typing, and built-in tooling.",
        },
        {
          title: "Is Angular suitable for enterprise applications?",
          content:
            "Yes. Angular is widely adopted for enterprise systems due to its opinionated architecture, TypeScript foundation, and scalability.",
        },
        {
          title: "Do you use RxJS and NgRx?",
          content:
            "Yes. We use RxJS extensively and NgRx when predictable, scalable state management is required.",
        },
        {
          title: "Can you maintain or upgrade existing Angular applications?",
          content:
            "Absolutely. We modernize, refactor, and upgrade legacy Angular applications while improving performance and code quality.",
        },
      ],
    },
  },
  {
    slug: "dotnet",

    hero: {
      title: ".NET & ASP.NET Development",
      description:
        "We build secure, scalable, and high-performance web applications and APIs using the .NET platform and ASP.NET Core, tailored to enterprise requirements and modern deployment environments.",
      stats: [
        { label: ".NET Projects Delivered", value: "80+" },
        { label: "Years with .NET Expertise", value: "8+" },
        { label: "Enterprise Systems Built", value: "60+" },
        { label: "Security & Compliance Ready", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: ".NET Expertise",
      heading: "What We Build with .NET & ASP.NET",
      subheading:
        "From backend APIs to full-stack systems and microservices, our .NET solutions are built for performance, reliability, and business scale.",
    },

    expertiseImage: {
      src: "/images/tech/dotnet.svg",
      alt: ".NET framework technology",
    },

    expertise: [
      {
        chip: "Web & APIs",
        title: "ASP.NET Core Web Apps & APIs",
        description:
          "Design and develop secure, RESTful APIs and web applications with ASP.NET Core, optimized for performance and scalability across platforms.",
      },
      {
        chip: "Cross-Platform",
        title: "Cross-Platform Development",
        description:
          "Build applications that run on Windows, Linux, and macOS using .NET’s cross-platform runtime and tooling.",
      },
      {
        chip: "Microservices",
        title: "Microservices & Distributed Systems",
        description:
          "Architect and deliver modular microservices using .NET with containerization support, ideal for cloud and enterprise ecosystems.",
      },
      {
        chip: "Cloud Ready",
        title: "Cloud & Azure Integration",
        description:
          "Seamlessly integrate .NET applications with cloud services, serverless functions, and CI/CD pipelines for modern deployment workflows.",
      }, {
        chip: "Web Apps",
        title: "Structured MVC Web Platforms",
        description:
          "Developing clean, maintainable web applications using proven MVC patterns that separate business logic, data handling, and presentation for long-term stability.",
      },
      {
        chip: "Enterprise",
        title: "Enterprise Resource Planning Systems",
        description:
          "Design and build end-to-end ERP solutions that unify operations, finance, inventory, and reporting into a single, secure, and scalable system.",
      },
      {
        chip: "Modernization",
        title: "Legacy System Modernization",
        description:
          "Upgrade and transform existing ASP.NET applications to modern architectures, improving performance, security, and maintainability without disrupting business workflows.",
      },
      {
        chip: "Advisory",
        title: "Architecture & Technical Advisory",
        description:
          "Provide expert guidance on .NET architecture decisions, technology selection, scalability planning, and best practices for complex enterprise systems.",
      },
      {
        chip: "Performance",
        title: "High Performance & Optimization",
        description:
          "Leverage ASP.NET Core’s efficient runtime and asynchronous patterns for responsive and scalable application performance.}",
      },
    ],

    faq: {
      items: [
        {
          title: "What is ASP.NET and when should I choose it?",
          content:
            "ASP.NET is a modern web framework built on the .NET platform for developing secure, scalable, and high-performance web applications and APIs. It is an excellent choice for enterprise systems, data-driven platforms, and applications that require long-term stability and strong security standards.",
        },
        {
          title: "What types of applications can be built using ASP.NET?",
          content:
            "ASP.NET is well suited for building enterprise web applications, RESTful APIs, ERP systems, admin dashboards, SaaS platforms, and backend services that handle complex business logic and high user traffic.",
        },
        {
          title: "Why choose your team for ASP.NET development?",
          content:
            "We focus on building maintainable, secure, and scalable .NET solutions backed by clean architecture, performance optimization, and industry best practices. Our approach emphasizes long-term reliability, not just short-term delivery.",
        },
        {
          title: "Can you modernize or migrate existing ASP.NET applications?",
          content:
            "Yes. We help modernize legacy ASP.NET applications by upgrading frameworks, improving performance, enhancing security, and transitioning systems to modern architectures or cloud-ready environments.",
        },
        {
          title: "How much does ASP.NET development typically cost?",
          content:
            "The cost depends on factors such as project complexity, application size, integrations, and timelines. We provide flexible engagement models and transparent estimates after understanding your business requirements.",
        },
      ],
    }
  },
  {
    slug: "nodejs",

    hero: {
      title: "Node.js Development",
      description:
        "We build fast, scalable, and event-driven backend systems using Node.js, designed for real-time applications, APIs, and high-concurrency workloads.",
      stats: [
        { label: "Node.js Projects Delivered", value: "90+" },
        { label: "Years with Node.js", value: "7+" },
        { label: "APIs & Services Built", value: "120+" },
        { label: "High-Availability Systems", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Node.js Expertise",
      heading: "What We Build with Node.js",
      subheading:
        "From real-time applications to scalable backend platforms, we use Node.js to deliver efficient, non-blocking systems that handle growth with ease.",
    },

    expertiseImage: {
      src: "/images/tech/nodejs.svg",
      alt: "Node.js runtime",
    },

    expertise: [
      {
        chip: "APIs",
        title: "Scalable API Development",
        description:
          "Design and build high-performance REST and GraphQL APIs using Node.js, optimized for scalability and clean data flow.",
      },
      {
        chip: "Real-Time",
        title: "Real-Time Applications",
        description:
          "Develop real-time systems such as chat platforms, live dashboards, and notification services using event-driven architectures.",
      },
      {
        chip: "Microservices",
        title: "Microservices Architecture",
        description:
          "Build modular microservices with Node.js that enable independent scaling, faster deployments, and flexible system evolution.",
      },
      {
        chip: "Backend",
        title: "Backend for Web & Mobile Apps",
        description:
          "Reliable backend services that power web and mobile applications with authentication, business logic, and data processing.",
      },
      {
        chip: "Performance",
        title: "High-Concurrency Systems",
        description:
          "Efficient handling of concurrent requests using non-blocking I/O, making Node.js ideal for high-traffic applications.",
      },
      {
        chip: "Integration",
        title: "Third-Party & System Integrations",
        description:
          "Seamless integration with databases, payment gateways, cloud services, and external APIs.",
      },
    ],

    faq: {
      items: [
        {
          title: "What makes Node.js suitable for backend development?",
          content:
            "Node.js uses an event-driven, non-blocking architecture that allows it to handle large numbers of concurrent requests efficiently, making it ideal for scalable backend systems.",
        },
        {
          title: "Is Node.js a good choice for enterprise applications?",
          content:
            "Yes. When designed with proper architecture, Node.js is widely used in enterprise environments for APIs, microservices, and real-time platforms.",
        },
        {
          title: "Can Node.js handle high-traffic applications?",
          content:
            "Absolutely. Node.js is well suited for high-traffic and real-time applications due to its lightweight runtime and asynchronous processing model.",
        },
        {
          title: "Do you work with existing Node.js projects?",
          content:
            "Yes. We can extend, refactor, optimize, or modernize existing Node.js applications while improving performance and maintainability.",
        },
      ],
    },
  },
  {
    slug: "azure",

    hero: {
      title: "Microsoft Azure Cloud Solutions",
      description:
        "We design, build, and manage secure, scalable, and cloud-native solutions on Microsoft Azure, helping businesses modernize infrastructure and operate with confidence.",
      stats: [
        { label: "Azure Projects Delivered", value: "70+" },
        { label: "Cloud Deployments Managed", value: "100+" },
        { label: "Enterprise Workloads Migrated", value: "50+" },
        { label: "Uptime & Reliability Focus", value: "99.9%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Azure Expertise",
      heading: "What We Build on Microsoft Azure",
      subheading:
        "From cloud infrastructure to application modernization, we use Azure to deliver secure, scalable, and resilient cloud solutions tailored to enterprise needs.",
    },

    expertiseImage: {
      src: "/images/tech/azure.svg",
      alt: "Microsoft Azure cloud platform",
    },

    expertise: [
      {
        chip: "Cloud Infra",
        title: "Cloud Infrastructure & Architecture",
        description:
          "Design and implement scalable Azure cloud architectures with high availability, fault tolerance, and cost efficiency.",
      },
      {
        chip: "App Hosting",
        title: "Application Hosting & Modernization",
        description:
          "Host and modernize web and backend applications on Azure using app services, containers, and cloud-native patterns.",
      },
      {
        chip: "Migration",
        title: "Cloud Migration Services",
        description:
          "Migrate on-premise or legacy systems to Azure with minimal downtime, improved performance, and enhanced security.",
      },
      {
        chip: "DevOps",
        title: "CI/CD & DevOps Automation",
        description:
          "Implement automated build, test, and deployment pipelines on Azure to accelerate releases and improve reliability.",
      },
      {
        chip: "Security",
        title: "Cloud Security & Compliance",
        description:
          "Secure Azure environments with identity management, access controls, monitoring, and compliance-ready configurations.",
      },
      {
        chip: "Data",
        title: "Data & Storage Solutions",
        description:
          "Scalable cloud storage, databases, and data services optimized for performance, availability, and growth.",
      },
    ],

    faq: {
      items: [
        {
          title: "Why choose Microsoft Azure for cloud solutions?",
          content:
            "Azure provides a robust, enterprise-grade cloud platform with strong security, global scalability, and seamless integration with modern applications and enterprise systems.",
        },
        {
          title: "Can you migrate existing systems to Azure?",
          content:
            "Yes. We help migrate applications, databases, and infrastructure to Azure while minimizing downtime and ensuring data integrity.",
        },
        {
          title: "Is Azure suitable for enterprise workloads?",
          content:
            "Absolutely. Azure is widely used for enterprise workloads due to its reliability, compliance support, and ability to scale complex systems.",
        },
        {
          title: "Do you provide ongoing Azure management?",
          content:
            "Yes. We offer monitoring, optimization, security updates, and ongoing support to ensure your Azure environment runs smoothly.",
        },
      ],
    },
  },
  {
    slug: "aws",

    hero: {
      title: "Amazon Web Services (AWS) Solutions",
      description:
        "We design and manage scalable, secure, and highly available cloud solutions on AWS, enabling businesses to build resilient systems and scale with confidence.",
      stats: [
        { label: "AWS Projects Delivered", value: "75+" },
        { label: "Cloud Environments Managed", value: "120+" },
        { label: "High-Traffic Systems Deployed", value: "60+" },
        { label: "Infrastructure Reliability Focus", value: "99.9%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "AWS Expertise",
      heading: "What We Build on AWS",
      subheading:
        "From cloud infrastructure to modern application platforms, we use AWS to deliver flexible, secure, and cost-efficient cloud solutions for growing businesses and enterprises.",
    },

    expertiseImage: {
      src: "/images/tech/aws.svg",
      alt: "Amazon Web Services cloud platform",
    },

    expertise: [
      {
        chip: "Infrastructure",
        title: "Scalable Cloud Infrastructure",
        description:
          "Design and deploy AWS infrastructure with high availability, fault tolerance, and on-demand scalability.",
      },
      {
        chip: "Compute",
        title: "Application & Compute Services",
        description:
          "Run web applications and backend systems efficiently using AWS compute services optimized for performance and cost.",
      },
      {
        chip: "Serverless",
        title: "Serverless & Event-Driven Systems",
        description:
          "Build event-driven architectures using serverless services to reduce operational overhead and improve scalability.",
      },
      {
        chip: "Migration",
        title: "Cloud Migration & Modernization",
        description:
          "Migrate legacy systems and on-premise workloads to AWS while improving reliability and reducing infrastructure complexity.",
      },
      {
        chip: "Security",
        title: "Cloud Security & Governance",
        description:
          "Implement secure AWS environments with access controls, monitoring, and best-practice security configurations.",
      },
      {
        chip: "DevOps",
        title: "DevOps & Infrastructure Automation",
        description:
          "Automate deployments and infrastructure management using AWS-native tools and modern DevOps practices.",
      },
    ],

    faq: {
      items: [
        {
          title: "Why choose AWS for cloud infrastructure?",
          content:
            "AWS offers a highly flexible and scalable cloud platform with a wide range of services, global availability, and strong security capabilities.",
        },
        {
          title: "Is AWS suitable for large-scale applications?",
          content:
            "Yes. AWS is widely used to run large-scale and high-traffic applications due to its reliability and elastic infrastructure.",
        },
        {
          title: "Can you migrate existing systems to AWS?",
          content:
            "Yes. We help migrate applications, data, and infrastructure to AWS with minimal downtime and improved performance.",
        },
        {
          title: "Do you provide ongoing AWS support and optimization?",
          content:
            "Yes. We offer continuous monitoring, cost optimization, security updates, and operational support for AWS environments.",
        },
      ],
    },
  },
  {
    slug: "mysql",

    hero: {
      title: "My SQL Database Solutions",
      description:
        "We design and manage reliable, high-performance MySQL databases that power web applications, SaaS platforms, and data-driven systems with consistency and speed.",
      stats: [
        { label: "MySQL Databases Delivered", value: "90+" },
        { label: "Years with MySQL", value: "7+" },
        { label: "High-Traffic Systems Supported", value: "60+" },
        { label: "Data Reliability Focus", value: "99.9%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Database Expertise",
      heading: "What We Build with MySQL & SQL Server",
      subheading:
        "From high-traffic application databases to enterprise-grade data systems, we work with MySQL and SQL Server to deliver reliable, secure, and scalable database solutions tailored to business needs.",
    },


    expertiseImage: {
      src: "/images/tech/mysql.svg",
      alt: "MySQL database",
    },

    expertise: [
      {
        chip: "Database Design",
        title: "Relational Database Architecture",
        description:
          "Design normalized and optimized MySQL schemas that ensure data consistency, integrity, and long-term scalability.",
      },
      {
        chip: "Performance",
        title: "Query & Performance Optimization",
        description:
          "Improve database performance through indexing strategies, query optimization, and efficient data modeling.",
      },
      {
        chip: "SQL Server",
        title: "Enterprise Database Systems",
        description:
          "Design and manage SQL Server databases built for enterprise applications that require strong data integrity, reliability, and governance.",
      },
      {
        chip: "Scalability",
        title: "Scalable Application Databases",
        description:
          "Build MySQL databases capable of supporting growing workloads, high read/write traffic, and distributed systems.",
      },
      {
        chip: "Integration",
        title: "Backend & API Integration",
        description:
          "Seamless integration of MySQL with backend services, APIs, and application layers for reliable data access.",
      },
      {
        chip: "Migration",
        title: "Database Migration & Upgrades",
        description:
          "Migrate existing databases to MySQL or upgrade legacy versions with minimal downtime and data risk.",
      },
      {
        chip: "Maintenance",
        title: "Monitoring & Maintenance",
        description:
          "Ongoing database monitoring, backups, and optimization to ensure performance, security, and reliability.",
      },
      {
        chip: "SQL Server",
        title: "Secure Data Management",
        description:
          "Implement role-based access control, encryption, and auditing features to protect sensitive business data and meet compliance needs.",
      },
    ],


    faq: {
      items: [
        {
          title: "When should I choose MySQL?",
          content:
            "MySQL is a strong choice for web applications, SaaS platforms, and data-driven systems that require reliability, performance, and cost-effective scalability.",
        },
        {
          title: "Do you migrate existing databases to MySQL?",
          content:
            "Yes. We handle database migrations carefully to preserve data integrity, minimize downtime, and ensure a smooth transition from legacy systems.",
        },

        {
          title: "Choosing Between MySQL and SQL Server",
          content:
            "MySQL is well suited for web and SaaS applications that prioritize flexibility and cost efficiency, while SQL Server is typically preferred for enterprise systems that require advanced security, governance, and deep integration with Microsoft technologies. We help evaluate both based on your business needs.",
        },

        {
          title: "When should I choose SQL Server instead of MySQL?",
          content:
            "SQL Server is often the better choice for enterprise applications that require strong security controls, compliance features, and close integration with .NET and other Microsoft-based systems.",
        },
        {
          title: "Can you modernize or upgrade existing SQL Server databases?",
          content:
            "Absolutely. We modernize SQL Server environments by upgrading versions, improving performance, strengthening security, and aligning databases with modern application architectures.",
        },
      ]
    },
  },
  {
    slug: "mongodb",

    hero: {
      title: "MongoDB Database Solutions",
      description:
        "We build flexible, scalable, and high-performance data solutions using MongoDB, ideal for modern applications that require speed, adaptability, and large-scale data handling.",
      stats: [
        { label: "MongoDB Projects Delivered", value: "65+" },
        { label: "Years with MongoDB", value: "6+" },
        { label: "High-Scale Applications Supported", value: "45+" },
        { label: "Schema Flexibility Advantage", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "MongoDB Expertise",
      heading: "What We Build with MongoDB",
      subheading:
        "From real-time applications to large-scale data platforms, we use MongoDB to deliver flexible, scalable, and performance-driven database solutions.",
    },

    expertiseImage: {
      src: "/images/tech/mongodb.svg",
      alt: "MongoDB NoSQL database",
    },

    expertise: [
      {
        chip: "NoSQL",
        title: "Document-Based Data Modeling",
        description:
          "Design flexible document schemas that adapt easily to changing application requirements without rigid table structures.",
      },
      {
        chip: "Scalability",
        title: "Horizontal Scalability & Sharding",
        description:
          "Build MongoDB databases that scale horizontally to support large datasets and growing traffic volumes.",
      },
      {
        chip: "Performance",
        title: "High-Performance Data Access",
        description:
          "Optimize queries, indexing strategies, and aggregation pipelines for fast data retrieval and processing.",
      },
      {
        chip: "Real-Time",
        title: "Real-Time & Event-Driven Applications",
        description:
          "Support real-time use cases such as analytics dashboards, activity feeds, and event-driven systems.",
      },
      {
        chip: "Integration",
        title: "Backend & API Integration",
        description:
          "Seamless integration with Node.js, APIs, and modern application stacks for efficient data flow.",
      },
      {
        chip: "Migration",
        title: "Data Migration & Optimization",
        description:
          "Migrate existing relational or NoSQL databases to MongoDB while improving structure, performance, and scalability.",
      },
    ],

    faq: {
      items: [
        {
          title: "When should I choose MongoDB?",
          content:
            "MongoDB is ideal for applications that require flexible data models, rapid development, and the ability to scale horizontally as data grows.",
        },
        {
          title: "Is MongoDB suitable for large-scale applications?",
          content:
            "Yes. MongoDB is widely used for large-scale and high-traffic applications due to its scalability and distributed architecture.",
        },
        {
          title: "How does MongoDB differ from relational databases?",
          content:
            "MongoDB stores data in flexible document formats rather than fixed tables, making it easier to adapt schemas and handle evolving data structures.",
        },
        {
          title: "Do you migrate existing systems to MongoDB?",
          content:
            "Yes. We handle MongoDB migrations carefully, ensuring data consistency, performance optimization, and minimal disruption.",
        },
      ],
    },
  },
  {
    slug: "blockchain",

    hero: {
      title: "Blockchain Technology Solutions",
      description:
        "We build secure, decentralized, and scalable blockchain solutions that enable trust, transparency, and automation across digital products and enterprise systems.",
      stats: [
        { label: "Blockchain Projects Delivered", value: "40+" },
        { label: "Smart Contracts Deployed", value: "70+" },
        { label: "Years in Blockchain Development", value: "4+" },
        { label: "Security-First Implementations", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Blockchain Expertise",
      heading: "What We Build with Blockchain Technology",
      subheading:
        "From smart contracts and decentralized applications to secure blockchain integrations, we help businesses adopt blockchain technology with confidence and clarity.",
    },

    expertiseImage: {
      src: "/images/tech/blockchain.svg",
      alt: "Blockchain technology",
    },

    expertise: [
      {
        chip: "Smart Contracts",
        title: "Solidity Smart Contract Development",
        description:
          "Design and develop secure, efficient smart contracts using Solidity to automate logic, enforce rules, and execute trustless transactions on blockchain networks.",
      },
      {
        chip: "DApps",
        title: "Decentralized Application Development",
        description:
          "Build end-to-end decentralized applications with blockchain-backed logic, intuitive user interfaces, and seamless wallet interactions.",
      },
      {
        chip: "Web3",
        title: "Web3 Integration & Connectivity",
        description:
          "Integrate blockchain functionality into web and backend systems using modern Web3 libraries and APIs for smooth on-chain interactions.",
      },
      {
        chip: "Tokens",
        title: "Token & Digital Asset Solutions",
        description:
          "Create and manage digital assets such as tokens and NFTs for payments, access control, governance, and digital ownership use cases.",
      },
      {
        chip: "Networks",
        title: "EVM-Compatible Blockchain Networks",
        description:
          "Deploy and manage solutions across Ethereum and other EVM-compatible networks with a focus on performance, cost efficiency, and scalability.",
      },
      {
        chip: "Security",
        title: "Blockchain Security & Optimization",
        description:
          "Review, test, and optimize smart contracts and blockchain logic to reduce vulnerabilities and ensure predictable, secure behavior.",
      },
    ],

    faq: {
      items: [
        {
          title: "What problems does blockchain technology solve?",
          content:
            "Blockchain enables trustless systems by providing transparency, immutability, and decentralized control, making it ideal for use cases such as digital identity, asset management, and secure transactions.",
        },
        {
          title: "Is blockchain suitable for enterprise applications?",
          content:
            "Yes. When designed correctly, blockchain can support enterprise use cases that require data integrity, traceability, and controlled access across multiple parties.",
        },
        {
          title: "Do you build smart contracts using Solidity?",
          content:
            "Yes. Solidity is our primary language for building smart contracts on Ethereum and other EVM-compatible blockchain networks.",
        },
        {
          title: "Can blockchain solutions integrate with existing systems?",
          content:
            "Absolutely. We integrate blockchain components with existing web applications, backend services, and enterprise systems to ensure smooth adoption.",
        },
        {
          title: "How do you ensure blockchain security?",
          content:
            "We follow security-first development practices including testing, code reviews, optimization, and controlled deployment strategies.",
        },
      ],
    },
  },
  {
    slug: "solidity",

    hero: {
      title: "Solidity Programming Language",
      description:
        "Solidity is a smart contract programming language used to build decentralized logic on blockchain networks, enabling trustless execution, automation, and on-chain data handling.",
      stats: [
        { label: "Smart Contracts Built", value: "60+" },
        { label: "Years Using Solidity", value: "4+" },
        { label: "EVM Networks Deployed On", value: "8+" },
        { label: "Security-Focused Implementations", value: "100%" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Solidity Overview",
      heading: "What Can Be Built with Solidity",
      subheading:
        "Solidity enables the creation of programmable smart contracts that run on blockchain networks, supporting decentralized applications, token systems, and automated on-chain logic.",
    },

    expertiseImage: {
      src: "/images/tech/solidity.svg",
      alt: "Solidity programming language",
    },

    expertise: [
      {
        chip: "Smart Contracts",
        title: "On-Chain Business Logic",
        description:
          "Write deterministic smart contracts that execute predefined rules directly on the blockchain without relying on centralized servers.",
      },
      {
        chip: "Tokens",
        title: "Token Standards Implementation",
        description:
          "Develop fungible and non-fungible token contracts that support digital ownership, transfers, and on-chain permissions.",
      },
      {
        chip: "Automation",
        title: "Autonomous Contract Execution",
        description:
          "Enable automated workflows such as escrow, governance actions, and reward distribution through self-executing contracts.",
      },
      {
        chip: "Security",
        title: "Secure Contract Design",
        description:
          "Apply defensive coding patterns, validation checks, and gas-efficient logic to reduce vulnerabilities and unexpected behavior.",
      },
      {
        chip: "EVM",
        title: "EVM-Compatible Development",
        description:
          "Build Solidity contracts that run on Ethereum and other EVM-compatible blockchain networks with consistent behavior.",
      },
      {
        chip: "Integration",
        title: "DApp & Backend Integration",
        description:
          "Connect Solidity contracts with web applications and backend systems for complete decentralized application workflows.",
      },
    ],

    faq: {
      items: [
        {
          title: "What is Solidity used for?",
          content:
            "Solidity is used to write smart contracts that define and enforce rules on blockchain networks, enabling decentralized applications and on-chain automation.",
        },
        {
          title: "Which blockchains support Solidity?",
          content:
            "Solidity is supported on Ethereum and other EVM-compatible blockchain networks, allowing contracts to be deployed across multiple ecosystems.",
        },
        {
          title: "Is Solidity suitable for production applications?",
          content:
            "Yes. When written carefully and tested properly, Solidity contracts can power production-grade decentralized applications and systems.",
        },
        {
          title: "Can Solidity contracts interact with web applications?",
          content:
            "Yes. Solidity contracts can be accessed from web and backend applications using Web3 libraries to read data and trigger transactions.",
        },
      ],
    },
  },
  {
    slug: "ethereum",

    hero: {
      title: "Ethereum Blockchain Platform",
      description:
        "Ethereum is a decentralized blockchain platform that enables programmable smart contracts and decentralized applications to run without centralized control.",
      stats: [
        { label: "Ethereum-Based Projects", value: "45+" },
        { label: "Years Working with Ethereum", value: "4+" },
        { label: "Smart Contracts Deployed", value: "70+" },
        { label: "EVM-Compatible Networks Used", value: "10+" },
      ],
    },

    sectionHeading: {
      sectionLabel: "Ethereum Overview",
      heading: "What Can Be Built on Ethereum",
      subheading:
        "Ethereum provides a decentralized execution environment for smart contracts, enabling applications that require transparency, immutability, and trustless interaction.",
    },

    expertiseImage: {
      src: "/images/tech/ethereum.svg",
      alt: "Ethereum blockchain platform",
    },

    expertise: [
      {
        chip: "Blockchain",
        title: "Decentralized Application Platform",
        description:
          "Use Ethereum as a base layer for decentralized applications that operate without centralized servers or intermediaries.",
      },
      {
        chip: "Smart Contracts",
        title: "Smart Contract Execution",
        description:
          "Deploy and execute smart contracts on Ethereum using the EVM, ensuring predictable and transparent on-chain behavior.",
      },
      {
        chip: "EVM",
        title: "EVM-Based Network Compatibility",
        description:
          "Build applications that remain compatible across Ethereum and other EVM-based networks using common standards.",
      },
      {
        chip: "Tokens",
        title: "Digital Assets & Tokenization",
        description:
          "Support token-based systems for value transfer, access control, and on-chain ownership using standardized approaches.",
      },
      {
        chip: "Decentralization",
        title: "Trustless & Transparent Systems",
        description:
          "Enable systems where rules are enforced by code and consensus rather than centralized authorities.",
      },
      {
        chip: "Integration",
        title: "Web & Backend Connectivity",
        description:
          "Integrate Ethereum-based functionality with web applications and backend systems using Web3-compatible tooling.",
      },
    ],

    faq: {
      items: [
        {
          title: "What is Ethereum used for?",
          content:
            "Ethereum is used to run smart contracts and decentralized applications that require transparency, immutability, and decentralized execution.",
        },
        {
          title: "How is Ethereum different from Bitcoin?",
          content:
            "Ethereum is designed to support programmable smart contracts and applications, while Bitcoin primarily focuses on peer-to-peer digital currency.",
        },
        {
          title: "Is Ethereum suitable for real-world applications?",
          content:
            "Yes. Ethereum is widely used as a foundation for decentralized applications, digital assets, and blockchain-based systems.",
        },
        {
          title: "Can Ethereum integrate with web applications?",
          content:
            "Yes. Ethereum can be accessed from web and backend applications through Web3 libraries to read blockchain data and submit transactions.",
        },
      ],
    },
  }
];
