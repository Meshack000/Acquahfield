type Props = { eyebrow: string; title: string; text: string };

export default function PageHeader({ eyebrow, title, text }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-5 py-20 text-center text-white">
      <span className="absolute -left-10 top-6 h-36 w-36 rounded-full bg-bubblegum/30" aria-hidden="true" />
      <span className="absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-sunshine/25" aria-hidden="true" />
      <span className="absolute right-1/4 top-8 h-12 w-12 rounded-full bg-mint/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <p className="font-display font-medium text-sunshine">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-semibold text-white md:text-6xl">{title}</h1>
        <p className="mt-4 text-lg text-white/85">{text}</p>
      </div>
      <div className="rainbow-bar absolute inset-x-0 bottom-0 h-1.5" />
    </section>
  );
}