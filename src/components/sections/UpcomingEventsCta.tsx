import { useEffect, useState } from "react";
import { PawPrint, Phone } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { img } from "@/lib/images";
import { school } from "@/data/site";
import Button from "@/components/ui/buttons";

type UpcomingEvent = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  date: string;
  dateLabel: string;
  href?: string;
};

const events: UpcomingEvent[] = [
  {
    title: "Prefect Elections",
    description: "Choose student leaders through a school vote.",
    image: img.electionBoy,
    imageAlt: "A boy casting his vote during a school prefect election",
    imagePosition: "object-center",
    date: "2027-02-12",
    dateLabel: "12 Feb 2027",
  },
  {
    title: "Career Fair",
    description: "Meet inspiring careers and explore future paths.",
    image: img.youngDoctors,
    imageAlt: "Children dressed as a doctor and nurse for a career activity",
    imagePosition: "object-center",
    date: "2027-02-26",
    dateLabel: "26 Feb 2027",
  },
  {
    title: "SmartTribe Competition",
    description: "Challenge your skills in abacus, coding, games and web building.",
    image: img.smartTribe,
    imageAlt: "SmartTribe competition",
    imagePosition: "object-[65%_center]",
    date: "2027-03-12",
    dateLabel: "12 Mar 2027",
    href: "/smarttribe-competition",
  },
  {
    title: "Kumasi Zoo Excursion",
    description: "A school trip to explore wildlife and learn about animals.",
    date: "2027-04",
    dateLabel: "April 2027",
  },
];

const millisecondsPerDay = 24 * 60 * 60 * 1000;

function daysUntil(date: string): number | null {
  const parts = date.split("-").map(Number);
  if (parts.length !== 3) return null;

  const [year, month, day] = parts;
  const eventDay = Date.UTC(year, month - 1, day);
  const today = new Date();
  const todayDay = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

  return Math.ceil((eventDay - todayDay) / millisecondsPerDay);
}

export default function UpcomingEventsCta() {
  const [remainingDays, setRemainingDays] = useState<Record<string, number | null>>({});

  useEffect(() => {
    const updateCountdowns = () => {
      setRemainingDays(
        Object.fromEntries(events.map((event) => [event.title, daysUntil(event.date)])),
      );
    };

    updateCountdowns();
    const interval = window.setInterval(updateCountdowns, 60_000);

    return () => window.clearInterval(interval);
  }, []);

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

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {events.map(({ title, description, image, imageAlt, imagePosition, date, dateLabel, href }) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-navy-900/10 bg-white p-3 shadow-[0_12px_35px_-22px_rgba(11,31,92,0.45)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-brand-50">
                  {image ? (
                    <img
                      src={image}
                      alt={imageAlt ?? ""}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${imagePosition ?? ""}`}
                    />
                  ) : (
                    <PawPrint
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-navy-900/15"
                    />
                  )}
                  {remainingDays[title] !== undefined && remainingDays[title] !== null && (
                    <span className="absolute right-3 top-3 rounded-full bg-navy-950/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                      {remainingDays[title] < 0
                        ? "Past"
                        : remainingDays[title] === 0
                          ? "Today"
                          : `${remainingDays[title]} days`}
                    </span>
                  )}
                </div>
                <div className="px-2 pb-1 pt-4">
                  <time dateTime={date} className="text-xs font-bold uppercase tracking-wide text-brand-600">
                    {dateLabel}
                  </time>
                  <h3 className="mt-1.5 text-lg font-semibold leading-tight text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 min-h-10 text-sm leading-snug text-muted">
                    {description}
                  </p>
                  <Link
                    to={href ?? "/news-events"}
                    className="mt-4 flex w-full items-center justify-between rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                  >
                    View event
                    <ArrowRight size={17} />
                  </Link>
                </div>
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
                href={`tel:${school.phoneHref}`}
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