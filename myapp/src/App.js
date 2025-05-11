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

  useEffect(() => {
    AOS.init({ duration: 1200 });
    const delay = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(delay);
  }, []);

  if (loading) return <Loader />;
  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor:"#51b6ff" // Customize your color
      }}
      outerStyle={{
        border: '3px solid #51b6ff' // Match inner color
      }}
    />
    <Router>
      <Routes>
        {/* Show "Creative" Page Alone When Navigating */}
        <Route path="/creative" element={<Creative />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/socialMediaMarketing" element={<SocialMediaMarketing />} />
        <Route path="/SEO" element={<SearchEngineOpt />} />
        <Route path="/googleAds" element={<GoogleAds />} />

        {/* Show Other Sections Only for Home Page */}
        <Route path="/" element={
          <>
            <FirstPage />
            {/* <LandingPage />
            <PathSlider /> */}
            <About />
            <Services />
            <Projects />
            <ChooseUS />
            <LastComponent />
            {/* <Review />
            <Contact />
            <Footer /> */}
          </>
        } />
      </Routes>
    </Router>
     </>
  );
}


export default App;
