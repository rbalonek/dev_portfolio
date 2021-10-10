import React from "react";
import "./ProjectAppStore.css";
import { Roll, AttentionSeeker } from "react-awesome-reveal";

export default function ProjectAppStore(props) {
  return (
    <div className="app-store-icon-split">
      <AttentionSeeker effect="tada" delay="200">
        <a target="_blank" rel="noopener noreferrer" href={props.website}>
          <img className="project__app-store" alt="icon" src={props.appStore} />
        </a>
      </AttentionSeeker>

      <Roll direction="left" delay="100">
        <AttentionSeeker effect="tada" delay="200">
          <a target="_blank" rel="noopener noreferrer" href={props.website}>
            <img className="project__icon" alt="appStore" src={props.icon} />
          </a>
        </AttentionSeeker>
      </Roll>
    </div>
  );
}
