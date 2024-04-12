import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const ProfileDropdown = () => {
  const [clickedInside, setClickedInside] = useState(false);
  const myRef = useRef(null);
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedInside(false);
    }
  };

  const handleClickInside = () => {
    setClickedInside(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div className="profile-dropdown">
      <div onClick={handleClickInside} className="dropdown-btn">
        <img src="/images/logo.png" alt="logo" className="w-100" />
      </div>
      <div
        ref={myRef}
        className="dropdown-content"
        style={{ display: clickedInside ? "block" : "none" }}
      >
        <div className="dc-body">
          <div className="flex items-center p-15px">
            <div className="ps-img">
              <img
                src="/images/profile-1.jpeg"
                alt="Rahul Kumar Sahu"
                className="w-100"
              />
            </div>
            <div className="ps-text">
              <h3>Rahul Kumar Sahu</h3>
              <p>Front End Developer</p>
            </div>
          </div>
        </div>
        <Link to="/profile" className="item">
          <img
            src="/images/profile-icon.svg"
            alt="Profile-icon"
            className="w-100"
          />
          <span></span>View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileDropdown;
