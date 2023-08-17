import React from 'react'
import './style.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MyProfile from '../../components/myProfile/MyProfile'
import ContactUs from '../../components/contact/ContactUs'
const Contact = () => {
  return (
    <>
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