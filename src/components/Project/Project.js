import React from "react";
import ProjectAppStore from "../ProjectAppStore/ProjectAppStore";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ProjNav from "../ProjNav/ProjNav";
import Stack from "../Stack/Stack";
import "./Project.css";

export default function Project(props) {
  return (
    <div id={props.proj.id} className="project__container">
      <h1>{props.proj.title}</h1>
      <div className="screen-split">
        <Stack proj={props.proj} />
        <div className="project__right-split">
          <ProjectCarousel images={props.proj.carousel} />

          {props.proj.appStore && (
            <ProjectAppStore
              icon={props.proj.icon}
              website={props.proj.website}
              appStore={props.proj.appStore}
            />
          )}
          <ProjectDescription text={props.proj.text} />
        </div>
        <ProjNav scrollUp={props.proj.navUp} scrollDown={props.proj.navDown} />
      </div>
    </div>
  );
}
