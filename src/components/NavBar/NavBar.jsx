import React from "react";
import "./NavBar.css";

import zenscroll from "zenscroll";

export default function NavBar() {
  return (
    <div className="navBar__container">
      <div className="left-nav">
        <a href="#skills">
          <p>Skills</p>
        </a>
        <a href="#bin-certified">
          <p className="left_nav-move">Projects</p>
        </a>
      </div>
      <div className="right-nav">
        <p className="right_nav-move">About</p>

        <a href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
}
