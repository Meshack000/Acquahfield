export const school = {
  name: "Acquahfield Montessori School",
  short: "Acquahfield",
  tagline: "Where little minds grow big.",
  location: "Asenua, Kumasi, Ghana",
  // TODO: replace with the school's real details
  phone: "+233 00 000 0000",
  email: "info@acquahfield.edu.gh",
  hours: "Mon – Fri, 7:00am – 4:00pm",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;