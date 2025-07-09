import React from "react";
import "./style.css";
import projectData from "./project.json";
import ProjectBox from "../content/ProjectBox";
const ProjectList = () => {
  return (
    <>
      {/* {
  //   "id": 23,
  //   "iconurl": "/images/projects/axoma.png",
  //   "name": "Axoma",
  //   "urlLink": "https://www.axoma.ai/",
  //   "title": "Axoma AI – GenAI-Powered Document Intelligence Platform",
  //   "description": "Built and enhanced the front-end for Axoma AI, a GenAI-powered document intelligence platform allowing users to upload PDFs and ask natural language questions for context-aware answers."
  // }, */}
      <p className="length-result">
        We Found {projectData.length} results for Projects
      </p>
      {projectData.map((project, index) => {
        return (
          <ProjectBox
            key={index}
            icon={project.iconurl}
            name={project.name}
            urlLink={project.urlLink}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </>
  );
};

export default ProjectList;
