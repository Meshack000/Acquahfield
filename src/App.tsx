import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Placeholder from "@/pages/Placeholder";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Placeholder title="Academics" />} />
        <Route path="admissions" element={<Placeholder title="Admissions" />} />
        <Route path="gallery" element={<Placeholder title="Gallery" />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}