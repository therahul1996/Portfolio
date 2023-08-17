import React from 'react';
import { Link } from 'react-router-dom'
import googleLogo from '../images/google-logo.png'
import './style.css'
import HeaderIndex from '../../components/layout/HeaderIndex';
import FooterIndex from '../../components/layout/FooterIndex';
import SearchBarIndex from '../../components/searchBar/SearchBarIndex';
const Home = () => {
  
  return (
    <>
      <HeaderIndex />
      <section className='search-sec'>
        <div className='container'>
          <img src={googleLogo} alt='google logo' className='google-logo' />
          <SearchBarIndex />
          <div className='search-btn-group'>
            <Link to='/profile' className='btn light-btn'>Google Resume</Link>
            <Link to={'/contact'} className='btn light-btn'>I am Feeling Lucky</Link>
          </div>
        </div>
      </section>
      <FooterIndex />
    </>
  )
}

export default Home