import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/layout";
import Home from "@/pages/Home";
import Placeholder from "@/pages/Placeholder";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Placeholder title="About" />} />
        <Route path="academics" element={<Placeholder title="Academics" />} />
        <Route path="admissions" element={<Placeholder title="Admissions" />} />
        <Route path="gallery" element={<Placeholder title="Gallery" />} />
        <Route path="contact" element={<Placeholder title="Contact" />} />
      </Route>
    </Routes>
  );
}