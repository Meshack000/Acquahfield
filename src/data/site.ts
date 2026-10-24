export const school = {
  name: "Acquahfield Montessori School",
  short: "Acquahfield",
  tagline: "Where little minds grow big.",
  location: "Mampong Rd, Kumasi, Ghana",
  phone: "+233 53 938 8836",
  phoneHref: "+233539388836",
  openingNote: "Listed opening time: 6:30am Monday. Call to confirm current hours.",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Acquahfield%20Montessori%20School%2C%20Mampong%20Rd%2C%20Kumasi",
  socials: {
    youtube: "https://youtube.com/@acquahfieldmontessorischool",
    instagram: "https://www.instagram.com/acquahfield_montessori_school/",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const academicLinks = [
  { label: "Learning approach", to: "/academics#learning-approach" },
  { label: "Learning areas", to: "/academics#learning-areas" },
  { label: "STEM and coding", to: "/academics#stem-coding" },
  { label: "Graduation and recognition", to: "/academics#milestones" },
] as const;