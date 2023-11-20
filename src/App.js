import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills"
import Resume from "./pages/Resume";
import "./App.css"

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Home />} />
        </Routes>
    </>
  );
}

export default App