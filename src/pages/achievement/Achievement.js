import React from "react";
import "./style.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import MyProfile from "../../components/myProfile/MyProfile";
import Pagination from "../../components/pagination/Pagination";
import Seo from "../../components/seo/Seo";
import AchievementList from "../../components/achievement/AchievementList";
const Achievement = () => {
  return (
    <>
      <Seo
        title="Achievement - Google Search"
        description="Explore my portfolio achievement page, showcasing a diverse range of projects that highlight my skills and expertise. From web development to design, see how I've brought ideas to life. Browse through and witness the creativity and innovation firsthand."
        keywords="Portfolio Achievement Page, Skills and Expertise, Design Portfolio, Portfolio Display"
      />
      <Header />
      <section>
        <div className="container">
          <div className="flex flex-sm-collumn-reverse">
            <div className="left-sec">
              <AchievementList />
              <Pagination />
            </div>
            <div className="right-sec">
              <MyProfile />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Achievement;
