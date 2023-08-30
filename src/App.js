import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Experience from './pages/experience/Experience' 
import Projects from './pages/projects/Projects'
import Skill from './pages/skill/Skill'
import Education from './pages/education/Education'
import Contact from './pages/contact/Contact'
import PageNotFound from './pages/errorPage/PageNotFound'
import ScrollToTop from './components/scroll/ScrollToTop'
import Certification from './pages/certification/Certification';


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/education" element={<Education />} ></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/certification" element={<Certification />}></Route>
          <Route path="contact" element={<Contact />} ></Route>
          <Route path="*" element={<PageNotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
