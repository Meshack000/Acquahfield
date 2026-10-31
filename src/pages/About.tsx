import { Heart, Lightbulb, ShieldCheck, Users } from "lucide-react";
import PageHeader from "@/components/ui/pageheader";
import Button from "@/components/ui/buttons";
import { img } from "@/lib/images";

const values = [
  { icon: Heart, title: "Care", text: "Every child is known, valued and looked after.", tint: "bg-bubblegum/10 text-bubblegum" },
  { icon: Lightbulb, title: "Curiosity", text: "We encourage questions and learning by doing.", tint: "bg-tangerine/15 text-tangerine" },
  { icon: ShieldCheck, title: "Integrity", text: "Honesty and respect guide everything we do.", tint: "bg-mint/15 text-mint" },
  { icon: Users, title: "Community", text: "Parents, teachers and pupils grow together.", tint: "bg-brand-500/10 text-brand-500" },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Our story"
        text="A caring Montessori school in Asenua, Kumasi, for children from Creche to Grade 7."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Learning that feels like discovery</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Acquahfield Montessori School was built around one idea: children learn best when they are
            happy, curious and supported. Our bright, colourful campus is designed to make every child
            feel at home.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {/* TODO: replace with the school's real history, founder and year started */}
            From our youngest learners in the Creche to our Grade 7 pupils, we blend hands-on learning
            with strong academics and good character.
          </p>
          <Button to="/admissions" className="mt-8">Join our school</Button>
        </div>
        <img
          src={img.facade}
          alt="Acquahfield Montessori school building"
          loading="lazy"
          decoding="async"
          className="rounded-card shadow-pop"
        />
      </section>

      <section id="mission" className="bg-brand-50 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-card bg-navy-900 p-8 text-white">
            <h3 className="text-2xl font-semibold text-sunshine">Our mission</h3>
            <p className="mt-3 text-white/85">
              To give every child a joyful, high-quality education that builds knowledge, confidence and character.
            </p>
          </div>
          <div className="rounded-card bg-bubblegum p-8 text-white">
            <h3 className="text-2xl font-semibold text-white">Our vision</h3>
            <p className="mt-3 text-white/90">
              Confident, curious young leaders who make a positive difference in Ghana and beyond.
            </p>
          </div>
        </div>
      </section>

      <section id="values" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="text-center text-4xl font-semibold">What we stand for</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text, tint }) => (
            <div key={title} className="rounded-card bg-white p-6 shadow-soft">
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${tint}`}>
                <Icon size={24} />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}