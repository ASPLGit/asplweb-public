"use client";

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function MegaMenu({ open, onClose, children }: MegaMenuProps) {
  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* MENU */}
      <div
        className={`fixed left-0 top-[80px] z-40 w-full transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div
          className="
            relative mx-auto max-w-7xl
            bg-gradient-to-br from-sky-50 via-white to-sky-100
            shadow-[0_40px_80px_-30px_rgba(2,132,199,0.35)]
            p-10
            text-slate-900
          "
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}
