import React from 'react'
import { NavLink } from 'react-router-dom'
import pagesList from './smallHeaderData.json'
import './style.css'
const SmallHeader = () => {
  return (
    <nav className='small-navbar'>
    <div className='container'>
    <ul>
        {pagesList.map((item, id) => {
           return(
            <li key={id}>
           <NavLink to={item.urlLink}>
            <img src={item.iconurl} alt={item.title} />
            <span>{item.title}</span>
           </NavLink>
         </li>
           )
        })}
    </ul>
    </div>
  </nav>
  )
}

export default SmallHeader