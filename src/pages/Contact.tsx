import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { school } from "@/data/site";

const info = [
  { icon: MapPin, label: "Find us", value: school.location, tint: "bg-bubblegum/10 text-bubblegum" },
  { icon: Phone, label: "Call us", value: school.phone, tint: "bg-tangerine/15 text-tangerine" },
  { icon: Mail, label: "Email us", value: school.email, tint: "bg-mint/15 text-mint" },
  { icon: Clock, label: "Open", value: school.hours, tint: "bg-brand-500/10 text-brand-500" },
];

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Say hello" text="We’d love to hear from you." />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2">
        <div>
          <ul className="space-y-5">
            {info.map(({ icon: Icon, label, value, tint }) => (
              <li key={label} className="flex items-center gap-4">
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tint}`}>
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-display text-sm text-muted">{label}</p>
                  <p className="font-semibold text-navy-900">{value}</p>
                </div>
              </li>
            ))}
          </ul>
          <iframe
            title="Map of Acquahfield Montessori School, Asenua, Kumasi"
            src="https://www.google.com/maps?q=Asenua,Kumasi,Ghana&output=embed"
            loading="lazy"
            className="mt-8 h-72 w-full rounded-card border-0 shadow-soft"
          />
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-pop">
          <h2 className="text-3xl font-semibold">Send a message</h2>
          <div className="mt-6">
            <EnquiryForm formName="contact" />
          </div>
        </div>
      </section>
    </>
  );
}