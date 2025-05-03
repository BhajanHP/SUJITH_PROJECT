import React, { useState } from 'react';
import img from "./Images/photography.jpg";
import img2 from './Images/afn.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img3 from './Images/insta.png';
import img4 from './Images/youtube.png';
import img5 from './Images/facebook.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; 
import 'animate.css';
import Footer from './Footer';

function Creative() {
  const navigate = useNavigate(); 
  return (
   
    <div className="sub-page-container">
      
        {/* Logout Icon */}
        <div className="logout-button" onClick={() => navigate("/")}>
        <FiLogOut size={30} color="white" title="Go to Home" />
      </div>

      <img src={img} alt="Branding and Creative image not found" className="sub-page-images" />
      <div className="sub-page-div">
      <h1 className="sub-page-heading"> The Power Visual Story Telling</h1>
      {/* font-family "Barlow Condensed", sans-serif  */}

      <h6 style={{color: "#8D8F8E"}}> Looking for a Video production company ? Want a brand photoshoot done? Need a media
          production company to power-up your social marketing, digital marketing, and corporate
responsibility strategies. Capture product launches, tradeshows, events, conferences, award
ceremonies and other milestones with Branding bots, the preferred marketing agency that
offers complete media production services. </h6>
          
           <ul style={{color: "#8D8F8E" , marginTop:'25px'}}> 
            <li>Product Photoshoot</li>
            <li>Portfolio Photoshoot/Editorial Styling</li>
            <li>Brand Videos for Social Media  </li>
            <li>Corporate Films/Audio Visuals  </li>
            <li>Event Videography & Photography  </li>
            <li>Explainer Videos  </li>
          </ul>
          </div>
          <div  className="footerDiv"  style={{ bottom: '0px',   width: '100%'}}>
          <Footer/>
          </div>
    </div>
  );
}

export default Creative;
