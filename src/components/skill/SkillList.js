import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import skillData from './skill.json'
const SkillList = () => {
  return (
    <>
       <div key={skillData.id} className='skill-box'>
            <Link className='skill-main-head' target="_blank">{skillData.name}</Link>
            <p className='skill-desc'>{skillData.description}</p>
            {skillData.skillHeading.map((skillHead, id) => {
              return(
               <div key={id}>
                <h3 className='skill-head'>{skillHead.heading}</h3>
                <ul className='skill-list'>
                  {skillHead.list?.map((list, id) => {
                    return (
                      <li key={id}>
                        <div className='skill-item'>
                          <span>{list.id}</span>
                          <label>{list.name}</label>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                </div>
              )
            })}
          </div >
    </>
  )
}

export default SkillList