import React, { useState } from 'react';
import img from "./Images/BC.jpg";
import img2 from './Images/afn.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img3 from './Images/insta.png';
import img4 from './Images/youtube.png';
import img5 from './Images/facebook.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; 
import Footer from './Footer';

function Branding() {
  const navigate = useNavigate(); 
  return (
   
    <div className="sub-page-container">
      
        {/* Logout Icon */}
        <div className="logout-button" onClick={() => navigate("/")}>
        <FiLogOut size={30} color="white" title="Go to Home" />
      </div>

      <img src={img} alt="Branding and Creative image not found" className="sub-page-images" data-aos="fade-up"/>
      <div className="sub-page-div">
      <h1 className="sub-page-heading" data-aos="zoom-in"> Branding and Creative Solutions</h1>
      {/* font-family "Barlow Condensed", sans-serif  */}

      <h6 style={{color: "#8D8F8E"}} data-aos="fade-up"> Branding bots works with organizations across a diverse spectrum of industries, 
        from startups to established brands to niche players and non-profit organizations. </h6>
       <h6 style={{color: "#8D8F8E"}} data-aos="fade-up"> 
          Branding bots is an Integrated marketing communications agency, focused on creating value
          through brands and enhancing brand equity while exploring new opportunities, transforming
          existing brand practices, and building a stronger brand presence. We specialize in creative
          services from brand strategy and design to activation. Branding bots focuses on developing
          powerful brand identities, digital assets, creative campaigns, and memorable user
          experiences.</h6>
          
           <ul style={{color: "#8D8F8E" , marginTop:'25px'}} data-aos="fade-up"> 
            <li>Brand Identity Consulting (Logo Creation/ Dress Code Design /Visual Merchandising)</li>
            <li>Graphic Designing (Flyers, Brochures, Marketing Collaterals, Posters for Trade Shows, Exhibition )</li>
            <li>Motion graphics videos </li>
            <li>3d (Product animations/cgi ads/exbition stand design)</li>
            <li>Printing (Digital/Offset) </li>
          </ul>
          </div>
          <div  className="footerDiv"  style={{ bottom: '0px',   width: '100%'}}>
          <Footer/>
          </div>
          
    </div>
  );
}

export default Branding;
