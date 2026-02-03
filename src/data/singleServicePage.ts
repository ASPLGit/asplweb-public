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
            { value: "99%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support & Monitoring" },
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

        stats: [
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support & Monitoring" },
        ],
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
            { value: "8+", label: "Years Experience" },
            { value: "120+", label: "Web Projects" },
            { value: "98%", label: "Client Retention" },
            { value: "24/7", label: "Support" },
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
        slug: "cloud-solutions",
        title: "Microsoft & Cloud Solutions",
        description:
            "Secure, scalable, and cost-efficient cloud solutions designed to modernize your infrastructure and operations.",

        cta: {
            primary: {
                label: "Move to Cloud",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Cloud Infrastructure Built for Growth",
            subheading:
                "We help businesses migrate, optimize, and manage cloud infrastructure with security and scalability at the core.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Cloud Migration",
                    description:
                        "Seamless transition from on-premise to cloud environments.",
                },
                {
                    id: "02",
                    title: "Azure Services",
                    description:
                        "Expert implementation of Microsoft Azure services.",
                },
                {
                    id: "03",
                    title: "Cloud Security",
                    description:
                        "Enterprise-grade security and compliance strategies.",
                },
                {
                    id: "04",
                    title: "Infrastructure Setup",
                    description:
                        "Reliable and scalable cloud infrastructure architecture.",
                },
                {
                    id: "05",
                    title: "Cost Optimization",
                    description:
                        "Optimized cloud usage to reduce operational costs.",
                },
                {
                    id: "06",
                    title: "Managed Cloud",
                    description:
                        "Ongoing monitoring, maintenance, and support.",
                },
            ],
        },

        stats: [
            { value: "100%", label: "Secure Deployments" },
            { value: "60%", label: "Cost Optimization" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Monitoring" },
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/docker.svg", name: "Docker" },
                { logo: "/images/tech/mysql.svg", name: "MySQL" },
                { logo: "/images/tech/azure.svg", name: "Microsoft Azure" },
                { logo: "/images/tech/dotnet.svg", name: ".NET" },
                { logo: "/images/tech/kubernetes.svg", name: "Kubernetes" },
                { logo: "/images/tech/sql-server.svg", name: "SQL Server" },
            ],

        },
        faq: {
            items: [
                {
                    title: "Which cloud platforms do you work with?",
                    content:
                        "We primarily work with Microsoft Azure along with other major cloud platforms to deliver scalable and secure cloud solutions.",
                },
                {
                    title: "Can you migrate existing systems to the cloud?",
                    content:
                        "Yes. We handle complete cloud migration, ensuring minimal downtime, data security, and optimized performance.",
                },
                {
                    title: "Do you offer managed cloud services?",
                    content:
                        "We provide ongoing cloud monitoring, optimization, security, and maintenance support.",
                },
            ],
        }
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
            { value: "24/7", label: "Monitoring" },
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

        stats: [
            { value: "100%", label: "On-Chain Security" },
            { value: "50+", label: "Smart Contracts" },
            { value: "0%", label: "Data Tampering" },
            { value: "24/7", label: "Network Availability" },
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/ethereum.svg", name: "Ethereum" },
                { logo: "/images/tech/solana.svg", name: "Solana" },
                { logo: "/images/tech/solidity.svg", name: "Solidity" },
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
            "Data-driven intelligence and automation to enhance decision-making and efficiency.",

        cta: {
            primary: {
                label: "Explore AI Solutions",
                href: "/contact",
            },
        },

        section: {
            label: "Overview",
            heading: "Intelligent Systems Powered by Data",
            subheading:
                "We build AI and machine learning solutions that deliver actionable insights and automation.",
        },

        featureSection: {
            items: [
                {
                    id: "01",
                    title: "Predictive Analytics",
                    description:
                        "Forecast trends using data-driven models.",
                },
                {
                    id: "02",
                    title: "AI Automation",
                    description:
                        "Process automation using AI-powered systems.",
                },
                {
                    id: "03",
                    title: "Machine Learning Models",
                    description:
                        "Custom ML models tailored to your data.",
                },
                {
                    id: "04",
                    title: "Business Intelligence",
                    description:
                        "Actionable insights from complex datasets.",
                },
                {
                    id: "05",
                    title: "Data Engineering",
                    description:
                        "Reliable data pipelines and processing.",
                },
                {
                    id: "06",
                    title: "Model Optimization",
                    description:
                        "Performance tuning and optimization.",
                },
            ],
        },

        stats: [
            { value: "5x", label: "Faster Insights" },
            { value: "90%", label: "Prediction Accuracy" },
            { value: "40%", label: "Efficiency Gain" },
            { value: "24/7", label: "AI Monitoring" },
        ],

        TechnologySection: {
            items: [
                { logo: "/images/tech/python.svg", name: "Python" },
                { logo: "/images/tech/pytorch.svg", name: "PyTorch" },
                { logo: "/images/tech/tensorflow.svg", name: "TensorFlow" },
                { logo: "/images/tech/python.svg", name: "Python" },
                { logo: "/images/tech/aws.svg", name: "Amazon Web Services" },
                { logo: "/images/tech/pandas.svg", name: "Pandas" },
            ],

        },
        faq: {
            items: [
                {
                    title: "What AI solutions do you offer?",
                    content:
                        "We build AI-powered systems including predictive analytics, automation tools, data-driven insights, and machine learning models.",
                },
                {
                    title: "Can AI be integrated into existing systems?",
                    content:
                        "Yes. We integrate AI and ML capabilities into existing platforms to enhance efficiency and decision-making.",
                },
                {
                    title: "Do you work with business data securely?",
                    content:
                        "Absolutely. Data privacy and security are integral to all our AI and ML implementations.",
                },
            ],
        }
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
            { value: "24/7", label: "Monitoring" },
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
            { value: "24/7", label: "Support & Optimization" },
            { value: "0", label: "Data Loss in Migration" },
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
    }
];
