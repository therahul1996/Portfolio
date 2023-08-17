import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import ProjectList from '../../components/project/ProjectList'
import Pagination from '../../components/pagination/Pagination'
import Seo from '../../components/seo/Seo'
const Projects = () => {
  return (
    <>
    <Seo
    title="Projects - Google Search"
    description="Crafting captivating web experiences through innovative Front End development. Seamlessly blending design and functionality for optimal user engagement."
    keywords="Front End Developer, HTML5, CSS3, JavaScript, Responsive Design, User Experience (UX), Web Design, Mobile-Friendly Design"
    />
    <Header />
    <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
          <ProjectList />
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

export default Projects