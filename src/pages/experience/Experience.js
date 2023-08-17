import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import ExperienceList from '../../components/experience/ExperienceList'
import Pagination from '../../components/pagination/Pagination'
import Seo from '../../components/seo/Seo'
const Experience = () => {
  return (
    <>
    <Seo
    title="Experience - Google Search"
    description="Crafting exceptional user experiences through responsive web design. Implementing SEO best practices for improved visibility. Elevate engagement with seamless navigation and interactive interfaces."
    keywords="Front End Developer, HTML5, CSS3, JavaScript, Responsive Design, User Experience (UX), Web Design, Mobile-Friendly Design"
    />
      <Header />
      <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
          <ExperienceList />
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

export default Experience