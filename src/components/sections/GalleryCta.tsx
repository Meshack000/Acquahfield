import { Phone } from "lucide-react";
import { img } from "@/lib/images";
import { school } from "@/data/site";
import Button from "@/components/ui/buttons";

const photos = [
  { src: img.youngDoctors, alt: "Pupils in a role-play event", className: "md:row-span-2" },
  { src: img.facade, alt: "Our colourful school building", className: "md:col-span-2" },
  { src: img.youngVoter, alt: "A pupil at a mock ballot station", className: "md:row-span-2" },
  { src: img.studentWriting, alt: "A pupil writing in class", className: "" },
  { src: img.electionOfficials, alt: "Pupils at a schoolyard table", className: "" },
];

export default function GalleryCta() {
  return (
    <>
      {/* GALLERY STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display font-medium text-bubblegum">Life at school</p>
            <h2 className="mt-2 text-4xl font-semibold md:text-5xl">Moments we love</h2>
          </div>
          <Button to="/gallery" variant="ghost">See full gallery</Button>
        </div>

        <div className="mt-10 grid auto-rows-[200px] gap-4 md:grid-cols-4">
          {photos.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={`h-full w-full rounded-card object-cover shadow-soft ${p.className}`}
            />
          ))}
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="px-5 pb-4">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy-900 px-8 py-16 text-center text-white md:px-16">
          <span className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-bubblegum/40" aria-hidden="true" />
          <span className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-sunshine/30" aria-hidden="true" />
          <span className="absolute bottom-6 left-1/4 h-16 w-16 rounded-full bg-mint/40" aria-hidden="true" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold text-white md:text-5xl">
              Let’s secure your child’s <span className="text-sunshine">bright future</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Admissions are open for Creche, KG and Grades 1–7. Come visit and see the school for yourself.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/admissions" variant="accent">Start admission</Button>
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display font-medium text-navy-900 transition hover:bg-brand-50"
              >
                <Phone size={18} /> {school.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}