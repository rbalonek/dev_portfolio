import React from "react";
import SpinnySkills from "../../components/SpinnySkills/SpinnySkills";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="skills" className="skills__container">
      <h1>SKILLS</h1>
      <SpinnySkills />
      <div>
        <a href="#happy-space">
          <div className="arrow__holder">
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
