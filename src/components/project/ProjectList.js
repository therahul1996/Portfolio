import React from 'react'
import './style.css'
import projectData from './project.json'
import ProjectBox from '../content/ProjectBox'
const ProjectList = () => {
  return (
    <>
    <p className='length-result'>We Found {projectData.length} results for Projects</p>
     {projectData.map((project, id) => {
         return(
             <ProjectBox 
             key={id} 
             icon={project.iconurl}
             name={project.name}
             urlLink={project.urlLink} 
             title={project.title}
             description={project.description} 
             />
         )
 })}
 </>
  )
}

export default ProjectList