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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      setError({ message: "Please write something" });
    } else if (pages.includes(searchQuery.toLocaleLowerCase())) {
      navigate(searchQuery);
    } else {
      window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }
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
              src="/images/google-logo.png"
              alt="google logo"
              className="google-logo"
            />
            <SearchBarIndex
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              error={error.message}
            />

            <div className="search-btn-group">
              <button type="submit" className="btn light-btn">
                Google Resume
              </button>
              <Link to={"/contact"} className="btn light-btn">
                I am Feeling Lucky
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
