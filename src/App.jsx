import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen" style={{ background: 'var(--bg-body)', color: 'var(--text-base)' }}>
          <CustomCursor />
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/skills"    element={<Skills />} />
              <Route path="/projects"  element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certificates" element={<Certificates />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
