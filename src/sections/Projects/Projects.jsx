import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Project from "../../components/Project/Project";
import "./Projects.css";

import ProjectData from "../../databases/Projects/Projects.js";

export default function Projects() {
  return (
    <div id="projects" className="projects__container">
      <NavBar />
      {ProjectData.length && (
        <>
          {ProjectData.map((proj, index) => (
            <Project key={index + proj} proj={proj} />
          ))}
        </>
      )}
    </div>
  );
}
