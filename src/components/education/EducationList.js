import React from 'react'
import './style.css'
import educationData from './education.json'
import EducationBox from '../content/EducationBox'
const EducationList = () => {
  return (
    <>
    <p className='length-result'>We Found {educationData.length} results for Education</p>
     {educationData.map((education, id) => {
         return(
             <EducationBox 
             key={id} 
             icon={education.iconurl}
             name={education.name}
             urlDir={education.urlDir} 
             urlLink={education.urlLink} 
             title={education.title} 
             date={education.duration} 
             description={education.description} 
             />
         )
 })}
 </>
  )
}

export default EducationList