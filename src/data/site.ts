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

export type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const navLinks: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our story", to: "/about" },
      { label: "Mission & vision", to: "/about#mission" },
      { label: "Our values", to: "/about#values" },
    ],
  },
  {
    label: "Academics",
    to: "/academics",
    children: [
      { label: "Creche", to: "/academics#creche" },
      { label: "Kindergarten", to: "/academics#kindergarten" },
      { label: "Lower Primary (Grade 1–3)", to: "/academics#lower-primary" },
      { label: "Upper Primary (Grade 4–7)", to: "/academics#upper-primary" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    children: [
      { label: "How to apply", to: "/admissions" },
      { label: "Enquiry form", to: "/admissions#enquire" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];