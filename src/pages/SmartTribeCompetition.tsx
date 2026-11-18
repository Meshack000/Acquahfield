import { ArrowLeft, Calculator, Code2, Gamepad2, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { img } from "@/lib/images";

const competitions = [
  {
    number: "01",
    title: "Abacus Competition",
    description: "Timed mental-arithmetic challenges that test speed, accuracy and concentration.",
    icon: Calculator,
  },
  {
    number: "02",
    title: "Scratch Games Competition",
    description: "Pupils design and build original playable games using Scratch.",
    icon: Gamepad2,
  },
  {
    number: "03",
    title: "Website Building Competition",
    description: "Teams turn an idea into a clear, useful and visually engaging website.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Coding Hackathon",
    description: "Collaborative problem-solving and rapid creation of a working digital solution.",
    icon: Code2,
  },
];

export default function SmartTribeCompetition() {
  return (
    <>
      <section className="relative isolate min-h-[520px] overflow-hidden bg-navy-950 px-5 py-8 text-white sm:min-h-[620px] sm:py-10">
        <img
          src={img.smartTribeCompetition}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to events
          </Link>
          <div className="mt-32 max-w-2xl sm:mt-40">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">
              12 March 2027 · Acquahfield
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.02] text-white sm:text-7xl">
              SmartTribe Competition
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              A celebration of logic, creativity and technology, with challenges for every kind of young thinker.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              Four competitions
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Choose your challenge
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Individual and team categories give pupils different ways to show what they can do.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {competitions.map(({ number, title, description, icon: Icon }, index) => (
            <article
              key={title}
              className={`group relative min-h-64 overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                index === 0
                  ? "border-brand-200/70 bg-brand-50"
                  : index === 1
                    ? "border-navy-900/10 bg-[#fffaf2]"
                    : index === 2
                      ? "border-navy-900/10 bg-navy-900 text-white"
                      : "border-mint/40 bg-mint/10"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 2 ? "bg-white/10 text-white" : "bg-white text-navy-900 shadow-soft"
                  }`}
                >
                  <Icon size={22} />
                </span>
                <span
                  className={`text-sm font-bold tracking-[0.16em] ${
                    index === 2 ? "text-white/35" : "text-navy-900/35"
                  }`}
                >
                  {number}
                </span>
              </div>
              <h3
                className={`mt-10 text-xl font-semibold sm:text-2xl ${
                  index === 2 ? "text-white" : "text-navy-900"
                }`}
              >
                {title}
              </h3>
              <p
                className={`mt-3 max-w-md leading-relaxed ${
                  index === 2 ? "text-white/70" : "text-muted"
                }`}
              >
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-brand-50 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="text-2xl font-semibold">Ready to take part?</h2>
            <p className="mt-2 text-muted">
              Ask the school office for entry details and preparation dates.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white transition hover:bg-navy-800"
          >
            Contact the school
          </Link>
        </div>
      </section>
    </>
  );
}
