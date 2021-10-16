import React, { useState } from "react";
import "./SpinnyDiv.css";

export default function SpinnyDiv(props) {
  const [spinStateDiv, updateSpinStateDiv] = useState("spinny-div");
  const [spinStateIcon, updateSpinStateIcon] = useState("spinny-icon");
  const [spinStateTitle, updateSpinStateTitle] = useState("none");

  const hoverEffect = () => {
    updateSpinStateDiv("no-spinny-div");
    updateSpinStateIcon("no-spinny-icon");
    updateSpinStateTitle("show");
  };

  return (
    <div onMouseEnter={hoverEffect} className={spinStateDiv}>
      <h1 className={spinStateTitle}>{props.title}</h1>
      {props.imgArray && (
        <>
          {props.imgArray.map((image, index) => (
            <div key={index}>
              <img
                key={index + `$image.name`}
                className={spinStateIcon}
                alt="spin"
                src={image.src}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
