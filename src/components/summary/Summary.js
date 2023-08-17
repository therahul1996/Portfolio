import React from 'react'
import { Link } from 'react-router-dom'
import summaryData from './summary.json'
import './style.css'
const Summary = () => {
    return (
        <>
            <div key={summaryData.id} className='summary-box'>
                <Link className='summary-main-head'>{summaryData.name}</Link>
                <p className='summary-desc'>
                    {summaryData.description}
                </p>
            </div >
        </>
    )
}

export default Summary