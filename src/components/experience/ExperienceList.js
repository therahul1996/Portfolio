import React from 'react'
import './style.css'
import experienceData from './experience.json'
import ContentBox from '../content/ContentBox'
const ExperienceList = () => {
  return (
   <>
   <p className='length-result'>We Found {experienceData.length} results for Experiences</p>
    {experienceData.map((experience, id) => {
        return(
            <ContentBox 
            key={id} 
            icon={experience.iconurl}
            name={experience.name}
            urlLink={experience.urlLink} 
            title={experience.title} 
            date={experience.duration} 
            description={experience.description} 
            />
        )
})}
</>
  )
}

export default ExperienceList