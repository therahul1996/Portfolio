import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import EducationList from '../../components/education/EducationList'
import Pagination from '../../components/pagination/Pagination'
import Seo from '../../components/seo/Seo'
const Education = () => {
  return (
    <>
    <Seo
    title="Education - Google Search"
    description="Crafting engaging, user-centric interfaces for educational platforms. Expert in HTML, CSS, and JavaScript. Enhancing online learning experiences through responsive design and intuitive navigation."
    keywords="Front End Developer, HTML5, CSS3, JavaScript, Responsive Design, User Experience (UX), Web Design, Mobile-Friendly Design"
    />
      <Header />
      <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
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

export default Education