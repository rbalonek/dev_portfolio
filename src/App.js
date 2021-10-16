import "./App.css";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import NavBar from "./components/NavBar/NavBar.jsx";
import Contact from "./sections/Contact/Contact";

import ReactGA from "react-ga";
ReactGA.initialize("UA-210312980-1");

function App() {
  ReactGA.initialize("UA-210312980-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

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
