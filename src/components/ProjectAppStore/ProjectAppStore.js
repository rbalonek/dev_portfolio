import React from "react";
import "./ProjectAppStore.css";

export default function ProjectAppStore(props) {
  return (
    <div className="app-store-icon-split">
      <a target="_blank" rel="noopener noreferrer" href={props.website}>
        <img className="project__app-store" alt="icon" src={props.appStore} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={props.website}>
        <img className="project__icon" alt="appStore" src={props.icon} />
      </a>
    </div>
  );
}
