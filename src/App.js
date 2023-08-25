import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";
import Experience from "./pages/Experience";

function App() {
  return (
    <main>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Home />} />
          <Route path="resume" element={<Home />} />
          <Route path="contact" element={<Home />} />
        </Routes>
    </main>
  );
}

export default App