import { school } from "@/data/site";
import { MapPin, Phone } from "lucide-react";
import youtubeIcon from "@/assets/images/social-youtube.png";
import instagramIcon from "@/assets/images/social-instagram.png";
import { Link } from "react-router-dom";
import { navLinks } from "@/data/site";
import schoolLogo from "@/assets/images/logo-transparent.webp";

export default function Footer() {
  return (
    <footer className="mt-12 bg-navy-950 text-white sm:mt-16">
      <div className="h-1 bg-bubblegum" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_0.8fr] lg:py-14">
        <div className="max-w-xs">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={schoolLogo}
              alt={`${school.name} crest`}
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="font-display text-xl font-semibold text-white sm:text-2xl">
              {school.short}<span className="text-bubblegum"> Montessori</span>
            </span>
          </Link>
          <p className="mt-4 leading-relaxed text-brand-200">
            A 21st-century, STEM-oriented school nurturing curious, creative learners.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-lg font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-brand-200 transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Visit or call</h2>
          <div className="mt-4 space-y-4 text-brand-200">
          <a
            href={school.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 transition-colors hover:text-white"
          >
            <MapPin size={18} className="mt-0.5 shrink-0 text-bubblegum" />
            <span>
              {school.location}
              <span className="mt-1 block text-sm underline decoration-white/30 underline-offset-4">
                Get directions
              </span>
            </span>
          </a>
          <a href={`tel:${school.phoneHref}`} className="flex items-center gap-3 transition-colors hover:text-white">
            <Phone size={18} className="text-bubblegum" />
            {school.phone}
          </a>
          <p className="max-w-xs text-sm leading-relaxed">{school.hours}</p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Follow the school</h2>
          <p className="mt-3 text-sm text-brand-200">See what our students are learning.</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={school.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="Acquahfield Montessori on YouTube"
              className="inline-flex rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
            >
              <img src={youtubeIcon} alt="" aria-hidden="true" className="h-6 w-6" />
            </a>
            <a
              href={school.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Acquahfield Montessori on Instagram"
              className="inline-flex rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
            >
              <img src={instagramIcon} alt="" aria-hidden="true" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-4 text-sm text-brand-200">
          © {new Date().getFullYear()} {school.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}