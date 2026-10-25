import { CalendarDays, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { events, news } from "@/data/news";

export default function NewsEvents() {
  return (
    <>
      <PageHeader
        eyebrow="News & Events"
        title="What’s happening"
        text="Stories, announcements and dates for the Acquahfield family."
      />

      <section id="news" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Latest news</h2>
        {news.length === 0 ? (
          <p className="mt-8 rounded-card border-2 border-dashed border-brand-200 bg-white p-8 text-center text-muted">
            No news yet. Check back soon.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <article key={n.title} className="overflow-hidden rounded-card bg-white shadow-soft">
                {n.image && (
                  <img src={n.image} alt={n.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                )}
                <div className="p-6">
                  <p className="font-display text-sm text-bubblegum">{n.date}</p>
                  <h3 className="mt-1 text-xl font-semibold">{n.title}</h3>
                  <p className="mt-2 text-muted">{n.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="events" className="bg-brand-50 px-5 py-20 scroll-mt-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Upcoming events</h2>
          {events.length === 0 ? (
            <p className="mt-8 rounded-card border-2 border-dashed border-brand-200 bg-white p-8 text-center text-muted">
              No upcoming events right now. Check back soon.
            </p>
          ) : (
            <ul className="mt-8 space-y-4">
              {events.map((e) => (
                <li key={e.title} className="rounded-card bg-white p-6 shadow-soft">
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-muted">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays size={16} /> {e.date}</span>
                    {e.time && <span className="inline-flex items-center gap-1.5"><Clock size={16} /> {e.time}</span>}
                    {e.place && <span className="inline-flex items-center gap-1.5"><MapPin size={16} /> {e.place}</span>}
                  </div>
                  {e.text && <p className="mt-3 text-muted">{e.text}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}