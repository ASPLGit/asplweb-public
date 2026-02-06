'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <footer
            className="
    relative
    overflow-hidden
    bg-[url('/images/bg.webp')]
    bg-cover bg-center bg-no-repeat
    after:content-['']
    after:absolute
    after:inset-0
    after:bg-[url('/images/layer6.webp')]
    after:bg-cover
    after:bg-center
    after:bg-no-repeat
    sm:after:blur-[7px]
    after:opacity-50
    after:pointer-events-none
  "
        >
            <div
                className="
            absolute inset-0
            bg-black/40
        "
            />
            <div className="container pt-20 pb-10 relative z-10">
                {/* TOP CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* LEFT – BRAND */}
                    <div className="max-w-md">
                        <Image
                            src="/logo-light.svg"
                            alt="AplombSoft logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />

                        <p className="mt-4 subheading">
                            We build smart IT solutions that help growing brands and
                            businesses scale with confidence.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex gap-3 mt-6">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/company/aplombsoft-pvt-ltd"
                                className="
                                    group
                                    flex h-9 w-9 items-center justify-center
                                    rounded-full
                                    transition-all duration-300 bg-white/50
                                    hover:bg-white
                                "
                            >
                                <Image
                                    src="/images/icons/linkedin.svg"
                                    alt="LinkedIn"
                                    width={18}
                                    height={18}
                                />
                            </Link>

                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/aplombsoftpvtltd"
                                className="
                                    group
                                    flex h-9 w-9 items-center justify-center
                                    rounded-full
                                    border border-slate-800
                                    transition-all duration-300 bg-white/50
                                    hover:bg-white
                                "
                            >
                                <Image
                                    src="/images/icons/instagram.svg"
                                    alt="Instagram"
                                    width={18}
                                    height={18}
                                />
                            </Link>

                            <Link
                                href="#"
                                className="
                                    group
                                    flex h-9 w-9 items-center justify-center
                                    rounded-full
                                    border border-slate-800
                                    transition-all duration-300 bg-white/50
                                    hover:bg-white
                                "
                            >
                                <Image
                                    src="/images/icons/x.svg"
                                    alt="X (Twitter)"
                                    width={18}
                                    height={18}
                                />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT – LINKS */}
                    <div className="grid grid-cols-2 sm:grid-cols-12 sm:gap-10">
                        {/* COMPANY */}
                        <div className="sm:col-span-3">
                            <h4 className="text-sm font-semibold mb-4 text-white">
                                Company
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>
                                    <Link
                                        href="/about"
                                        className="hover:text-blue-400 transition"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/careers"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* SERVICES */}
                        <div className="sm:col-span-5">
                            <h4 className="text-sm font-semibold mb-4 text-white">
                                Services
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>
                                    <Link
                                        href="/services/web-development"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Web / App Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/software-development"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Software Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/blockchain"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Blockchain Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/qa-testing"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Quality Assurance
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/devops"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Cloud & DevOps
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/salesforce"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Salesforce Solutions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div className="sm:col-span-4">
                            <h4 className="text-sm font-semibold mb-4 text-white">
                                Contact
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
                                <li>
                                    <a
                                        href="tel:+916352737547"
                                        className="hover:text-blue-400 transition"
                                    >
                                        +91 635-273-7547
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:sales@aplomsoft.com"
                                        className="hover:text-blue-400 transition"
                                    >
                                        sales@aplomsoft.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* COPYRIGHT */}
                <div className="mt-10 border-t border-slate-600 pt-6 text-center text-xs text-slate-300">
                    ©2026 AplombSoft Pvt Ltd. All rights reserved.
                </div>
            </div>
            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="
      fixed bottom-6 right-6 z-50
      w-11 h-11
      rounded-full
      bg-white/90 backdrop-blur
      border border-slate-200
      shadow-lg
      flex items-center justify-center
      text-slate-800
      hover:scale-105
      transition
    "
                >
                    <svg
                        className="absolute inset-0 -rotate-90"
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                    >
                        <circle
                            cx="22"
                            cy="22"
                            r="20"
                            stroke="rgba(0,0,0,0.1)"
                            strokeWidth="2"
                            fill="none"
                        />
                        <circle
                            cx="22"
                            cy="22"
                            r="20"
                            stroke="#007BFF"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray={2 * Math.PI * 20}
                            strokeDashoffset={
                                2 * Math.PI * 20 -
                                (scrollProgress / 100) * 2 * Math.PI * 20
                            }
                            strokeLinecap="round"
                            style={{ transition: "stroke-dashoffset 0.15s linear" }}
                        />
                    </svg>

                    {/* Icon */}
                    <Image
                        src="/images/icons/up.svg"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className="relative z-10"
                    />
                </button>
            )}


        </footer>
    );
}
