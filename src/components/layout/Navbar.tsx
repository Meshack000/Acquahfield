import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, school, type NavItem } from "@/data/site";
import Button from "@/components/ui/buttons";
import schoolLogo from "@/assets/images/logo-transparent.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { pathname } = useLocation();

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  const isActive = (l: NavItem) =>
    l.to === "/"
      ? pathname === "/"
      : [l.to, ...(l.children?.map((c) => c.to.split("#")[0]) ?? [])].some(
          (path) => pathname === path || pathname.startsWith(`${path}/`),
        );

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-soft backdrop-blur">
      <div className="rainbow-bar h-1.5" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="inline-flex items-center gap-2 font-display text-xl font-semibold text-navy-900">
          <img
            src={schoolLogo}
            alt={`${school.name} crest`}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span>
            {school.short}
            <span className="text-bubblegum"> Montessori</span>
          </span>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) =>
            l.children ? (
              <div key={l.label} className="group relative">
                <NavLink
                  to={l.to}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 font-semibold transition hover:text-bubblegum ${
                    isActive(l) ? "text-bubblegum" : "text-navy-900"
                  }`}
                >
                  {l.label}
                  <ChevronDown
                    size={16}
                    className="transition group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </NavLink>

                <div className="invisible absolute left-0 top-full z-50 min-w-64 translate-y-2 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-2xl bg-white p-2 shadow-pop ring-1 ring-navy-900/5">
                    {l.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          to={c.to}
                          className="block rounded-xl px-4 py-2.5 font-semibold text-navy-900 transition hover:bg-brand-50 hover:text-bubblegum"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className={`rounded-full px-4 py-2 font-semibold transition hover:text-bubblegum ${
                  isActive(l) ? "text-bubblegum" : "text-navy-900"
                }`}
              >
                {l.label}
              </NavLink>
            ),
          )}
          <Button to="/contact" variant="accent" className="ml-3">
            Enrol now
          </Button>
        </nav>

        <button
          className="rounded-full p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE */}
      {open && (
        <nav className="max-h-[75svh] overflow-y-auto border-t px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.children ? (
                  <>
                    <button
                      onClick={() => setExpanded(expanded === l.label ? null : l.label)}
                      aria-expanded={expanded === l.label}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-semibold text-navy-900"
                    >
                      {l.label}
                      <ChevronDown
                        size={18}
                        className={`transition ${expanded === l.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded === l.label && (
                      <ul className="mb-2 ml-3 space-y-1 border-l-2 border-bubblegum/40 pl-3">
                        {l.children.map((c) => (
                          <li key={c.label}>
                            <Link to={c.to} className="block rounded-lg px-3 py-2 text-muted hover:text-bubblegum">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={l.to} className="block rounded-xl px-3 py-3 font-semibold text-navy-900">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button to="/contact" variant="accent" className="mt-4 w-full justify-center">
            Enrol now
          </Button>
        </nav>
      )}
    </header>
  );
}