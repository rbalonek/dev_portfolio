import "./App.css";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import NavBar from "./components/NavBar/NavBar.jsx";
import Contact from "./sections/Contact/Contact";

// import { useLockBodyScroll } from "react-use";

function App() {
  // useLockBodyScroll(true);

  return (
    <div className="App">
      <Landing />
      <Skills />
      <NavBar />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
