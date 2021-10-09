import React from "react";
import "./ProjNav.css";

export default function ProjNav(props) {
  return (
    <div className="proj-nav__container">
      <div className="proj-nav__up">
        <a href={`#${props.scrollUp}`}>
          <img
            className="proj__nav-arrow"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1611017756/Cherry/Cherry%20Clients/Graphic%20Assets/UpArrow_pefwf1.png"
            alt="up"
          />
        </a>
      </div>
      <div className="proj-nav__down">
        <a href={`#${props.scrollDown}`}>
          <img
            className="proj__nav-arrow"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1611018057/Cherry/Cherry%20Clients/Graphic%20Assets/DownArrow_vjka53.png"
            alt="down"
          />
        </a>
      </div>
    </div>
  );
}
