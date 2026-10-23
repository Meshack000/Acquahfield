import { MapPin, Phone } from "lucide-react";
import { school } from "@/data/site";

export default function Contact() {
  return (
    <section className="bg-cream px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
          Get in touch
        </p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Contact our school</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Call us to ask about the school, admissions, or current opening hours. We’re on Mampong
          Road in Kumasi.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${school.phoneHref}`}
            className="rounded-card border border-brand-200/70 bg-white p-6 shadow-soft transition hover:-translate-y-1"
          >
            <Phone size={24} className="text-brand-600" />
            <h2 className="mt-4 text-xl font-semibold">Call the school</h2>
            <p className="mt-1 text-muted">{school.phone}</p>
          </a>
          <a
            href={school.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-card border border-brand-200/70 bg-white p-6 shadow-soft transition hover:-translate-y-1"
          >
            <MapPin size={24} className="text-brand-600" />
            <h2 className="mt-4 text-xl font-semibold">Find us</h2>
            <p className="mt-1 text-muted">{school.location}</p>
            <span className="mt-3 inline-block font-semibold text-brand-600">Get directions</span>
          </a>
        </div>

        <p className="mt-6 rounded-2xl bg-brand-50 p-5 text-muted">
          <span className="font-semibold text-navy-900">Opening hours:</span> {school.openingNote}
        </p>
        <p className="mt-5 text-sm text-muted">
          Follow us on{" "}
          <a className="font-semibold text-brand-600 underline" href={school.socials.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>{" "}
          and{" "}
          <a className="font-semibold text-brand-600 underline" href={school.socials.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
}
