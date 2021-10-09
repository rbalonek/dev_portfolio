import React from "react";
import "./Stack.css";

export default function Stack(props) {
  return (
    <div className="stack__container">
      {props.proj.stack.length && (
        <>
          {props.proj.stack.map((stackImg, index) => (
            <>
              <img
                className="proj__img"
                key={index + stackImg}
                alt="stack-img"
                src={stackImg}
              />
            </>
          ))}
        </>
      )}
    </div>
  );
}
