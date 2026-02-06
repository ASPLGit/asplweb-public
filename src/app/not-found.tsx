"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex items-center justify-center
        bg-[url('/images/bg.webp')]
        bg-cover bg-center
        after:absolute after:inset-0
        after:bg-black/60
      "
    >
      <div className="relative z-10 container">
        <div className="mx-auto max-w-xl text-center space-y-6">
          {/* 404 */}
          <p className="text-sm uppercase tracking-widest text-slate-300">
            Error 404
          </p>

          <h1 className="heading-xl text-white">
            Page Not Found
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back on track.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button variant="blue" to="/">
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
