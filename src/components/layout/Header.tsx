"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MegaMenu from "./MegaMenu";
import ServicesMenu from "./ServicesMenu";
import Image from "next/image";
import TechnologiesMenu from "./TechnologiesMenu";
import { TECHNOLOGY_GROUPS } from "@/data/technologiesMenu";


export default function Header() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    // Desktop mega menu
    const [activeMenu, setActiveMenu] = useState<null | "services" | "technologies">(null);

    // Mobile accordion menu
    const [mobileMenu, setMobileMenu] = useState<null | "services" | "technologies">(null);

    const NAV_ITEMS = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
    ];

    const closeAllMenus = () => {
        setActiveMenu(null);
        setMobileMenu(null);
        setOpen(false);
    };


    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const lastY = lastScrollY.current;

            if (currentY > lastY && currentY > 80) setShowHeader(false);
            if (currentY < lastY) setShowHeader(true);
            if (currentY > lastY) setActiveMenu(null);

            setIsScrolled(currentY > 80);
            lastScrollY.current = currentY;
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    /* ================= Helpers ================= */
    const toggleDesktopMenu = (menu: "services" | "technologies" | null) => {
        setActiveMenu((prev) => (prev === menu ? null : menu));
    };

    const toggleMobileMenu = (menu: "services" | "technologies" | null) => {
        setMobileMenu((prev) => (prev === menu ? null : menu));
    };

    const isServicesActive = pathname.startsWith("/services");
    const isTechnologiesActive = pathname.startsWith("/technologies");

    const headerWhiteRoutes = [
        (path: string) => path.startsWith("/careers/"),
    ];

    const headerWhite = headerWhiteRoutes.some((check) =>
        check(pathname)
    );


    return (
        <>
            {/* ================= HEADER ================= */}
            <header
                className={`
          fixed -top-0.5 left-0 z-40 w-full
          transition-all duration-500 ease-in-out
          ${showHeader ? "translate-y-0" : "-translate-y-24"}
          ${isScrolled || headerWhite ? "bg-white shadow-md" : "bg-transparent"}
        `}
            >
                <div className="container mx-auto flex items-center justify-between sm:py-6 py-4">
                    {/* LOGO */}
                    <div>
                        <Link href="/">
                            <Image
                                src={isScrolled || headerWhite ? "/logo-dark.svg" : "/logo-light.svg"}
                                alt="Logo"
                                className="2xl:h-12 sm:h-9 h-8 w-auto"
                                width={150}
                                height={32}
                            />
                        </Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className={`hidden col-span-6 lg:flex items-center justify-center gap-6 text-sm
    ${isScrolled || headerWhite ? "text-slate-800" : "text-white"}`}>
                            <Link
                                href="/"
                                onClick={() => {
                                    setActiveMenu(null);
                                    setMobileMenu(null);
                                    setOpen(false);
                                }}
                                className={`relative px-2 py-1 transition
      ${pathname === "/"
                                        ? isScrolled || headerWhite
                                            ? "text-blue-600 font-semibold underline underline-offset-8"
                                            : "text-white underline underline-offset-8"
                                        : isScrolled || headerWhite
                                            ? "text-slate-600 hover:text-blueTheme"
                                            : "text-white/70 hover:text-white"
                                    }`}
                            >
                                Home
                            </Link>

                            {/* ABOUT */}
                            <Link
                                href="/about"
                                onClick={() => {
                                    setActiveMenu(null);
                                    setMobileMenu(null);
                                    setOpen(false);
                                }}
                                className={`relative px-2 py-1 transition
      ${pathname.startsWith("/about")
                                        ? isScrolled || headerWhite
                                            ? "text-blue-600 font-semibold underline underline-offset-8"
                                            : "text-white underline underline-offset-8"
                                        : isScrolled || headerWhite
                                            ? "text-slate-600 hover:text-blueTheme"
                                            : "text-white/70 hover:text-white"
                                    }`}
                            >
                                About
                            </Link>

                            {/* DESKTOP SERVICES */}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDesktopMenu("services");
                                }}
                                className={`flex items-center gap-1 px-2 py-1 transition
              ${activeMenu === "services" || isServicesActive
                                        ? isScrolled || headerWhite
                                            ? "text-blue-600 font-semibold underline underline-offset-8"
                                            : "text-white underline underline-offset-8"
                                        : isScrolled || headerWhite
                                            ? "text-slate-600 hover:text-blueTheme"
                                            : "text-white/70 hover:text-white"
                                    }`}
                            >
                                Services
                                <Image
                                    src={isScrolled || headerWhite ? '/images/icons/chev-down-black.svg' : '/images/icons/chev-down.svg'}
                                    className={`w-4 h-4 transition-transform ${activeMenu === "services" ? "rotate-180" : ""
                                        }`}
                                    alt="chev icon"
                                    width={16}
                                    height={16}
                                />
                            </button>
                            {/* DESKTOP Technologies */}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDesktopMenu("technologies");
                                }}
                                className={`flex items-center gap-1 px-2 py-1 transition
              ${activeMenu === "technologies" || isTechnologiesActive
                                        ? isScrolled || headerWhite
                                            ? "text-blue-600 font-semibold underline underline-offset-8"
                                            : "text-white underline underline-offset-8"
                                        : isScrolled || headerWhite
                                            ? "text-slate-600 hover:text-blueTheme"
                                            : "text-white/70 hover:text-white"
                                    }`}
                            >
                                Technologies
                                <Image

                                    src={isScrolled || headerWhite ? '/images/icons/chev-down-black.svg' : '/images/icons/chev-down.svg'}
                                    className={`w-4 h-4 transition-transform ${activeMenu === "technologies" ? "rotate-180" : ""
                                        }`}
                                    alt="chev icon"
                                    width={16}
                                    height={16}
                                />
                            </button>
                            {/* CAREERS */}
                            <Link
                                href="/careers"
                                onClick={() => {
                                    setActiveMenu(null);
                                    setMobileMenu(null);
                                    setOpen(false);
                                }}
                                className={`relative px-2 py-1 transition
      ${pathname.startsWith("/careers")
                                        ? isScrolled || headerWhite
                                            ? "text-blue-600 font-semibold underline underline-offset-8"
                                            : "text-white underline underline-offset-8"
                                        : isScrolled || headerWhite
                                            ? "text-slate-600 hover:text-blueTheme"
                                            : "text-white/70 hover:text-white"
                                    }`}
                            >
                                Careers
                            </Link>
                        </div>
                        <div className="flex items-center justify-end gap-4">
                            <Link href="/contact"
                                className={`hidden sm:inline-flex px-4 py-2 rounded-md text-sm transition
              ${isScrolled || headerWhite
                                        ? "bg-[linear-gradient(131.31deg,#007BFF_50.33%,#00D4FF_100.33%)] text-white"
                                        : "bg-white text-black hover:bg-transparent border border-white hover:text-white"
                                    }`}
                            >
                                Contact Us
                            </Link>
                            <button className="lg:hidden" onClick={() => setOpen(true)}>
                                <Image
                                    src={
                                        isScrolled || headerWhite
                                            ? "/images/icons/menu-blue.svg"
                                            : "/images/icons/menu.svg"
                                    }
                                    alt="menu icon"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ================= DESKTOP MEGA MENU ================= */}
            <MegaMenu open={activeMenu === "services"} onClose={closeAllMenus}>
                <ServicesMenu onNavigate={closeAllMenus} />
            </MegaMenu>
            <MegaMenu open={activeMenu === "technologies"} onClose={closeAllMenus}>
                <TechnologiesMenu onNavigate={closeAllMenus} />
            </MegaMenu>


            {/* ================= MOBILE MENU ================= */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-[80%] max-w-[320px]
        bg-white transition-transform duration-300 lg:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b">
                    <Image src="/logo-dark.svg" className="2xl:h-12 sm:h-9 h-8 w-auto" alt="logo" width={130} height={28} />
                    <button onClick={() => setOpen(false)}>
                        <Image src="/images/icons/close.svg" alt="close" width={26} height={26} />
                    </button>
                </div>
                <div className="flex flex-col justify-between h-full pb-16">
                    <nav className="px-4 py-4 space-y-3 text-sm overflow-y-auto">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    setOpen(false);
                                    toggleMobileMenu(null);
                                }}
                                className={`block px-3 py-2 rounded transition
    ${pathname === item.href
                                        ? "bg-sky-100 text-blue-500 font-medium"
                                        : "text-slate-700 hover:bg-slate-100"
                                    }
  `}
                            >
                                {item.label}
                            </Link>

                        ))}

                        {/* MOBILE SERVICES (simple list) */}
                        <div className="relative">
                            <button
                                onClick={() => toggleMobileMenu("services")}
                                className={`flex w-full items-center gap-2 px-3 py-2 rounded relative z-10 transition
                                 ${isServicesActive
                                        ? "bg-sky-100 text-sky-700 font-medium"
                                        : "text-slate-700 hover:bg-slate-100"
                                    }
                                   `}
                            >
                                Services
                                <Image
                                    src="/images/icons/chev-down-black.svg"
                                    className={`w-4 h-4 transition-transform ${mobileMenu === "services" ? "rotate-180" : ""
                                        }`}
                                    alt="black icon"
                                    width={20}
                                    height={20}
                                />
                            </button>

                            {mobileMenu === "services" && (
                                <span
                                    className="
      absolute
      left-10
      top-[20px]
      bottom-0
      w-[2px]
      bg-sky-200
      rounded-full
      z-0
    "
                                />
                            )}


                            {mobileMenu === "services" && (
                                <div className="ml-4 mt-3 space-y-4">
                                    {[
                                        {
                                            title: "Application Development",
                                            links: [
                                                { label: "Software Development", href: "/services/software-development" },
                                                { label: "Website Development", href: "/services/web-development" },
                                                { label: "Mobile App Development", href: "/services/mobile-development" },
                                            ],
                                        },
                                        {
                                            title: "Quality Assurance & Testing",
                                            links: [
                                                { label: "QA & Software Testing", href: "/services/qa-testing" },
                                            ],
                                        },
                                        {
                                            title: "Cloud & DevOps",
                                            links: [
                                                { label: "Microsoft & Cloud Solutions", href: "/services/cloud-solutions" },
                                                { label: "DevOps & Cloud Automation", href: "/services/devops" },
                                            ],
                                        },
                                        {
                                            title: "Enterprise Salesforce",
                                            links: [
                                                { label: "Salesforce Solutions", href: "/services/salesforce" },
                                            ],
                                        },
                                        {
                                            title: "Emerging Technologies",
                                            links: [
                                                { label: "Cybersecurity Solutions", href: "/services/cybersecurity" },
                                                { label: "AI & Machine Learning", href: "/services/ai-ml" },
                                            ],
                                        },
                                        {
                                            title: "Blockchain & Web3",
                                            links: [
                                                { label: "Blockchain & Web3", href: "/services/blockchain" },
                                            ],
                                        },
                                    ].map((group) => (
                                        <div
                                            key={group.title}
                                            className="relative rounded-lg  bg-sky-50 px-4 py-3"
                                        >

                                            {/* HEADER (NO ARROW NOW) */}
                                            <p className="mb-2 text-sm font-semibold text-slate-800">
                                                {group.title}
                                            </p>

                                            {/* LINKS */}
                                            <div className="space-y-1">
                                                {group.links.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={`group flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition
                                                              ${pathname === item.href
                                                                ? "bg-white text-sky-700 font-medium"
                                                                : "text-slate-700 hover:bg-white/70"
                                                            }
                                                        `}
                                                    >
                                                        <span>{item.label}</span>

                                                        {/* RIGHT ICON */}
                                                        <Image
                                                            src="/images/icons/chev-right.svg"
                                                            alt="arrow"
                                                            width={20}
                                                            height={20}
                                                            className="h-5 w-5"
                                                        />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* MOBILE technologies */}
                        <div className="relative">
                            <button
                                onClick={() => toggleMobileMenu("technologies")}
                                className={`flex w-full items-center gap-2 px-3 py-2 rounded relative z-10 transition
      ${isTechnologiesActive
                                        ? "bg-sky-100 text-sky-700 font-medium"
                                        : "text-slate-700 hover:bg-slate-100"
                                    }
    `}
                            >
                                Technologies
                                <Image
                                    src="/images/icons/chev-down-black.svg"
                                    className={`w-4 h-4 transition-transform ${mobileMenu === "technologies" ? "rotate-180" : ""
                                        }`}
                                    alt="black icon"
                                    width={20}
                                    height={20}
                                />
                            </button>

                            {/* LEFT VERTICAL LINE (same as Services) */}
                            {mobileMenu === "technologies" && (
                                <span
                                    className="
        absolute
        left-10
        top-[20px]
        bottom-0
        w-[2px]
        bg-sky-200
        rounded-full
        z-0
      "
                                />
                            )}

                            {/* TECHNOLOGY GROUPS */}
                            {mobileMenu === "technologies" && (
                                <div className="ml-4 mt-3 space-y-4">
                                    {TECHNOLOGY_GROUPS.map((group) => (
                                        <div
                                            key={group.category}
                                            className="relative rounded-lg bg-sky-50 px-4 py-3"
                                        >
                                            {/* GROUP TITLE */}
                                            <p className="mb-2 text-sm font-semibold text-slate-800">
                                                {group.category}
                                            </p>

                                            {/* TECHNOLOGY LINKS */}
                                            <div className="space-y-1">
                                                {group.items.map((tech) => (
                                                    <Link
                                                        key={tech.slug}
                                                        href={`/technologies/${tech.slug}`}
                                                        onClick={() => setOpen(false)}
                                                        className={`
                  group flex items-center justify-between
                  rounded-md px-2 py-1.5 text-sm transition
                  ${pathname === `/technologies/${tech.slug}`
                                                                ? "bg-white text-sky-700 font-medium"
                                                                : "text-slate-700 hover:bg-white/70"
                                                            }
                `}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Image
                                                                src={tech.icon}
                                                                alt={tech.name}
                                                                width={16}
                                                                height={16}
                                                                className="opacity-80"
                                                            />
                                                            <span>{tech.name}</span>
                                                        </div>

                                                        {/* RIGHT ARROW */}
                                                        <Image
                                                            src="/images/icons/chev-right.svg"
                                                            alt="arrow"
                                                            width={20}
                                                            height={20}
                                                            className="h-5 w-5"
                                                        />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </nav>
                    {/* MOBILE BOTTOM ACTIONS */}
                    <div className="border-t border-slate-200 bg-white px-4 py-4">
                        <div className="flex items-center gap-3">
                            {/* Primary */}
                            <Link
                                href="/services"
                                onClick={() => setOpen(false)}
                                className="
        flex-1
        rounded-lg
        bg-[linear-gradient(131.31deg,#007BFF_50.33%,#00D4FF_100.33%)]
        px-4 py-3
        text-center
        text-sm font-semibold text-white
        shadow-sm
      "
                            >
                                Services
                            </Link>

                            {/* Secondary */}
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="
        flex-1
        rounded-lg
        border border-slate-300
        px-4 py-3
        text-center
        text-sm font-medium text-slate-700
        hover:bg-slate-100
      "
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
            {/* MOBILE BACKDROP */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
  ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setOpen(false)}
            />

        </>
    );
}