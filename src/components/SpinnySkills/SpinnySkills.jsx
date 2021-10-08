import React from "react";
import SpinnyDiv from "./SpinnyDiv/SpinnyDiv";
import "./SpinnySkills.css";

import IDEs from "../../databases/Skills/IDEs.js";
import Backend from "../../databases/Skills/Backend.js";
import Cloud from "../../databases/Skills/Cloud";

export default function SpinnySkills() {
  return (
    <div className="spinny-div__container">
      <SpinnyDiv
        imgArray={IDEs}
        // title={"IDEs"}
      />
      <SpinnyDiv
        imgArray={Backend}
        // title={"Skills"}
      />
      <SpinnyDiv
        imgArray={Cloud}
        // title={"Skills"}
      />
    </div>
  );
}
