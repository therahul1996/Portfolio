import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import socialLists from './social.json'
const SocialLinkDropdown = () => {
        const [clickedInside, setClickedInside] = useState(false);
        const myRef = useRef();
         const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
          setClickedInside(false);
        }
      };
    
      const handleClickInside = () => {
        setClickedInside(true)
    };
    
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      });
    return (
        <div className="social-dropdown">
            <div onClick={handleClickInside} className="dropdown-btn">
                <svg className="gb_j" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
            </div>
            <div className="dropdown-content" ref={myRef} style={{ display: clickedInside ? "block" : "none" }}>
                <div className='dc-body'>
                    <ul>
                        {socialLists.map((social, id) => {
                            return (
                                <li key={id}>
                                    <Link to={social.urlLink} className="item" target="_blank">
                                        <img src={social.iconurl} alt={social.title} className='social-icon' />
                                        <span>{social.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>



                </div>
            </div>
        </div>
    )
}

export default SocialLinkDropdown