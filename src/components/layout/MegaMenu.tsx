"use client";

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export default function MegaMenu({ open, onClose, children, onMouseEnter, onMouseLeave }: MegaMenuProps) {
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
        className={`fixed px-4 rounded-lg left-0 top-[100px] z-50 w-full transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="
            relative mx-auto max-w-7xl rounded-lg
            bg-gradient-to-br from-sky-50 via-white to-sky-100
            shadow-[0_40px_80px_-30px_rgba(2,132,199,0.35)]
            text-slate-900 z-50
          "
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}
