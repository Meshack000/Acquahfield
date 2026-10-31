export const school = {
  name: "Acquahfield Montessori School",
  short: "Acquahfield",
  tagline: "Where little minds grow big.",
  location: "Mampong Rd, Kumasi, Ghana",
  phone: "+233 53 938 8836",
  phoneHref: "+233539388836",
  email: "Email address not listed",
  hours: "Listed opening time: 6:30am Monday. Call to confirm current hours.",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Acquahfield%20Montessori%20School%2C%20Mampong%20Rd%2C%20Kumasi",
  socials: {
    youtube: "https://youtube.com/@acquahfieldmontessorischool",
    instagram: "https://www.instagram.com/acquahfield_montessori_school/",
  },
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
      { label: "Mission & vision", to: "/about#admission" },
      { label: "Our values", to: "/about#values" },
      { label: "Awards", to: "/achievements#awards" },
      { label: "Certification", to: "/achievements#certification" },
      { label: "Graduation", to: "/achievements#graduation" },
      { label: "Gallery", to: "/gallery" },
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
      { label: "Programmes", to: "/programmes" },
      { label: "GES curriculum", to: "/programmes#ges" },
      { label: "Abacus", to: "/programmes#abacus" },
      { label: "Coding", to: "/programmes#coding" },
      { label: "Robotics", to: "/programmes#robotics" },
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
  {
    label: "News & Events",
    to: "/news-events",
    children: [
      { label: "Latest news", to: "/news-events#news" },
      { label: "Upcoming events", to: "/news-events#events" },
    ],
  },
  { label: "Contact", to: "/contact" },
];