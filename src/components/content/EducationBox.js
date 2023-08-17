import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const EducationBox = (props) => {
    return (
        <div className='content-box'>
            <div className='content-head'>
                <div className='ch-icon'>
                    <img src={props.icon} alt={props.name} />
                </div>
                <div className='ch-text'>
                    <label>{props.name}</label>
                    <span>{props.urlDir}</span>
                </div>
            </div>
            <Link to={props.urlLink} className='main-head' target="_blank">{props.title}</Link>
            <p className='desc'>
                <span>{props.date}</span>&nbsp;
                {props.description}
            </p>
        </div >
    )
}

export default EducationBox