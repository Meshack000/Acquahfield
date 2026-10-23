export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="mt-3 text-muted">Coming soon.</p>
    </section>
  );
}