import React from "react";
import ReactTyped from "react-typed";
import "./style.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        Hi I'm&nbsp;
        <ReactTyped
          strings={[
            "React JS Developer",
            "Front-End Developer",
            "UI / UX Designer",
            "Web Designer",
          ]}
          typeSpeed={100}
          loop
        />
      </div>
      <img src="/images/search.svg" alt="search" className="search-icon" />{" "}
      <img src="/images/audio-search.svg" alt="audio" className="audio-icon" />
    </div>
  );
};

export default SearchBar;
