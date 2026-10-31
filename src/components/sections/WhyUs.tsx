import { ArrowRight, Heart, Lightbulb, Sparkles } from "lucide-react";
import { img } from "@/lib/images";
import Button from "@/components/ui/buttons";

const reasons = [
  {
    title: "Montessori learning",
    text: "A child-centred approach that encourages curiosity, creativity, and discovery.",
    icon: Lightbulb,
  },
  {
    title: "A STEM-oriented outlook",
    text: "Learning that builds critical thinking and helps children explore how the world works.",
    icon: Sparkles,
  },
  {
    title: "The whole child",
    text: "Education that nurtures each child's potential and helps them grow in confidence and compassion.",
    icon: Heart,
  },
];

export default function WhyUs() {
  return (
    <section className="bg-cream px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <img
            src={img.studentWriting}
            alt="A student writing during a classroom activity"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-card object-cover"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              Why Acquahfield
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Education for a changing world
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Acquahfield Montessori School is a 21st-century, STEM-oriented school in Kumasi.
              Our approach brings curiosity, creativity, and critical thinking into a holistic
              education that supports every child's potential.
            </p>
            <Button to="/about" variant="primary" className="mt-6">
              Discover our approach <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-brand-200 pt-8 md:grid-cols-3 md:gap-8">
          {reasons.map(({ title, text, icon: Icon }) => (
            <article key={title} className="flex items-start gap-4 py-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}