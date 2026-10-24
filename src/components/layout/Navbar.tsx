import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, school } from "@/data/site";
import Button from "@/components/ui/buttons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link
          to="/"
          aria-label={`${school.name} home`}
          className="flex items-center gap-2.5"
        >
          <img src="/acquahfield-mark.svg" alt="" className="h-11 w-11 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-navy-900 sm:text-xl">
              {school.short}
            </span>
            <span className="mt-1 font-display text-sm font-semibold text-bubblegum sm:text-base">
              Montessori
            </span>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-muted">
              School · Kumasi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-semibold transition hover:text-bubblegum ${isActive ? "text-bubblegum" : "text-navy-900"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button to="/admissions" variant="primary">Enrol now</Button>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t px-5 py-4 lg:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-semibold text-navy-900"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}