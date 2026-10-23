import { Link } from "react-router-dom";
import { ArrowRight, Baby, Blocks, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { img } from "@/lib/images";
import { school } from "@/data/site";
import Button from "@/components/ui/buttons";

const levels = [
  { name: "Creche", ages: "Babies & toddlers", icon: Baby, bar: "bg-bubblegum", tint: "bg-bubblegum/10 text-bubblegum" },
  { name: "Kindergarten", ages: "KG 1 – KG 2", icon: Blocks, bar: "bg-tangerine", tint: "bg-tangerine/15 text-tangerine" },
  { name: "Lower Primary", ages: "Grade 1 – 3", icon: BookOpen, bar: "bg-mint", tint: "bg-mint/15 text-mint" },
  { name: "Upper Primary", ages: "Grade 4 – 7", icon: GraduationCap, bar: "bg-brand-500", tint: "bg-brand-500/10 text-brand-500" },
];

export default function Home() {
  const words = school.tagline.split(" ");
  const lead = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-navy-950 px-5 pb-44 pt-20 text-white">
        <img
          src={img.facade}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_70%] md:object-bottom"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-950/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950/60 to-transparent"
        />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sunshine" />
              Creche · KG · Grade 1–7
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              {lead} <span className="text-sunshine">{tail}</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">
              A welcoming Montessori school where every child is seen, challenged and celebrated,
              from Creche through Grade 7.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/admissions" variant="accent">
                Enquire now <ArrowRight size={18} />
              </Button>
              <Button to="/about" variant="ghost">
                About us
              </Button>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-white/80">
              <MapPin size={16} className="text-sunshine" />
              {school.location}
            </p>
          </div>
        </div>

        <div className="rainbow-bar absolute inset-x-0 bottom-0 h-1.5" />
      </section>

      {/* LEARNING LEVELS */}
      <section className="bg-brand-50/70 px-4 py-12 sm:px-5 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center sm:mb-9">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              Our learning journey
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Learning for every stage
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {levels.map(({ name, ages, icon: Icon, bar, tint }) => (
              <Link
                key={name}
                to="/academics"
                className="group relative flex min-h-36 flex-col overflow-hidden rounded-2xl border border-brand-200/70 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-pop sm:min-h-48 sm:rounded-card sm:p-6"
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${bar}`} />
                <span className="flex items-center justify-between gap-2">
                  <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${tint}`}>
                    <Icon size={20} className="sm:hidden" />
                    <Icon size={24} className="hidden sm:block" />
                  </span>
                  <ArrowRight size={18} className="text-muted transition group-hover:translate-x-1 group-hover:text-bubblegum sm:hidden" />
                </span>
                <h3 className="mt-3 text-base font-semibold leading-tight sm:mt-4 sm:text-xl">{name}</h3>
                <p className="mt-1 text-sm text-muted sm:text-base">{ages}</p>
                <span className="mt-auto hidden items-center gap-1 pt-4 font-display text-sm font-medium text-navy-900 transition group-hover:gap-2 group-hover:text-bubblegum sm:inline-flex">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}