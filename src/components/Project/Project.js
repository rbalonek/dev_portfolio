import React from "react";
import ProjectAppStore from "../ProjectAppStore/ProjectAppStore";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ProjNav from "../ProjNav/ProjNav";
import ProjTitleLinks from "../ProjTitleLinks/ProjTitleLinks";

import Stack from "../Stack/Stack";
import "./Project.css";

export default function Project(props) {
  return (
    <div id={props.proj.id} className="project__container">
      <ProjTitleLinks
        Event={props.Event}
        github={props.proj.github}
        website={props.proj.website}
        title={props.proj.title}
      />

      <div className="screen-split">
        <Stack proj={props.proj} />

        <div className="project__right-split">
          <ProjectCarousel Event={props.Event} images={props.proj.carousel} />

          {props.proj.appStore && (
            <ProjectAppStore
              Event={props.Event}
              icon={props.proj.icon}
              website={props.proj.website}
              appStore={props.proj.appStore}
              title={props.proj.title}
            />
          )}
          <ProjectDescription text={props.proj.text} />
        </div>
        <ProjNav scrollUp={props.proj.navUp} scrollDown={props.proj.navDown} />
      </div>
    </div>
  );
}
