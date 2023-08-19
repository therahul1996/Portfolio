import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Footer = () => {
  return (
    <footer className='bottom-footer-sec'>
        <nav>
        <ul>
            <li>
              <Link to={'/profile'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/'}>© 2023 Rahul Kumar Sahu All right reserved</Link>
            </li>
          </ul>
        </nav>
      </footer>
  )
}

export default Footer