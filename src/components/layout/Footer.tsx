import { school } from "@/data/site";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl text-white">{school.name}</h3>
          <p className="mt-2 text-brand-200">A 21st-century, STEM-oriented Montessori school.</p>
        </div>
        <div className="space-y-3 text-brand-200">
          <a
            href={school.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-2 transition hover:text-white"
          >
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <span>{school.location}<span className="block text-sm">Get directions</span></span>
          </a>
          <a href={`tel:${school.phoneHref}`} className="flex items-center gap-2 transition hover:text-white">
            <Phone size={18} />
            {school.phone}
          </a>
          <p className="text-sm">{school.openingNote}</p>
        </div>
        <div>
          <h4 className="font-display text-lg text-white">Follow the school</h4>
          <div className="mt-3 flex gap-4">
            <a
              href={school.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="Acquahfield Montessori on YouTube"
              className="text-brand-200 transition hover:text-white"
            >
              YouTube
            </a>
            <a
              href={school.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Acquahfield Montessori on Instagram"
              className="text-brand-200 transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-brand-200">
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </p>
    </footer>
  );
}