import React from "react";
import "./Landing.css";
import { Fade } from "react-awesome-reveal";

export default function Landing() {
  return (
    <div className="landing__container">
      <h1>Robert Balonek</h1>
      <h3>Software Engineer</h3>
      <Fade delay={1000} duration={2000} triggerOnce={true}>
        <a href="#skills">
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </Fade>
    </div>
  );
}
