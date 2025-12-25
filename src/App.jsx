import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      {/* Global background wrapper */}
      <div className="min-h-screen bg-gray-900 text-white">
        
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content (below navbar) */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            {/* <Route path="/contact" element={<Contact />} />  */}
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}
