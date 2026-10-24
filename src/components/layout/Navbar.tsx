import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, school } from "@/data/site";
import Button from "@/components/ui/buttons";
import schoolLogo from "@/assets/images/logo-transparent.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link
          to="/"
          aria-label={`${school.name} home`}
          className="inline-flex items-center gap-2 font-display text-xl font-semibold text-navy-900"
        >
          <img src={schoolLogo} alt="" aria-hidden="true" className="h-8 w-8 shrink-0 object-contain" />
          <span>
            {school.short}
            <span className="text-bubblegum"> Montessori</span>
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