import React from "react";
import { ReactTyped } from "react-typed";
import "./style.css";
const SearchBarIndex = () => {
  return (
    <div className="first-search-box">
      <div className="first-search-bar">
        <img src="/images/search.svg" alt="search" className="search-icon" />
        <div className="search-input">
          Hi I'm&nbsp;
          <ReactTyped
            strings={[
              "Front-End Developer",
              "UI / UX Designer",
              "Web Designer",
            ]}
            typeSpeed={100}
            loop
          />
        </div>
        <img
          src="/images/audio-search.svg"
          alt="audio"
          className="audio-icon"
        />
      </div>
    </div>
  );
};

export default SearchBarIndex;
