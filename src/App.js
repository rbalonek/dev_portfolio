import "./App.css";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import NavBar from "./components/NavBar/NavBar.jsx";
import Contact from "./sections/Contact/Contact";

import { initGA, PageView, Event } from "./Tracking";

function App() {
  initGA(process.env.REACT_APP_GA_KEY);
  PageView();
  return (
    <div className="App">
      <Landing Event={Event} />
      <Skills />
      <NavBar />
      <Projects Event={Event} />
      <About />
      <Contact Event={Event} />
    </div>
  );
}

export default App;
