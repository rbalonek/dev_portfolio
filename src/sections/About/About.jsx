import React from "react";
import "./About.css";
export default function About() {
  return (
    <div id="about" className="about__container">
      <h1>ABOUT ME:</h1>
      <p>
        I am a software engineer with 15 years experience in marketing, team
        leading, and project driven work in 7 different industries. The variety
        in my career development has given me the opportunity to see multiple
        perspectives when building and accomplishing goals. Having been in awe
        of the technological advances of my lifetime, I am excited to create new
        innovative approaches to improve the quality of life for everyone.
      </p>
      <div className="mobileNavBox">
        <a className="box-div" href="/#">
          <div>
            <p className="box-div__text">Top</p>
          </div>
        </a>
        <a className="box-div" href="#skills">
          <div>
            <p className="box-div__text">Skills</p>
          </div>
        </a>
        <a className="box-div" href="#projects">
          <div>
            <p className="box-div__text">Projects</p>
          </div>
        </a>
        <a className="box-div" href="#contact">
          <div>
            <p className="box-div__text">Contact</p>
          </div>
        </a>
      </div>
    </div>
  );
}
