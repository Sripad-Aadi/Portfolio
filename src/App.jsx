import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Home />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;