import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const ProjectBox = (props) => {
  return (
    <div className='content-box'>
      <div className='content-head'>
        <div className='ch-icon'>
          <img src={props.icon} alt={props.name} />
        </div>
        <div className='ch-text'>
          <label>{props.name}</label>
          <span>{props.urlLink}</span>
        </div>
      </div>
      <Link to={props.urlLink} className='main-head' target="_blank">{props.title}</Link>
      <p className='desc'>{props.description}</p>
      {props.techStack && (
        <div className='tech-stack'>
          {props.techStack.map((tech, idx) => (
            <span key={idx} className='tech-tag'>{tech}</span>
          ))}
        </div>
      )}
    </div >
  )
}

export default ProjectBox