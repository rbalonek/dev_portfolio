import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar__container">
      <div className="left-nav">
        <a href="#skills">
          <p>Skills</p>
        </a>
        <a href="#happy-space">
          <p className="left_nav-move">Projects</p>
        </a>
      </div>
      <div className="right-nav">
        <p className="right_nav-move">About</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
