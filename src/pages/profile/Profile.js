import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import ExperienceList from '../../components/experience/ExperienceList'
import ProjectList from '../../components/project/ProjectList'
import EducationList from '../../components/education/EducationList'
import SkillList from '../../components/skill/SkillList'
import Summary from '../../components/summary/Summary'
import Pagination from '../../components/pagination/Pagination'
import Seo from '../../components/seo/Seo'
import CertificationList from '../../components/certification/CertificationList'

const Profile = () => {
  return (
    <>
    <Seo
    title="Profile - Google Search"
    description="Experienced Front End Developer crafting responsive web solutions. Specializing in HTML, CSS, JavaScript. Committed to creating visually appealing and user-friendly websites."
    keywords="Front End Developer, HTML5, CSS3, JavaScript, Responsive Design, User Experience (UX), Web Design, Mobile-Friendly Design"
    />
      <Header />
      <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
        <Summary />
        <EducationList />
        <ExperienceList />
        <SkillList />
        <ProjectList />
        <CertificationList />
        <Pagination />
        </div>
        <div className='right-sec'>
          <MyProfile />
        </div>
      </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Profile