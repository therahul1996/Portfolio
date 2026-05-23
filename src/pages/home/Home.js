import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import HeaderIndex from "../../components/layout/HeaderIndex";
import FooterIndex from "../../components/layout/FooterIndex";
import SearchBarIndex from "../../components/searchBar/SearchBarIndex";
import Seo from "../../components/seo/Seo";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState({ message: "" });
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
    <>
      <Seo
        title="Home - Google Search"
        description="Crafting captivating web experiences through innovative Front End development. Elevate your online presence with seamless design, interactivity, and user engagement. Expertise in responsive layouts and modern technologies."
        keywords="Front End Developer, HTML5, CSS3, JavaScript, Responsive Design, User Experience (UX), Web Design, Mobile-Friendly Design"
      />
      <HeaderIndex />
      <section className="search-sec">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <img
              src="/images/google-logo-my.png"
              alt="google logo"
              className="google-logo"
            />
            <SearchBarIndex
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onVoiceSearch={handleVoiceSearch}
              error={error.message}
            />

            <div className="search-btn-group">
              <button type="submit" className="btn light-btn">
                Search Resume
              </button>
              <Link to={"/contact"} className="btn light-btn">
                Contact Me
              </Link>
            </div>
          </form>
        </div>
      </section>
      <FooterIndex />
    </>
  );
};

export default Home;
