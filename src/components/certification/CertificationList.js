import React from 'react'
import './style.css'
import certificationData from './certification.json'
import EducationBox from '../content/EducationBox'
const CertificationList = () => {
  return (
    <>
    <p className='length-result'>We Found {certificationData.length} results for Certificates</p>
     {certificationData.map((certificate, id) => {
         return(
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

export default CertificationList