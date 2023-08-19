import React, {useState, useEffect} from 'react'
import ProfileDropdown from '../dropdown/ProfileDropdown'
import SocialLinkDropdown from '../dropdown/SocialLinkDropdown'
import SmallHeader from '../smallHeader/SmallHeader'
import SearchBar from '../searchBar/SearchBar';
import googleLogo from '../images/google-logo.png'
import resume from '../images/Rahul-Kumar-Sahu-CV.pdf'
import { Link } from 'react-router-dom'
import './style.css'
const Header = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  }, [])
  return (
    <>
    <nav className={scroll ? "navbar fixed" : "navbar"}>
      <ul className='flex items-center content-end m-0'>
        <li className='mr-45px'>
          <Link to='/'><img src={googleLogo} alt='google logo' className='nav-logo' /></Link>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    <ul className='flex items-center content-end m-0'>
      <li className='mr-10px'>
        <Link to={resume} target="_blank">Download CV</Link>
      </li>
      <li className='mr-10px'>
        <SocialLinkDropdown />
      </li>
      <li>
        <ProfileDropdown />
      </li>
    </ul>
  </nav>
  <div className='navbar-height'></div>
  <SmallHeader />
    </>
  )
}

export default Header