import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'animate.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LandingPage from './components/LandingPage';
import About from './components/About';
import Services from './components/Services';
import ChooseUS from './components/ChooseUS';
import Review from './components/Review';
import Projects from './components/Projects';


import ProjectsUpd from './components/ProjectsUpd';
import ProjectDetails from "./components/ProjectDetails";
import ProjectDetails2 from "./components/ProjectDetails2";
import ProjectDetails3 from "./components/ProjectDetails3";
import ProjectDetails4 from "./components/ProjectDetails4";
import ProjectDetails5 from "./components/ProjectDetails5";
import ProjectDetails6 from "./components/ProjectDetails6";

import Contact from './components/Contact';
import Footer from './components/Footer';

import Creative from "./components/Creative";
import Ecommerce from './components/Ecommerce';
import Branding from './components/Branding';
import GoogleAds from './components/GoogleAds';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import SearchEngineOpt from './components/SearchEngineOpt';
import Loader from './components/Loader'; 
import LastComponent from './components/LastComponent';
import PathSlider from './components/PathSlider';
import FirstPage from './components/FirstPage';
import AnimatedCursor from "react-animated-cursor"






function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    const delay = setTimeout(() => setLoading(false), 4000);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024); 
    };
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      clearTimeout(delay);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#51b6ff"
          }}
          outerStyle={{
            border: '3px solid #51b6ff'
          }}
        />
      )}
      <Router>
        <Routes>
          <Route path="/creative" element={<Creative />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/socialMediaMarketing" element={<SocialMediaMarketing />} />
          <Route path="/SEO" element={<SearchEngineOpt />} />
          <Route path="/googleAds" element={<GoogleAds />} />

          <Route path="/projects" element={<ProjectsUpd />} />
          <Route path="/projects1" element={<ProjectDetails />} />
          <Route path="/projects2" element={<ProjectDetails2 />} />
          <Route path="/projects3" element={<ProjectDetails3 />} />
          <Route path="/projects4" element={<ProjectDetails4 />} />
          <Route path="/projects5" element={<ProjectDetails5 />} />
          <Route path="/projects6" element={<ProjectDetails6 />} />

          <Route path="/" element={
            <>
              <FirstPage />
              <About />
              <Services />
              {/* <Projects />     */}
              <ProjectsUpd />
              <ChooseUS />
              <LastComponent />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;