import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage';
import About from './components/About';
import Services from './components/Services';
import ChooseUS from './components/ChooseUS';
import Review from './components/Review';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Creative from "./components/Creative";

function App() {
  return (
    <Router>
      <Routes>
        {/* Show "Creative" Page Alone When Navigating */}
        <Route path="/creative" element={<Creative />} />

        {/* Show Other Sections Only for Home Page */}
        <Route path="/" element={
          <>
            <LandingPage />
            <About />
            <Services />
            <Projects />
            <ChooseUS />
            <Review />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}


export default App;
