import { Phone } from "lucide-react";
import { img } from "@/lib/images";
import { school } from "@/data/site";
import Button from "@/components/ui/buttons";

const events = [
  {
    title: "Prefect Elections",
    description: "Students vote for their prefects and take part in choosing their school leaders.",
    image: img.electionOfficials,
    imageAlt: "A boy casting his vote during a school prefect election",
  },
  {
    title: "Career Fair",
    description: "Discover different careers, meet new ideas, and explore future possibilities.",
    image: img.youngDoctors,
    imageAlt: "Students exploring a career through role-play",
  },
  {
    title: "Coding Competition",
    description: "Put creativity and problem-solving into action with coding challenges.",
    image: img.classroomCollab,
    imageAlt: "Students collaborating around a laptop",
  },
];

export default function UpcomingEventsCta() {
  return (
    <>
      {/* UPCOMING EVENTS */}
      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              Coming up at Acquahfield
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Upcoming events</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Opportunities for students to lead, explore future careers, and build with technology.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {events.map(({ title, description, image, imageAlt }) => (
              <article key={title}>
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
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