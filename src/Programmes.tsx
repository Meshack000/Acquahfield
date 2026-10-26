import { Bot, Calculator, Check, Code, ExternalLink, Landmark } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/buttons";

// TODO: confirm the subject list with the school
const gesSubjects = [
  "English Language",
  "Mathematics",
  "Science",
  "Our World Our People",
  "Religious & Moral Education",
  "Computing",
  "Creative Arts",
  "Ghanaian Language",
  "Physical Education",
  "French",
];

const enrichment = [
  {
    id: "abacus",
    icon: Calculator,
    title: "Abacus & Vedic Maths",
    text: "Mental arithmetic training that builds memory, concentration and calculation speed.",
    tint: "bg-tangerine/15 text-tangerine",
    bar: "bg-tangerine",
  },
  {
    id: "coding",
    icon: Code,
    title: "Coding",
    text: "Children learn problem-solving, logical thinking and creativity by building their own programs.",
    tint: "bg-brand-500/10 text-brand-500",
    bar: "bg-brand-500",
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Robotics",
    text: "Hands-on building and programming that turns curiosity about machines into real skills.",
    tint: "bg-mint/15 text-mint",
    bar: "bg-mint",
  },
];

export default function Programmes() {
  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title="Core learning + future skills"
        text="The full GES curriculum, enriched with abacus, coding and robotics."
      />

      {/* GES */}
      <section id="ges" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-bubblegum/10 text-bubblegum">
              <Landmark size={28} />
            </span>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">The GES curriculum</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              From Creche to Grade 7, our classes follow the Ghana Education Service (GES) curriculum,
              so every pupil builds a strong, nationally recognised foundation, delivered in a warm,
              Montessori-inspired way.
            </p>
            <Button to="/academics" variant="ghost" className="mt-6">See each level</Button>
          </div>

          <div className="rounded-card bg-brand-50 p-8">
            <h3 className="text-xl font-semibold">What pupils study</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {gesSubjects.map((s) => (
                <li key={s} className="flex items-center gap-3 font-semibold text-navy-900">
                  <Check size={18} strokeWidth={3} className="shrink-0 text-mint" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SMARTTRIBE */}
      <section className="bg-navy-900 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-display font-medium text-sunshine">Enrichment programmes</p>
          <h2 className="mt-2 max-w-2xl text-4xl font-semibold text-white md:text-5xl">
            In partnership with SmartTribe
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            SmartTribe is a Ghanaian STEM education provider. Together we bring abacus, coding and
            robotics to our pupils, on top of the core curriculum.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {enrichment.map(({ id, icon: Icon, title, text, tint, bar }) => (
              <article key={id} id={id} className="relative scroll-mt-28 overflow-hidden rounded-card bg-white p-7 text-ink">
                <span className={`absolute inset-x-0 top-0 h-1.5 ${bar}`} />
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${tint}`}>
                  <Icon size={28} />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-muted">{text}</p>
              </article>
            ))}
          </div>

          <a
            href="https://thesmartribe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-sunshine px-7 py-3 font-display font-medium text-navy-900 transition hover:brightness-105"
          >
            Visit SmartTribe <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <section className="px-5 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Want your child to join?</h2>
        <Button to="/admissions#enquire" variant="accent" className="mt-6">Enquire now</Button>
      </section>
    </>
  );
}