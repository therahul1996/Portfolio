import React from "react";
// import { ReactTyped } from "react-typed";
import "./style.css";
const SearchBarIndex = ({ onChange, value, error, onVoiceSearch }) => {
  return (
    <div className="first-search-box">
      <div className="first-search-bar">
        <img src="/images/search.svg" alt="search" className="search-icon" />
        <input
          type="text"
          placeholder="Search profile, projects or use voice search..."
          className="search-input"
          onChange={onChange}
          value={value}
        />
        <img
          src="/images/audio-search.svg"
          alt="audio"
          className="audio-icon"
          onClick={onVoiceSearch}
          style={{ cursor: "pointer" }}
        />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default SearchBarIndex;
