import { Award, BadgeCheck, GraduationCap, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/ui/pageheader";
import { awards, certifications, graduations, type Item } from "@/data/achievments";

type SectionProps = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  items: Item[];
  tint: string;
};

function Section({ id, icon: Icon, title, intro, items, tint }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16">
      <div className="flex items-start gap-4">
        <span className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tint}`}>
          <Icon size={28} />
        </span>
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-lg text-muted">{intro}</p>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="mt-8 rounded-card border-2 border-dashed border-brand-200 bg-white p-8 text-center text-muted">
          Details and photos coming soon.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="overflow-hidden rounded-card bg-white shadow-soft">
              {it.image && (
                <img src={it.image} alt={it.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              )}
              <div className="p-6">
                {it.date && <p className="font-display text-sm text-bubblegum">{it.date}</p>}
                <h3 className="mt-1 text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-muted">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Awards & milestones"
        text="Celebrating the achievements of our pupils and our school."
      />
      <Section
        id="awards"
        icon={Award}
        title="Awards"
        intro="Recognition earned by our pupils, teachers and school."
        items={awards}
        tint="bg-sunshine/30 text-tangerine"
      />
      <Section
        id="certification"
        icon={BadgeCheck}
        title="Certification"
        intro="Our approvals, accreditations and the certificates our pupils earn."
        items={certifications}
        tint="bg-mint/15 text-mint"
      />
      <Section
        id="graduation"
        icon={GraduationCap}
        title="Graduation"
        intro="Celebrating every pupil who completes a stage of their journey with us."
        items={graduations}
        tint="bg-bubblegum/10 text-bubblegum"
      />
    </>
  );
}