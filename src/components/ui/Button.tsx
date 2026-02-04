"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "blue" | "white" | "black";
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "blue",
  to,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-lg font-medium transition-all duration-300 ease-out";

  const size = "sm:pl-10 sm:pr-8 pl-8 pr-6 py-3 text-sm";

  const variants = {
    blue: `
      bg-[linear-gradient(131.31deg,#007BFF_50.33%,#00D4FF_100.33%)]
      text-white
      shadow-md
      hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.08)]
    `,
    white: `
      bg-transparent text-white
      border border-slate-200
      shadow-md
      hover:border-white
      hover:bg-transparent
      hover:text-white
    `,
    black: `
      bg-black text-white border
      shadow-md
      hover:text-black
      hover:border-black
      hover:bg-transparent
      hover:shadow-[inset_0_0_0_9999px_rgba(255,255,255,0.06)]
    `,
  };

  const classes = `${base} ${size} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>

      {/* ICON */}
      <Image
        src="/images/icons/arrow-up.svg"
        alt=""
        width={20}
        height={20}
        className="
          transition-transform duration-300 ease-out
          group-hover:translate-x-1
        "
      />
    </>
  );

  if (to) {
    return (
      <Link href={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
