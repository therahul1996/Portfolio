import React from "react";
import "./style.css";
import projectData from "./project.json";
import ProjectBox from "../content/ProjectBox";
const ProjectList = () => {
  return (
    <>
      {/* Tech: React.js, Tailwind, AWS Cognito, PWA, GraphQL, Node.js.  */}
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
            techStack={project.techStack}
          />
        );
      })}
    </>
  );
};

export default ProjectList;
