import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import SkillList from '../../components/skill/SkillList'
import Pagination from '../../components/pagination/Pagination'
import Seo from '../../components/seo/Seo'
const Skill = () => {
  return (
    <>
     <Seo
    title="Skill - Google Search"
    description="Expert Front End Developer optimizing websites with seamless user experiences. Specializing in SEO-driven design, responsive layouts, and cutting-edge technologies for enhanced online visibility and engagement."
    keywords="Front End Developer, HTML5, CSS3, JavaScript, Responsive Design, User Experience (UX), Web Design, Mobile-Friendly Design"
    />
      <Header />
      <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
          <SkillList />
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

export default Skill