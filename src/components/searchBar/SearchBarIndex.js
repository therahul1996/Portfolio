import React from 'react'
import searchIcon from '../images/search.svg'
import audioSearchIcon from '../images/audio-search.svg'
import ReactTyped from "react-typed";
import './style.css'
const SearchBarIndex = () => {
  return (
    <div className='first-search-box'>
            <div className='first-search-bar'>
              <img src={searchIcon} alt='search' className='search-icon' />
              <div className='search-input'>Hi I'm&nbsp;<ReactTyped strings={["Front-End Developer", "UI / UX Designer", "Web Designer"]} typeSpeed={100} loop /></div>
              <img src={audioSearchIcon} alt='audio' className='audio-icon' />
            </div>
          </div>
  )
}

export default SearchBarIndex