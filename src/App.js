import "./App.css";
import Landing from "./sections/Landing/Landing";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Landing />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
