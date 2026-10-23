import { Lightbulb, Heart, Sparkles } from "lucide-react";
import { school } from "@/data/site";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity and creativity",
    description: "Children are encouraged to ask questions, explore ideas, and think creatively.",
  },
  {
    icon: Heart,
    title: "The whole child",
    description: "Our Montessori approach recognizes each child’s unique potential and supports their growth.",
  },
  {
    icon: Sparkles,
    title: "Ready for tomorrow",
    description: "A STEM-oriented learning environment builds critical thinking and confidence for the future.",
  },
];

export default function About() {
  return (
    <section className="bg-cream px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
          About our school
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
          A love of learning that lasts a lifetime.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {school.name} is a 21st-century, STEM-oriented Montessori school in Kumasi. We offer
          holistic education that nurtures curiosity, creativity, and critical thinking, while
          helping every child grow into a confident, compassionate, and innovative learner.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-card border border-brand-200/70 bg-white p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon size={24} />
              </span>
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
