export type NewsItem = { title: string; text: string; date: string; image?: string };
export type EventItem = { title: string; date: string; time?: string; place?: string; text?: string };

// Add real entries here. Examples:
// { title: "Mock election day", text: "Our pupils …", date: "12 Oct 2026", image: img.mockElection }
// { title: "Open day", date: "2026-11-14", time: "9:00am", place: "School campus" }
export const news: NewsItem[] = [];
export const events: EventItem[] = [
  {
    title: "Kumasi Zoo Excursion",
    date: "April 2027",
    place: "Kumasi Zoo",
    text: "A school trip for pupils to explore wildlife and learn about animals.",
  },
];