import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Achievements from "@/pages/Achievements";
import Academics from "@/pages/Academics";
import NewsEvents from "@/pages/NewsEvents";
import Placeholder from "@/pages/Placeholder";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Placeholder title="Admissions" />} />
        <Route path="news-events" element={<NewsEvents />} />
        <Route path="gallery" element={<Placeholder title="Gallery" />} />
        <Route path="contact" element={<Placeholder title="Contact" />} />
      </Route>
    </Routes>
  );
}