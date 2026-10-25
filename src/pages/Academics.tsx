import { Check } from "lucide-react";
import PageHeader from "@/components/ui/pageheader";
import Button from "@/components/ui/buttons";
import { img } from "@/lib/images";

const levels = [
  {
    name: "Creche",
    ages: "Babies & toddlers",
    text: "A gentle, loving start with play, songs, sensory activities and routines that build trust.",
    items: ["Play and sensory learning", "Early language and songs", "Caring, attentive staff"],
    src: img.classroomCollab,
    bar: "bg-bubblegum",
  },
  {
    name: "Kindergarten",
    ages: "KG 1 – KG 2",
    text: "Learning through play and hands-on materials, building early reading, counting and social skills.",
    items: ["Phonics and early reading", "Numbers and shapes", "Creative arts and play"],
    src: img.studentWriting,
    bar: "bg-tangerine",
  },
  {
    name: "Lower Primary",
    ages: "Grade 1 – 3",
    text: "Solid foundations in literacy and numeracy, with curiosity and good habits at the centre.",
    items: ["Literacy and numeracy", "Science and discovery", "Creative arts and ICT"],
    src: img.classroomStudy,
    bar: "bg-mint",
  },
  {
    name: "Upper Primary",
    ages: "Grade 4 – 7",
    text: "Deeper learning, critical thinking and leadership as pupils prepare for the next stage.",
    items: ["Core subjects and projects", "Leadership and civics", "ICT and research skills"],
    src: img.mockElection,
    bar: "bg-brand-500",
  },
];

export default function Academics() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="From Creche to Grade 7"
        text="A clear learning journey that grows with your child."
      />

      <section className="mx-auto max-w-7xl space-y-20 px-5 py-24">
        {levels.map((l, i) => (
          <article
            key={l.name}
            id={l.name.toLowerCase().replace(/ /g, "-")}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <img
              src={l.src}
              alt={l.name}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded-card object-cover shadow-pop ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div>
              <span className={`block h-1.5 w-14 rounded-full ${l.bar}`} />
              <p className="mt-4 font-display font-medium text-muted">{l.ages}</p>
              <h2 className="mt-1 text-3xl font-semibold md:text-4xl">{l.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{l.text}</p>
              <ul className="mt-5 space-y-2">
                {l.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 font-semibold text-navy-900">
                    <Check size={18} className="text-mint" strokeWidth={3} /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <div className="text-center">
          <Button to="/admissions" variant="accent">Apply for a place</Button>
        </div>
      </section>
    </>
  );
}