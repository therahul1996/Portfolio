import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import ContactUs from '../../components/contact/ContactUs'
import Seo from '../../components/seo/Seo'
const Contact = () => {
  return (
    <>
    <Seo
    title="Contact - Google Search"
    description="Enhance user engagement with expertly crafted front-end designs. Elevate your online presence through captivating interfaces. Contact us for innovative web solutions."
    keywords="Front End Developer, HTML5, CSS3, JavaScript, Responsive Design, User Experience (UX), Web Design, Mobile-Friendly Design"
    />
    <Header />
    <section>
        <div className='container'>
        <div className='flex flex-sm-collumn-reverse'>
        <div className='left-sec'>
         <ContactUs />
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

export default Contact