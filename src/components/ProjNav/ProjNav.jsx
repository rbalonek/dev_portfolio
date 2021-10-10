import React from "react";
import "./ProjNav.css";

export default function ProjNav(props) {
  return (
    <div className="proj-nav__container">
      <div className="ProjNav__buttons-mobile hideOnDesktop">
        <a alt="skills" href="#skills">
          <p>Skills</p>
        </a>
        <a alt="link" href="#projects">
          <p>Projects</p>
        </a>
        <a alt="link" href="#about">
          <p>About</p>
        </a>
        <a alt="link" href="#contact">
          <p>Contact</p>
        </a>
      </div>
      <a href={`#${props.scrollUp}`}>
        <div className="proj-nav__up">
          <img
            className="proj__nav-arrow"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1611017756/Cherry/Cherry%20Clients/Graphic%20Assets/UpArrow_pefwf1.png"
            alt="up"
          />
        </div>
      </a>
      <a href={`#${props.scrollDown}`}>
        <div className="proj-nav__down">
          <img
            className="proj__nav-arrow"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1611018057/Cherry/Cherry%20Clients/Graphic%20Assets/DownArrow_vjka53.png"
            alt="down"
          />
        </div>
      </a>
    </div>
  );
}

// <div className="ProjNav__button-split top">
//         <div className="ProjNav__left">
//           <p>Skills</p>
//         </div>
//         <div className="ProjNav__right">
//           <p>Projects</p>
//         </div>
//       </div>
// <div className="ProjNav__button-split bottom">
//         <div className="ProjNav__left">
//           <p>About</p>
//         </div>
//         <div className="ProjNav__right">
//           <p>Contact</p>
//         </div>
//       </div>
