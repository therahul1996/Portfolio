import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import profileData from "./myPofile.json";
import { ReactTyped } from "react-typed";
const MyProfile = () => {
  return (
    <div className="profile-card">
      <div className="pc-im">
        <img
          src={profileData.profileImg}
          alt={profileData.name}
          className="img-fluid"
          loading="lazy"
        />
      </div>
      <div className="name-sec">
        <div className="name-and-logo">
          <div>
            <h3 className="name">{profileData.name}</h3>
            <p className="designation">
              <ReactTyped
                strings={[
                  "React Js Developer",
                  "Front End Developer",
                  "UI / UX Designer",
                  "Web Designer",
                ]}
                typeSpeed={100}
                loop
              />
            </p>
          </div>
          <div>
            <img
              src={profileData.logo}
              alt={profileData.logo}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="email-call-btn">
          <button
            className="btn"
            onClick={() => (window.location = "mailto:rs9097737511@gmail.com")}
          >
            Email
          </button>
          <button
            className="btn"
            onClick={() => (window.location = "tel:9097737511")}
          >
            Call
          </button>
        </div>
      </div>
      <div className="other-details-sec">
        <p className="address">
          <b>Address:</b>&nbsp;{profileData.address}
        </p>
        <p className="available">
          <b>Available:</b>&nbsp;{profileData.available}
        </p>
        <p className="email">
          <b>Email:</b>&nbsp;{profileData.email}
        </p>
        <p className="phone">
          <b>Phone:</b>&nbsp;{profileData.phone}
        </p>
        <h4 className="small-head">About</h4>
        <p className="small-desc">"{profileData.about}"</p>
        <h4 className="small-head">Profile</h4>
        <ul className="social-list">
          {profileData.social.map((social, id) => {
            return (
              <li key={id}>
                <Link to={social.urlLink} target="_blank">
                  <img
                    src={social.iconurl}
                    alt={social.title}
                    className="img-fluid"
                  />
                  <span>{social.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
