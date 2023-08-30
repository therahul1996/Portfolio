import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import Pagination from '../../components/pagination/Pagination'
import Seo from '../../components/seo/Seo'
import CertificationList from '../../components/certification/CertificationList'
const Certification = () => {
  return (
    <>
    <Seo
    title="Certification - Google Search"
    description="Explore my portfolio certificate page, showcasing a diverse range of projects that highlight my skills and expertise. From web development to design, see how I've brought ideas to life. Browse through and witness the creativity and innovation firsthand."
    keywords="Portfolio Certificate Page, Skills and Expertise, Design Portfolio, Portfolio Display"
    />
      <Header />
      <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
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

export default Certification