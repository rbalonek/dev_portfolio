import React from "react";
import "./ProjectDescription.css";
export default function ProjectDescription(props) {
  return (
    <div className="proj-description__container">
      {props.text.length && (
        <>
          {props.text.map((line) => (
            <>
              <p>{line}</p>
            </>
          ))}
        </>
      )}
    </div>
  );
}
