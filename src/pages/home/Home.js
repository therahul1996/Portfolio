import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import HeaderIndex from "../../components/layout/HeaderIndex";
import FooterIndex from "../../components/layout/FooterIndex";
import SearchBarIndex from "../../components/searchBar/SearchBarIndex";
import Seo from "../../components/seo/Seo";
const Home = () => {
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
          <img
            src="/images/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <SearchBarIndex />
          <div className="search-btn-group">
            <Link to="/profile" className="btn light-btn">
              Google Resume
            </Link>
            <Link to={"/contact"} className="btn light-btn">
              I am Feeling Lucky
            </Link>
          </div>
        </div>
      </section>
      <FooterIndex />
    </>
  );
};

export default Home;
