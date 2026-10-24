import { BookOpen, GraduationCap, Lightbulb, Sparkles } from "lucide-react";
import { img } from "@/lib/images";

const learningAreas = [
  {
    title: "Language and literacy",
    description: "Build communication, reading, writing, and confidence in expressing ideas.",
    icon: BookOpen,
  },
  {
    title: "Mathematics and discovery",
    description: "Explore numbers, patterns, and problem-solving through active learning.",
    icon: Lightbulb,
  },
  {
    title: "Creativity and the whole child",
    description: "Make room for imagination, independence, collaboration, and personal growth.",
    icon: Sparkles,
  },
];

export default function Academics() {
  return (
    <>
      <section className="bg-cream px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              Academics at Acquahfield
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
              Learning that builds curious, capable minds.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Our Montessori and STEM-oriented approach encourages children to explore, practise,
              and grow in confidence. We aim to support each learner academically and as a person.
            </p>
          </div>
          <img
            src={img.studentWriting}
            alt="A student concentrating on a writing activity"
            className="h-72 w-full rounded-card object-cover sm:h-96"
          />
        </div>
      </section>

      <section id="learning-approach" className="scroll-mt-24 px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              Our learning approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Hands-on learning, guided by curiosity.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Montessori learning gives children opportunities to engage with ideas through
              purposeful activities, while teachers guide and encourage progress. We value
              curiosity, independence, and steady growth.
            </p>
          </div>
          <img
            src={img.classroomCollab}
            alt="Students learning together in class"
            className="h-72 w-full rounded-card object-cover"
          />
        </div>
      </section>

      <section id="learning-areas" className="scroll-mt-24 bg-brand-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
            Learning areas
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Growing skills for life.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {learningAreas.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-card border border-brand-200/70 bg-white p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stem-coding" className="scroll-mt-24 px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <img
            src={img.smartTribe}
            alt="Students taking part in a coding activity"
            className="h-72 w-full rounded-card object-cover"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              STEM and coding
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Making, exploring, and solving problems.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              STEM activities invite learners to ask questions, test ideas, and work together.
              Coding adds a playful way to practise logic and creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      <section id="milestones" className="scroll-mt-24 bg-navy-950 px-5 py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-bubblegum">
            <GraduationCap size={30} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-200">
              Graduation and recognition
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Celebrating every step forward.
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-brand-100">
              Graduation and student recognition are meaningful milestones in a child’s learning
              journey. We celebrate effort, growth, creativity, and the skills learners develop
              along the way. Contact the school for details about current ceremonies or awards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
