import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { academicLinks, navLinks, school } from "@/data/site";
import Button from "@/components/ui/buttons";
import schoolLogo from "@/assets/images/logo-transparent.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [academicsExpanded, setAcademicsExpanded] = useState(false);

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
            l.label === "Academics" ? (
              <div key={l.to} className="group relative">
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 font-semibold transition hover:text-bubblegum ${isActive ? "text-bubblegum" : "text-navy-900"}`
                  }
                >
                  {l.label}
                  <ChevronDown size={16} aria-hidden="true" className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-xl border border-brand-200 bg-white p-2 shadow-lg">
                    {academicLinks.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:bg-brand-50 hover:text-brand-700 focus-visible:bg-brand-50 focus-visible:text-brand-700"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-semibold transition hover:text-bubblegum ${isActive ? "text-bubblegum" : "text-navy-900"}`
                }
              >
                {l.label}
              </NavLink>
            )
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
            l.label === "Academics" ? (
              <div key={l.to}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-semibold text-navy-900"
                  >
                    {l.label}
                  </NavLink>
                  <button
                    type="button"
                    aria-label="Toggle academics submenu"
                    aria-expanded={academicsExpanded}
                    onClick={() => setAcademicsExpanded(!academicsExpanded)}
                    className="rounded p-1 text-navy-900"
                  >
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`transition-transform ${academicsExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {academicsExpanded && (
                  <div className="mt-2 flex flex-col gap-3 border-l-2 border-brand-200 pl-4">
                    {academicLinks.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-muted"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-semibold text-navy-900"
              >
                {l.label}
              </NavLink>
            )
          ))}
        </nav>
      )}
    </header>
  );
}