import { img } from "@/lib/images";

const photos = [
  { src: img.facade, alt: "Acquahfield Montessori School building", caption: "Our school" },
  { src: img.classroomCollab, alt: "Students learning together in class", caption: "Learning together" },
  { src: img.classroomStudy, alt: "Student focused on classroom work", caption: "Curious minds at work" },
  { src: img.studentWriting, alt: "A young student writing in class", caption: "Building strong foundations" },
  { src: img.mockElection, alt: "Students taking part in a mock election", caption: "Student leadership" },
  { src: img.electionOfficials, alt: "Students working together at a school activity", caption: "Working as a team" },
  { src: img.youngDoctors, alt: "Students taking part in a role-play activity", caption: "Learning through role-play" },
  { src: img.youngVoter, alt: "A student participating in a mock voting activity", caption: "Finding their voice" },
];

export default function Gallery() {
  return (
    <section className="bg-cream px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
          Life at Acquahfield
        </p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">School gallery</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          A glimpse of our school, classroom learning, and activities that help children explore,
          express themselves, and learn together.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {photos.map(({ src, alt, caption }) => (
            <figure key={alt} className="overflow-hidden rounded-2xl bg-white">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-3 py-3 font-semibold text-navy-900 sm:px-4">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
