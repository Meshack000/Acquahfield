import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Achievements from "@/pages/Achievments";
import Academics from "@/pages/Academics";
import NewsEvents from "@/pages/NewsEvents";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Programmes from "@/Programmes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="news-events" element={<NewsEvents />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="programmes" element={<Programmes />} />
      </Route>
    </Routes>
  );
}