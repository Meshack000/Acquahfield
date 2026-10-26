import { ClipboardList, FileText, MessagesSquare, School } from "lucide-react";
import PageHeader from "@/components/ui/pageheader";
import EnquiryForm from "@/components/ui/EnquiryForm";

const steps = [
  { icon: MessagesSquare, title: "Enquire", text: "Send us a message or call to ask about a place.", tint: "bg-bubblegum/10 text-bubblegum" },
  { icon: School, title: "Visit", text: "Tour the school and meet our teachers.", tint: "bg-tangerine/15 text-tangerine" },
  { icon: ClipboardList, title: "Apply", text: "Complete the admission form with your documents.", tint: "bg-mint/15 text-mint" },
  { icon: FileText, title: "Enrol", text: "Confirm your child’s place and get ready to start.", tint: "bg-brand-500/10 text-brand-500" },
];

// TODO: confirm the real list with the school
const bring = ["Child’s birth certificate (copy)", "Passport-size photos", "Previous school report (if any)", "Parent / guardian contact details"];

export default function Admissions() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Join our family"
        text="Places are open for Creche, Kindergarten and Grades 1–7."
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="text-center text-4xl font-semibold">How to apply</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text, tint }, i) => (
            <div key={title} className="relative rounded-card bg-white p-6 shadow-soft">
              <span className="absolute right-5 top-4 font-display text-5xl font-semibold text-brand-200">{i + 1}</span>
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${tint}`}>
                <Icon size={24} />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-card bg-brand-50 p-8">
          <h3 className="text-2xl font-semibold">What to bring</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {bring.map((b) => (
              <li key={b} className="flex items-center gap-3 font-semibold text-navy-900">
                <span className="h-2.5 w-2.5 rounded-full bg-sunshine" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-28 bg-navy-900 px-5 py-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-pop md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Enquiry form</h2>
          <p className="mb-8 mt-2 text-muted">Tell us a little and we’ll get back to you.</p>
          <EnquiryForm formName="enquiry" showLevel />
        </div>
      </section>
    </>
  );
}