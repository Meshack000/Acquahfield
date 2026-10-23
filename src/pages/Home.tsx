import { img } from "@/lib/images";
import { school } from "@/data/site";
import Button from "@/components/ui/buttons";

export default function Home() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
      <div>
        <p className="font-display text-bubblegum">Creche · KG · Grade 1–7</p>
        <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-6xl">{school.tagline}</h1>
        <p className="mt-5 max-w-lg text-lg text-muted">
          A warm, colourful place in {school.location} where every child is seen, challenged and celebrated.
        </p>
        <div className="mt-8 flex gap-3">
          <Button to="/admissions" variant="accent">Enquire now</Button>
          <Button to="/about" variant="ghost">About us</Button>
        </div>
      </div>
      <img
        src={img.facade}
        alt="Acquahfield Montessori school building"
        className="rounded-card shadow-pop"
      />
    </section>
  );
}