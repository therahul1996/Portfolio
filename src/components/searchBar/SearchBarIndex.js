import React from "react";
// import { ReactTyped } from "react-typed";
import "./style.css";
const SearchBarIndex = ({ onChange, value, error }) => {
  return (
    <div className="first-search-box">
      <div className="first-search-bar">
        <img src="/images/search.svg" alt="search" className="search-icon" />
        <input
          type="text"
          placeholder="Please search profile, education or else you will get redirect to google search"
          className="search-input"
          onChange={onChange}
          value={value}
        />
        <img
          src="/images/audio-search.svg"
          alt="audio"
          className="audio-icon"
        />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default SearchBarIndex;
