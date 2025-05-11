import React, { useState } from 'react';
import img from "./Images/google_ads_ppc.jpg";
import img2 from './Images/afn.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img3 from './Images/insta.png';
import img4 from './Images/youtube.png';
import img5 from './Images/facebook.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; 
import Footer from './Footer';

function GoogleAds() {
  const navigate = useNavigate(); 
  return (
   
    <div className="sub-page-container">
      
        {/* Logout Icon */}
        <div className="logout-button" onClick={() => navigate("/")}>
        <FiLogOut size={30} color="white" title="Go to Home" />
      </div>

      <img src={img} alt="Branding and Creative image not found" className="sub-page-images" data-aos="fade-up"/>
      <div className="sub-page-div" data-aos="fade-up">
      <h1 className="sub-page-heading" style={{fontWeight: 700 ,color: '#333333'}}>Maximize Clicks, Multiply Conversions
      </h1>
      {/* font-family "Barlow Condensed", sans-serif  */}

      <h6 style={{color: "#8D8F8E" ,fontWeight: 600 }}> Google Ads & Pay-Per-Click (PPC) advertising is a highly effective way to drive
targeted traffic and maximize ROI. At Branding Bots, we create data-driven
campaigns to help businesses generate quality leads and conversions. Our key
strategies include: </h6>
     
          
           <ul style={{color: "#8D8F8E" , marginTop:'25px'}}> 
            <li>Keyword Targeting & Bidding – Selecting high-intent keywords and optimizing bids
            for cost-effective results.</li>
            <li>Ad Copy & Creatives – Crafting compelling ad copies and visuals to attract and
            engage the right audience.</li>
            <li>Landing Page Optimization – Designing high-converting landing pages to enhance
            user experience and conversions.</li>
            <li>A/B Testing & Performance Tracking – Continuously testing different ad variations to
            improve effectiveness.</li>
            <li>Budget Management & ROI Analysis – Ensuring efficient ad spend with real-time
            tracking and optimization. </li>
          </ul>
          </div>
          <div  className="footerDiv"  style={{ bottom: '0px',   width: '100%'}}>
          <Footer/>
          </div>
    </div>
  );
}

export default GoogleAds;
