import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar__container">
      <div className="left-nav">
        <p>Skills</p>
        <p className="left_nav-move">Projects</p>
      </div>
      <div className="right-nav">
        <p className="right_nav-move">About</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
