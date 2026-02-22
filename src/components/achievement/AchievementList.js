import React from 'react'
import './style.css'
import achievementData from './achievement.json'
import EducationBox from '../content/EducationBox'
const AchievementList = () => {
  return (
    <>
      <p className='length-result'>We Found {achievementData.length} results for Achievement</p>
      {achievementData.toReversed().map((certificate, id) => {
        return (
          <EducationBox
            key={id}
            icon={certificate.iconurl}
            name={certificate.name}
            urlDir={certificate.urlDir}
            urlLink={certificate.urlLink}
            title={certificate.title}
            date={certificate.duration}
            description={certificate.description}
          />
        )
      })}
    </>
  )
}

export default AchievementList