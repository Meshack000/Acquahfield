import { ArrowLeft, Calculator, Code2, Gamepad2, Globe2, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { img } from "@/lib/images";

const competitions = [
  {
    title: "Abacus Competition",
    description: "Fast thinking and accurate mental arithmetic through timed abacus challenges.",
    icon: Calculator,
  },
  {
    title: "Scratch Games Competition",
    description: "Create an original playable game in Scratch using code, creativity and teamwork.",
    icon: Gamepad2,
  },
  {
    title: "Website Building Competition",
    description: "Plan and build a useful, engaging website that solves a real challenge.",
    icon: Globe2,
  },
  {
    title: "Coding Hackathon",
    description: "Work in teams to turn a problem into a working digital solution under time pressure.",
    icon: Code2,
  },
];

export default function SmartTribeCompetition() {
  return (
    <>
      <section className="bg-navy-950 px-5 py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to events
          </Link>
          <img
            src={img.smartTribeCompetition}
            alt="SmartTribe competition"
            className="mt-6 aspect-[16/7] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <main>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
                SmartTribe at Acquahfield
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
                SmartTribe Competition
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                Pupils will explore, create and compete across abacus, Scratch games,
                website development and collaborative coding challenges.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-900/10 bg-brand-50 p-5">
              <p className="flex items-center gap-3 font-semibold text-navy-900">
                <CalendarDays size={19} className="text-brand-600" />
                12 March 2027
              </p>
              <p className="mt-3 flex items-center gap-3 text-muted">
                <MapPin size={19} className="text-brand-600" />
                Acquahfield Montessori School
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {competitions.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-navy-900/10 bg-white p-6 shadow-[0_12px_35px_-22px_rgba(11,31,92,0.45)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-navy-900">
                  <Icon size={24} />
                </span>
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-navy-900 px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready to take part?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Ask the school office for competition categories, entry details and preparation dates.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-navy-900 transition hover:bg-brand-50"
            >
              Contact the school
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
