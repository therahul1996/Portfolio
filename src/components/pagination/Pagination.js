import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import paginationData from './pagination.json'
const Pagination = () => {
    return (
        <div className='pagination'>
            <ul className='pagination-group'>
                {paginationData.map((pagination, id) => {
                    return (
                        <li key={id}>
                            <Link>
                                <span className='icon' style={{backgroundImage: `url(${pagination.icon})`}}></span>
                                <span className='number'>{pagination.number}</span>
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Pagination