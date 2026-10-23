import { school } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy-900 text-white">
      <div className="rainbow-bar h-1.5" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-white">{school.name}</h3>
          <p className="mt-2 text-brand-200">{school.tagline}</p>
        </div>
        <div className="text-brand-200">
          <p>{school.location}</p>
          <p>{school.phone}</p>
          <p>{school.email}</p>
        </div>
        <p className="text-brand-200">{school.hours}</p>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-brand-200">
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </p>
    </footer>
  );
}