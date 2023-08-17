import React from 'react'
import searchIcon from '../images/search.svg'
import audioSearchIcon from '../images/audio-search.svg'
import ReactTyped from "react-typed";
import './style.css'
const SearchBar = () => {
  return (
    <div className='search-bar'>
    <div className='search-input'>Hi I'm&nbsp;<ReactTyped strings={["Front-End Developer", "UI / UX Designer", "Web Designer"]} typeSpeed={100} loop /></div>
    <img src={searchIcon} alt='search' className='search-icon' /> <img src={audioSearchIcon} alt='audio' className='audio-icon' />
  </div>
  )
}

export default SearchBar