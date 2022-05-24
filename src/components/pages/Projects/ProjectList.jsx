import React from "react";
import "./projectList.css";
import Projects from "./Projects";
import data from "../../../data";
const ProjectList = () => {
  return (
    <div id="projects" className="project-list">
      <div className="project-list-texts">
        <h1 className="project-list-title">My Projects</h1>
        {/* <p className="project-list-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          exercitationem tenetur quis culpa ratione odit!
        </p> */}
      </div>
      <div className="projects-list">
          {data.map((item)=>{ return <Projects id={item.id} img={item.img} link={item.link}/> 
          })}
  
      </div>
    </div>
  );
};

export default ProjectList;
