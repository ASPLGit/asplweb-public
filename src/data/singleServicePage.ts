import { Service } from "@/types/app";

export const services: Service[] = [
    {
        slug: "software-development",
        title: "Enterprise Software Development",
        description:
            "Scalable, secure, and high-performance software solutions tailored for modern businesses.",

        cta: {
            primary: {
                label: "Get a Quote",
                href: "/contact",
            }
        },

        section: {
            label: "Overview",
            heading: "Custom Software Built for Scale",
            subheading:
                "We design and develop robust software solutions that align with your business goals.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Modern Technology Stack",
                    description:
                        "We use up-to-date development frameworks, tools, and architectures to ensure your software is secure, performant, and future-ready from day one.",
                },
                {
                    id: "02",
                    title: "Business & Domain Understanding",
                    description:
                        "Before writing code, we invest time in understanding your business goals, workflows, and domain challenges to ensure the solution fits real-world needs.",
                },
                {
                    id: "03",
                    title: "Scalable Architecture",
                    description:
                        "Our development approach focuses on clean code, modular design, and scalable architecture that supports growth without technical debt.",
                },
                {
                    id: "04",
                    title: "Transparent Execution",
                    description:
                        "We follow clear development processes with regular updates, milestones, and collaboration — keeping you informed and involved at every stage.",
                },
                {
                    id: "05",
                    title: "Quality-Driven Delivery",
                    description:
                        "Quality is built into our workflow through reviews, testing, and best practices, ensuring stable and maintainable software delivery.",
                },
                {
                    id: "06",
                    title: "Long-Term Partnership",
                    description:
                        "We don’t stop at delivery. Our team supports, maintains, and evolves your software as your business grows and requirements change.",
                },
            ],
        },

        stats: [
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "45+", label: "Client Satisfaction" },
            { value: "95%", label: "Performance Optimization Rate" }
        ],
        TechnologySection: {
            items: [
                { logo: "/images/tech/dotnet.svg", name: ".NET" },
                { logo: "/images/tech/nodejs.svg", name: "Node.js" },
                { logo: "/images/tech/java.svg", name: "Java" },
                { logo: "/images/tech/nextjs.svg", name: "Next.js" },
                { logo: "/images/tech/react.svg", name: "React" },
                { logo: "/images/tech/tailwind.svg", name: "Tailwind CSS" },
                { logo: "/images/tech/javascript.svg", name: "JavaScript" },
                { logo: "/images/tech/vue.svg", name: "Vue.js" },
                { logo: "/images/tech/mongodb.svg", name: "MongoDB" },
                { logo: "/images/tech/mysql.svg", name: "MySQL" },
                { logo: "/images/tech/angular.svg", name: "Angular" },
                { logo: "/images/tech/typescript.svg", name: "TypeScript" },
                { logo: "/images/tech/sql-server.svg", name: "SQL Server" },
                { logo: "/images/tech/docker.svg", name: "Docker" },
                { logo: "/images/tech/aws.svg", name: "Amazon Web Services" },
                { logo: "/images/tech/postgresql.svg", name: "PostgreSQL" },
            ],

        },
        faq: {
            items: [
                {
                    title: "What type of software do you develop?",
                    content:
                        "We build custom software including enterprise systems, SaaS platforms, APIs, and modern web applications.",
                },
                {
                    title: "Can you scale existing software?",
                    content:
                        "Yes, we optimize and scale existing software for performance, security, and long-term growth.",
                },
                {
                    title: "Do you provide post-launch support?",
                    content:
                        "Absolutely. We offer ongoing maintenance, updates, and performance optimization.",
                },
            ],
        }
    },
    {
        slug: "mobile-development",
        title: "Mobile App Development",
        description:
            "High-quality iOS and Android applications designed for performance and scalability.",

        cta: {
            primary: {
                label: "Start Your App",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Mobile Apps That Scale",
            subheading:
                "We build fast, reliable, and scalable mobile applications.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Native & Cross-Platform",
                    description:
                        "Optimized apps for iOS, Android, and cross-platform needs.",
                },
                {
                    id: "02",
                    title: "Performance Optimized",
                    description:
                        "Fast load times and smooth user experiences.",
                },
                {
                    id: "03",
                    title: "Secure by Design",
                    description:
                        "Built with security best practices from day one.",
                },
                {
                    id: "04",
                    title: "User-Centered Design",
                    description:
                        "Intuitive interfaces focused on usability.",
                },
                {
                    id: "05",
                    title: "Scalable Backend",
                    description:
                        "APIs and systems that scale with your users.",
                },
                {
                    id: "06",
                    title: "Maintenance & Support",
                    description:
                        "Continuous updates and long-term support.",
                },
            ],
        },
        TechnologySection: {
            items: [
                { logo: "/images/tech/react-native.svg", name: "React Native" },
                { logo: "/images/tech/android.svg", name: "Android" },
                { logo: "/images/tech/nodejs.svg", name: "Node.js" },
                { logo: "/images/tech/tailwind.svg", name: "Tailwind CSS" },
                { logo: "/images/tech/javascript.svg", name: "JavaScript" },
                { logo: "/images/tech/nextjs.svg", name: "Next.js" },
                { logo: "/images/tech/vue.svg", name: "Vue.js" },
                { logo: "/images/tech/mongodb.svg", name: "MongoDB" },
                { logo: "/images/tech/firebase.svg", name: "Firebase" },
                { logo: "/images/tech/typescript.svg", name: "TypeScript" },
                { logo: "/images/tech/aws.svg", name: "Amazon Web Services" },
            ],

        },
        faq: {
            items: [
                {
                    title: "Do you develop iOS and Android apps?",
                    content:
                        "Yes, we build native and cross-platform apps for both iOS and Android.",
                },
                {
                    title: "Do you offer app maintenance?",
                    content:
                        "We provide long-term maintenance, updates, and feature enhancements.",
                },
            ],
        }
    },
    {
        slug: "web-development",
        title: "Website Development",
        description:
            "Modern, responsive, and high-performing websites built to deliver exceptional user experiences and business results.",

        cta: {
            primary: {
                label: "Build Your Website",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Web Experiences That Convert",
            subheading:
                "We design and develop fast, responsive, and visually engaging websites that represent your brand and drive measurable results.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Responsive Design",
                    description:
                        "Websites optimized for all devices, screen sizes, and platforms.",
                },
                {
                    id: "02",
                    title: "Frontend Excellence",
                    description:
                        "Modern UI development using scalable and performance-focused frameworks.",
                },
                {
                    id: "03",
                    title: "Backend Development",
                    description:
                        "Robust server-side systems ensuring speed, security, and reliability.",
                },
                {
                    id: "04",
                    title: "SEO & Performance",
                    description:
                        "Optimized loading speeds and SEO-friendly architecture.",
                },
                {
                    id: "05",
                    title: "CMS Solutions",
                    description:
                        "Flexible content management for easy updates and scalability.",
                },
                {
                    id: "06",
                    title: "Ongoing Support",
                    description:
                        "Continuous improvements, monitoring, and maintenance.",
                },
            ],
        },

        stats: [
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Web Projects" },
            { value: "98%", label: "Client Retention" },
            { value: "95%", label: "Performance Optimization Rate" }
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/react.svg", name: "React" },
                { logo: "/images/tech/nodejs.svg", name: "Node.js" },
                { logo: "/images/tech/nextjs.svg", name: "Next.js" },
                { logo: "/images/tech/tailwind.svg", name: "Tailwind CSS" },
                { logo: "/images/tech/javascript.svg", name: "JavaScript" },
                { logo: "/images/tech/vue.svg", name: "Vue.js" },
                { logo: "/images/tech/mongodb.svg", name: "MongoDB" },
                { logo: "/images/tech/mysql.svg", name: "MySQL" },
                { logo: "/images/tech/angular.svg", name: "Angular" },
                { logo: "/images/tech/dotnet.svg", name: ".NET" },
                { logo: "/images/tech/typescript.svg", name: "TypeScript" },
                { logo: "/images/tech/python.svg", name: "Python" },
            ],

        },
        faq: {
            items: [
                {
                    title: "Do you build responsive websites?",
                    content:
                        "Yes, all our websites are mobile-first, responsive, and optimized for all screen sizes.",
                },
                {
                    title: "Can you redesign an existing website?",
                    content:
                        "We modernize existing websites with improved UI/UX, performance, and SEO best practices.",
                },
            ],
        }
    },
    {
        slug: "cloud-solutions",
        title: "Microsoft & Cloud Solutions",
        description:
            "Modern, secure, and performance-driven cloud ecosystems built to scale your business operations with confidence.",

        cta: {
            primary: {
                label: "Move to Cloud",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Cloud Infrastructure Engineered for Performance & Scale",
            subheading:
                "From migration to optimization, we design resilient cloud environments that improve agility, strengthen security, and reduce operational complexity.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Cloud Strategy & Consulting",
                    description:
                        "Strategic cloud adoption planning aligned with your business objectives, compliance needs, and long-term growth roadmap.",
                },
                {
                    id: "02",
                    title: "Cloud Migration & Modernization",
                    description:
                        "End-to-end migration of legacy systems, applications, and databases with minimal disruption and optimized cloud architecture.",
                },
                {
                    id: "03",
                    title: "Microsoft Azure Solutions",
                    description:
                        "Design and deployment of scalable Azure environments including compute, storage, networking, identity, and DevOps services.",
                },
                {
                    id: "04",
                    title: "AWS Cloud Services",
                    description:
                        "Reliable and high-availability infrastructure built on AWS using EC2, Lambda, RDS, S3, and container-based deployments.",
                },
                {
                    id: "05",
                    title: "Google Cloud Platform (GCP)",
                    description:
                        "Cloud-native solutions powered by GCP including Kubernetes, BigQuery, AI services, and scalable data pipelines.",
                },
                {
                    id: "06",
                    title: "Cloud Security & Compliance",
                    description:
                        "Multi-layered security architecture, identity management, data encryption, and regulatory compliance implementation.",
                },
                {
                    id: "07",
                    title: "DevOps & CI/CD Automation",
                    description:
                        "Automated deployment pipelines, container orchestration, infrastructure as code, and monitoring for faster releases.",
                },
                {
                    id: "08",
                    title: "Cloud Infrastructure Architecture",
                    description:
                        "High-performance cloud networks, load balancing, failover systems, and disaster recovery planning.",
                },
                {
                    id: "09",
                    title: "Cost Optimization & FinOps",
                    description:
                        "Cloud usage analysis, resource right-sizing, reserved instances planning, and cost governance strategies.",
                },
                {
                    id: "10",
                    title: "Managed Cloud Operations",
                    description:
                        "24/7 monitoring, proactive performance tuning, system updates, and long-term cloud maintenance support.",
                },
            ],
        },
        TechnologySection: {
            items: [
                { logo: "/images/tech/azure.svg", name: "Microsoft Azure" },
                { logo: "/images/tech/aws.svg", name: "Amazon Web Services" },
                { logo: "/images/tech/google-cloud.svg", name: "Google Cloud Platform" },
                { logo: "/images/tech/docker.svg", name: "Docker" },
                { logo: "/images/tech/kubernetes.svg", name: "Kubernetes" },
                { logo: "/images/tech/terraform.svg", name: "Terraform" },
                { logo: "/images/tech/sql-server.svg", name: "SQL Server" },
                { logo: "/images/tech/mysql.svg", name: "MySQL" },
                { logo: "/images/tech/linux.svg", name: "Linux" },
            ],
        },

        faq: {
            items: [
                {
                    title: "Which cloud platforms do you support?",
                    content:
                        "We work with Microsoft Azure, AWS, and Google Cloud Platform, selecting the right ecosystem based on your scalability, compliance, and performance requirements.",
                },
                {
                    title: "Can you migrate legacy or on-premise systems?",
                    content:
                        "Yes. We handle full-scale cloud migrations, including application refactoring, database transfer, and infrastructure redesign with minimal downtime.",
                },
                {
                    title: "Do you provide ongoing cloud management?",
                    content:
                        "We offer managed cloud services including monitoring, security updates, optimization, and continuous performance improvements.",
                },
                {
                    title: "How do you ensure cloud security?",
                    content:
                        "We implement multi-layer security frameworks including IAM, encryption, network segmentation, threat monitoring, and compliance alignment.",
                },
            ],
        },
    },
    {
        slug: "devops",
        title: "DevOps & Cloud Automation",
        description:
            "Accelerate development and improve reliability through modern DevOps practices and automation.",

        cta: {
            primary: {
                label: "Optimize Delivery",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Automated, Reliable & Scalable Delivery",
            subheading:
                "We implement DevOps pipelines that streamline deployments, reduce downtime, and improve system reliability.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "CI/CD Pipelines",
                    description:
                        "Automated build, test, and deployment workflows.",
                },
                {
                    id: "02",
                    title: "Infrastructure as Code",
                    description:
                        "Version-controlled infrastructure provisioning.",
                },
                {
                    id: "03",
                    title: "Cloud Automation",
                    description:
                        "Automated scaling and resource management.",
                },
                {
                    id: "04",
                    title: "Monitoring & Logging",
                    description:
                        "Real-time visibility into system performance.",
                },
                {
                    id: "05",
                    title: "Release Management",
                    description:
                        "Reliable and repeatable release processes.",
                },
                {
                    id: "06",
                    title: "Security Integration",
                    description:
                        "Security embedded throughout the pipeline.",
                },
            ],
        },

        stats: [
            { value: "70%", label: "Faster Deployments" },
            { value: "99.9%", label: "System Stability" },
            { value: "50%", label: "Cost Reduction" },
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/docker.svg", name: "Docker" },
                { logo: "/images/tech/mysql.svg", name: "MySQL" },
                { logo: "/images/tech/azure.svg", name: "Microsoft Azure" },
                { logo: "/images/tech/github.svg", name: "GitHub" },
                { logo: "/images/tech/aws.svg", name: "Amazon Web Services" },
                { logo: "/images/tech/jenkins.svg", name: "Jenkins" },
                { logo: "/images/tech/dotnet.svg", name: ".NET" },
                { logo: "/images/tech/kubernetes.svg", name: "Kubernetes" },
                { logo: "/images/tech/sql-server.svg", name: "SQL Server" },
            ],

        },
        faq: {
            items: [
                {
                    title: "What DevOps services do you provide?",
                    content:
                        "We implement CI/CD pipelines, infrastructure automation, monitoring, release management, and cloud optimization.",
                },
                {
                    title: "Can DevOps improve deployment speed?",
                    content:
                        "Yes. DevOps practices significantly reduce deployment time while improving reliability and scalability.",
                },
                {
                    title: "Do you support existing DevOps setups?",
                    content:
                        "We can optimize, automate, or fully redesign your current DevOps infrastructure.",
                },
            ],
        }
    },
    {
        slug: "blockchain",
        title: "Blockchain & Web3",
        description:
            "Decentralized solutions leveraging blockchain technology for transparency, security, and trust.",

        cta: {
            primary: {
                label: "Build Web3 Solution",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Decentralized Solutions for the Future",
            subheading:
                "We build secure and scalable blockchain applications for Web3 ecosystems.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Smart Contracts",
                    description:
                        "Secure and audited smart contract development.",
                },
                {
                    id: "02",
                    title: "DApps",
                    description:
                        "Decentralized applications for real-world use cases.",
                },
                {
                    id: "03",
                    title: "NFT Platforms",
                    description:
                        "NFT marketplaces and tokenized assets.",
                },
                {
                    id: "04",
                    title: "Token Development",
                    description:
                        "Custom token creation and deployment.",
                },
                {
                    id: "05",
                    title: "Web3 Integration",
                    description:
                        "Wallets, APIs, and blockchain integrations.",
                },
                {
                    id: "06",
                    title: "Security Audits",
                    description:
                        "Smart contract testing and audits.",
                },
            ],
        },

        TechnologySection: {
            items: [
                { logo: "/images/tech/ethereum.svg", name: "Ethereum" },
                { logo: "/images/tech/solana.svg", name: "Solana" },
                { logo: "/images/tech/solidity.svg", name: "Solidity" },
                { logo: "/images/tech/tron.webp", name: "Tron" },
                { logo: "/images/tech/ipfs.svg", name: "IPFS" },
                { logo: "/images/tech/nodejs.svg", name: "Node.js" },
                { logo: "/images/tech/nextjs.svg", name: "Next.js" },
                { logo: "/images/tech/tailwind.svg", name: "Tailwind CSS" },
                { logo: "/images/tech/javascript.svg", name: "JavaScript" },
                { logo: "/images/tech/vue.svg", name: "Vue.js" },
                { logo: "/images/tech/mongodb.svg", name: "MongoDB" },
                { logo: "/images/tech/mysql.svg", name: "MySQL" },
                { logo: "/images/tech/react.svg", name: "React" },
                { logo: "/images/tech/typescript.svg", name: "TypeScript" },
            ],

        },
        faq: {
            items: [
                {
                    title: "What blockchain solutions do you build?",
                    content:
                        "We develop smart contracts, decentralized applications (DApps), NFT platforms, token systems, and Web3 integrations tailored to business needs.",
                },
                {
                    title: "Which blockchain networks do you support?",
                    content:
                        "We work with Ethereum, Polygon, BNB Chain, and other leading blockchain networks based on project requirements.",
                },
                {
                    title: "Is blockchain suitable for my business?",
                    content:
                        "Yes. We help evaluate use cases and implement blockchain where transparency, security, and decentralization add real value.",
                },
            ],
        }
    },
    {
        slug: "ai-ml",
        title: "AI & Machine Learning",
        description:
            "Practical AI systems designed to improve decision-making, automate workflows, and turn business data into measurable value.",

        cta: {
            primary: {
                label: "Discuss Your AI Initiative",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Intelligent Digital Solutions Powered by AI",
            subheading:
                "We develop AI-enabled web platforms, mobile apps, and enterprise systems that transform data into actionable intelligence. Our solutions combine machine learning, automation, and advanced analytics to enhance performance, efficiency, and customer experience.",
        },


        featureSection: {
            items: [
                {
                    id: "01",
                    title: "AI Consulting & Strategy",
                    description:
                        "We help you define a clear AI adoption strategy aligned with your business objectives. From identifying high-impact use cases to planning scalable implementation, we ensure your AI investments deliver measurable results.",
                },
                {
                    id: "02",
                    title: "Machine Learning Solutions",
                    description:
                        "Design and deploy machine learning systems that transform raw data into actionable insights. We build predictive, classification, and recommendation models tailored to real-world business environments.",
                },
                {
                    id: "03",
                    title: "Generative AI Applications",
                    description:
                        "Develop intelligent applications powered by large language models and generative AI. From AI chatbots to content automation systems, we create secure and scalable generative experiences.",
                },
                {
                    id: "04",
                    title: "AI-Powered Software Development",
                    description:
                        "Integrate AI capabilities directly into web and enterprise software. Whether it’s smart dashboards, automated workflows, or predictive analytics, we embed intelligence into your digital platforms.",
                },
                {
                    id: "05",
                    title: "AI MVP Development",
                    description:
                        "Rapidly design and launch AI-driven MVPs to validate your product idea in the real market. We focus on core intelligent features, fast iteration cycles, and measurable user feedback to reduce risk and accelerate product-market fit.",
                },
                {
                    id: "06",
                    title: "AI Mobile App Development",
                    description:
                        "Build mobile applications enhanced with AI features such as real-time recommendations, image recognition, voice interaction, and personalized user experiences.",
                },
                {
                    id: "07",
                    title: "Data Engineering for AI Systems",
                    description:
                        "Establish reliable data pipelines, storage systems, and processing frameworks that power high-performance AI models with clean, structured, and scalable data infrastructure.",
                },
            ],
        },
        TechnologySection: {
            items: [
                { logo: "/images/tech/python.svg", name: "Python" },
                { logo: "/images/tech/pytorch.svg", name: "PyTorch" },
                { logo: "/images/tech/tensorflow.svg", name: "TensorFlow" },
                { logo: "/images/tech/openai.svg", name: "OpenAI" },
                { logo: "/images/tech/grok.svg", name: "Grok" },
                { logo: "/images/tech/docker.svg", name: "Docker" },
                { logo: "/images/tech/hugging-face.svg", name: "HuggingFace" },
                { logo: "/images/tech/aws.svg", name: "AWS AI Services" },
                { logo: "/images/tech/pandas.svg", name: "Pandas & Data Tools" },
                { logo: "/images/tech/azure.svg", name: "Azure Machine Learning" },
            ],
        },

        faq: {
            items: [
                {
                    title: "What types of AI and machine learning solutions do you deliver?",
                    content:
                        "We design and deploy production-ready AI systems including predictive analytics engines, recommendation systems, intelligent automation workflows, computer vision solutions, and LLM-powered applications. Every solution is engineered around measurable business objectives — not proof-of-concept experiments.",
                },
                {
                    title: "Can AI be embedded into our existing web, mobile, or enterprise software?",
                    content:
                        "Absolutely. We specialize in integrating AI capabilities directly into existing platforms, whether it’s a SaaS product, internal enterprise system, or mobile application. Our approach ensures seamless deployment without disrupting your current architecture or operations.",
                },
                {
                    title: "How do you ensure data security and regulatory compliance?",
                    content:
                        "We implement secure development environments, role-based access controls, encrypted data pipelines, and compliance-aligned governance practices. From data collection to model deployment, security and privacy are embedded into every stage of the AI lifecycle.",
                },
                {
                    title: "What happens after the AI system goes live?",
                    content:
                        "AI models evolve alongside your data. We provide continuous monitoring, performance evaluation, retraining pipelines, and optimization strategies to prevent model drift and maintain long-term accuracy, reliability, and business value.",
                },
                {
                    title: "How long does it take to build an AI solution?",
                    content:
                        "Timelines depend on complexity, data readiness, and integration scope. MVP-level AI solutions can be delivered in weeks, while enterprise-grade systems may require phased development. We define a clear roadmap upfront to balance speed, scalability, and performance.",
                },
            ],
        },
    },
    {
        slug: "cybersecurity",
        title: "Cybersecurity Solutions",
        description:
            "Comprehensive security solutions to protect systems, data, and digital assets.",

        cta: {
            primary: {
                label: "Secure Your Systems",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Security Built Into Every Layer",
            subheading:
                "We protect your digital infrastructure with proactive and robust security strategies.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Application Security",
                    description:
                        "Securing applications against modern threats.",
                },
                {
                    id: "02",
                    title: "Network Security",
                    description:
                        "Protection against network vulnerabilities.",
                },
                {
                    id: "03",
                    title: "Vulnerability Testing",
                    description:
                        "Identifying and fixing security gaps.",
                },
                {
                    id: "04",
                    title: "Risk Management",
                    description:
                        "Proactive risk assessment and mitigation.",
                },
                {
                    id: "05",
                    title: "Compliance",
                    description:
                        "Meeting regulatory and compliance standards.",
                },
                {
                    id: "06",
                    title: "Continuous Monitoring",
                    description:
                        "24/7 threat detection and response.",
                },
            ],
        },

        stats: [
            { value: "100%", label: "Threat Coverage" },
            { value: "0", label: "Breaches Reported" },
            { value: "100%", label: "Risk Management" },
            { value: "ISO", label: "Compliance Ready" },
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/docker.svg", name: "Docker" },
                { logo: "/images/tech/mysql.svg", name: "MySQL" },
                { logo: "/images/tech/azure.svg", name: "Microsoft Azure" },
                { logo: "/images/tech/github.svg", name: "GitHub" },
                { logo: "/images/tech/aws.svg", name: "Amazon Web Services" },
                { logo: "/images/tech/jenkins.svg", name: "Jenkins" },
                { logo: "/images/tech/dotnet.svg", name: ".NET" },
                { logo: "/images/tech/kubernetes.svg", name: "Kubernetes" },
                { logo: "/images/tech/sql-server.svg", name: "SQL Server" },
            ],

        },
        faq: {
            items: [
                {
                    title: "What cybersecurity services do you provide?",
                    content:
                        "We offer application security, network security, vulnerability assessments, risk management, and compliance solutions.",
                },
                {
                    title: "Can you secure existing applications?",
                    content:
                        "Yes. We audit, strengthen, and secure existing systems against modern security threats.",
                },
                {
                    title: "Do you help with compliance requirements?",
                    content:
                        "We assist with security best practices and compliance standards relevant to your industry.",
                },
            ],
        }
    },
    {
        slug: "salesforce",
        title: "Enterprise Salesforce Solutions",
        description:
            "We help organizations design, customize, and optimize Salesforce platforms to improve sales performance, customer engagement, and operational efficiency.",

        cta: {
            primary: {
                label: "Talk to a Salesforce Expert",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Salesforce Built Around Your Business",
            subheading:
                "From CRM customization to complex integrations, we deliver Salesforce solutions that align with your business goals and scale as you grow.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Salesforce Development & Customization",
                    description:
                        "Custom Salesforce applications, workflows, automations, and integrations designed to match your unique business processes.",
                },
                {
                    id: "02",
                    title: "Sales Cloud & Service Cloud",
                    description:
                        "Optimized sales and customer service operations using Salesforce Sales Cloud and Service Cloud to improve productivity and customer satisfaction.",
                },
                {
                    id: "03",
                    title: "Partner & Customer Communities",
                    description:
                        "Design and implementation of Salesforce Partner and Customer Communities to enable collaboration, self-service, and engagement.",
                },
                {
                    id: "04",
                    title: "Salesforce Platform Optimization",
                    description:
                        "Performance tuning, configuration optimization, data quality improvements, and workflow enhancements for scalable Salesforce platforms.",
                },
                {
                    id: "05",
                    title: "Conga Solutions Integration",
                    description:
                        "Implementation and integration of Conga Composer, Conga Sign, Conga CPQ, and Conga CLM to streamline documents, contracts, and quoting workflows.",
                },
                {
                    id: "06",
                    title: "CRM Data Migration to Salesforce",
                    description:
                        "Secure and seamless data migration from Dynamics CRM and other platforms to Salesforce with data integrity and minimal business disruption.",
                },
            ],
        },

        stats: [
            { value: "100%", label: "Salesforce-Centric Solutions" },
            { value: "10+", label: "CRM Projects Delivered" },
            { value: "95%", label: "Platform Optimization" },
            { value: "12+", label: "Conga Integration" },
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/salesforce.svg", name: "Salesforce" },
                { logo: "/images/tech/conga.png", name: "Conga" },
                { logo: "/images/tech/service-cloud.svg", name: "Salesforce Service Cloud" },
            ],

        },

        faq: {
            items: [
                {
                    title: "What Salesforce services do you offer?",
                    content:
                        "We provide Salesforce development and customization, Sales Cloud and Service Cloud implementation, community portals, platform optimization, Conga solutions integration, and CRM data migration.",
                },
                {
                    title: "Do you customize Salesforce for specific business needs?",
                    content:
                        "Yes. We design Salesforce solutions around your workflows, automation requirements, and integration needs rather than using one-size-fits-all configurations.",
                },
                {
                    title: "Can you migrate data from Dynamics CRM to Salesforce?",
                    content:
                        "Absolutely. We manage the complete migration process, including data mapping, validation, and secure transfer, while ensuring data accuracy and continuity.",
                },
                {
                    title: "Do you provide ongoing Salesforce support?",
                    content:
                        "Yes. We offer post-implementation support, optimization, and enhancements to ensure your Salesforce platform continues to perform as your business evolves.",
                },
            ],
        },
    },
    {
        slug: "qa-testing",
        title: "QA & Software Testing",
        description:
            "We ensure software quality, performance, and reliability through comprehensive testing strategies that reduce risk and deliver confidence at scale.",

        cta: {
            primary: {
                label: "Talk to a QA Expert",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Quality Built Into Every Release",
            subheading:
                "From early-stage testing to post-release validation, we help you ship stable, secure, and high-performing software with confidence.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Manual & Exploratory Testing",
                    description:
                        "Thorough manual testing to validate real-world user flows, edge cases, and usability across devices and platforms.",
                },
                {
                    id: "02",
                    title: "Automated Testing",
                    description:
                        "Automation frameworks for regression, smoke, and functional testing to improve test coverage and reduce release cycles.",
                },
                {
                    id: "03",
                    title: "Functional & Regression Testing",
                    description:
                        "Ensuring core features work as expected and existing functionality remains stable after updates or enhancements.",
                },
                {
                    id: "04",
                    title: "Performance & Load Testing",
                    description:
                        "Testing application performance under real-world load conditions to identify bottlenecks and scalability risks.",
                },
                {
                    id: "05",
                    title: "Security & Compliance Testing",
                    description:
                        "Identifying vulnerabilities, validating data protection, and ensuring compliance with security best practices.",
                },
                {
                    id: "06",
                    title: "QA Strategy & Consulting",
                    description:
                        "Defining test strategies, QA processes, and quality metrics aligned with your product roadmap and business goals.",
                },
            ],
        },

        stats: [
            { value: "99%", label: "Defect Detection Rate" },
            { value: "85%", label: "Automation Coverage" },
            { value: "100%", label: "CI/CD Pipeline Integration" },
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/selenium.svg", name: "Selenium" },
                { logo: "/images/tech/playwright.svg", name: "Playwright" },
                { logo: "/images/tech/python.svg", name: "Python" },
                { logo: "/images/tech/java.svg", name: "Java" },
                { logo: "/images/tech/jenkins.svg", name: "Jenkins" },
                { logo: "/images/tech/maven.svg", name: "Maven" },
                { logo: "/images/tech/postman.svg", name: "Postman" },
                { logo: "/images/tech/appium.svg", name: "Appium" },
                { logo: "/images/tech/github.svg", name: "GitHub" },
            ],
        },

        faq: {
            items: [
                {
                    title: "What types of testing do you provide?",
                    content:
                        "We offer manual testing, automated testing, functional and regression testing, performance and load testing, security testing, and QA consulting.",
                },
                {
                    title: "Can QA be integrated into our existing development process?",
                    content:
                        "Yes. We seamlessly integrate QA into your Agile or DevOps workflows to ensure continuous quality throughout the development lifecycle.",
                },
                {
                    title: "Do you support test automation for existing applications?",
                    content:
                        "Absolutely. We design and implement automation frameworks for existing products to improve efficiency and test coverage.",
                },
                {
                    title: "Do you provide ongoing QA support after release?",
                    content:
                        "Yes. We provide continuous testing, regression validation, and quality monitoring for long-term product stability.",
                },
            ],
        },
    }

];
