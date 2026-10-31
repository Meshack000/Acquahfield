import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHeader from "@/components/ui/pageheader";
import { img } from "@/lib/images";

// Add more photos here as the school sends them
const photos = [
  { src: img.facade, alt: "Our colourful school building" },
  { src: img.classroomCollab, alt: "Pupils learning together" },
  { src: img.mockElection, alt: "Mock election day" },
  { src: img.classroomStudy, alt: "Focused classroom study" },
  { src: img.electionOfficials, alt: "Pupils at a schoolyard table" },
  { src: img.youngDoctors, alt: "Pupils in a role-play event" },
  { src: img.studentWriting, alt: "A pupil writing in class" },
  { src: img.youngVoter, alt: "A pupil at a mock ballot station" },
];

export default function Gallery() {
  const [current, setCurrent] = useState<number | null>(null);

  const move = useCallback((d: number) => {
    setCurrent((c) => (c === null ? c : (c + d + photos.length) % photos.length));
  }, []);

  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCurrent(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, move]);

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Life at Acquahfield" text="A peek into our classrooms, events and campus." />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((p, i) => (
            <button
              key={p.alt}
              onClick={() => setCurrent(i)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-card shadow-soft"
              aria-label={`Open photo: ${p.alt}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="w-full transition duration-500 hover:scale-105" />
            </button>
          ))}
        </div>
      </section>

      {current !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setCurrent(null)}
        >
          <button className="absolute right-5 top-5 text-white" aria-label="Close" onClick={() => setCurrent(null)}>
            <X size={32} />
          </button>
          <button
            className="absolute left-3 text-white md:left-8"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); move(-1); }}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={photos[current].src}
            alt={photos[current].alt}
            decoding="async"
            className="max-h-[88svh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-3 text-white md:right-8"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); move(1); }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}