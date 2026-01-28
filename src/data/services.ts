import { Service } from "@/types/service";

export const services: Service[] = [
    {
        slug: "software-development",
        title: "Software Development",
        description:
            "Scalable, secure, and high-performance software solutions tailored for modern businesses.",

        cta: {
            primary: {
                label: "Get a Quote",
                href: "/contact",
            },
            secondary: {
                label: "View Case Studies",
                href: "/case-studies",
            },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
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
                { logo: "/images/tech/react-native.svg" },
                { logo: "/images/tech/nodejs.svg" },
                { logo: "/images/tech/nextjs.svg" },
                { logo: "/images/tech/tailwind.svg" },
                { logo: "/images/tech/javascript.svg" },
                { logo: "/images/tech/vue.svg" },

                { logo: "/images/tech/mongodb.svg" },
                { logo: "/images/tech/mysql.svg" },
                { logo: "/images/tech/react.svg" },
                { logo: "/images/tech/angular.svg" },

                { logo: "/images/tech/dotnet.svg" },
                { logo: "/images/tech/typescript.svg" },
                { logo: "/images/tech/python.svg" },
                { logo: "/images/tech/sql-server.svg" },
            ],
        }
    },
];
