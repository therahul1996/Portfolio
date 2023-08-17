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
const Profile = () => {
  return (
    <>
      <Header />
      <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
        <Summary />
        <ExperienceList />
        <SkillList />
        <ProjectList />
        <EducationList />
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