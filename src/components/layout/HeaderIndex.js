import React from "react";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import SocialLinkDropdown from "../dropdown/SocialLinkDropdown";
import { Link } from "react-router-dom";
import "./style.css";
const HeaderIndex = () => {
  return (
    <nav className="navbar-index">
      <ul className="flex items-center content-end m-0">
        <li className="mr-10px">
          <Link to="/images/Rahul-Kumar-Sahu-CV.pdf" target="_blank">
            Download CV
          </Link>
        </li>
        <li className="mr-10px">
          <SocialLinkDropdown />
        </li>
        <li>
          <ProfileDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderIndex;
