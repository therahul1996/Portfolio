import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState({ message: "" });

  useEffect(() => {
    const path = location.pathname.substring(1); // Remove leading slash
    if (path === "") {
      setSearchQuery("");
    } else {
      setSearchQuery(path);
    }
    setError({ message: "" }); // Clear errors on navigation
  }, [location.pathname]);
  const pages = [
    "profile",
    "education",
    "experience",
    "skill",
    "projects",
    "certification",
    "contact",
  ];

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Browser does not support Speech Recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setTimeout(() => {
        performSearch(transcript);
      }, 500);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setError({ message: "Speech recognition error: " + event.error });
    };
  };

  const performSearch = (queryText) => {
    const query = queryText.toLowerCase().trim();
    if (query === "") {
      setError({ message: "Please write something" });
      return;
    }

    const matchedPage = pages.find(page => page.toLowerCase() === query) ||
      pages.find(page => page.toLowerCase().startsWith(query)) ||
      pages.find(page => page.toLowerCase().includes(query));

    if (matchedPage) {
      navigate(`/${matchedPage}`);
    } else {
      window.location.href = `https://www.google.com/search?q=${queryText}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="first-search-bar">
        <img src="/images/search.svg" alt="search" className="search-icon" />
        <input
          type="text"
          placeholder="Search profile, projects..."
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <img
          src="/images/audio-search.svg"
          alt="audio"
          className="audio-icon"
          onClick={handleVoiceSearch}
          style={{ cursor: "pointer" }}
        />
      </form>
      {error.message && <span className="error-message">{error.message}</span>}
    </div>
  );
};

export default SearchBar;
