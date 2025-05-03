import React, { useState } from 'react';
import img from "./Images/e-com.jpg";
import img2 from './Images/afn.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img3 from './Images/insta.png';
import img4 from './Images/youtube.png';
import img5 from './Images/facebook.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; 
import Footer from './Footer';

function Ecommerce() {
  const navigate = useNavigate(); 
  return (
   
    <div className="sub-page-container">
      
        {/* Logout Icon */}
        <div className="logout-button" onClick={() => navigate("/")}>
        <FiLogOut size={30} color="white" title="Go to Home" />
      </div>

      <img src={img} alt="Branding and Creative image not found" className="sub-page-images" />
      <div className="sub-page-div">
      <h1 className="sub-page-heading"> Transforming Clicks into Conversions</h1>
      {/* font-family "Barlow Condensed", sans-serif  */}

      <h6 style={{color: "#8D8F8E"}}> E-commerce Ads are essential for driving online sales and increasing brand visibility in a competitive
marketplace. At Branding Bots, we design high-performance ad campaigns to attract potential
buyers and boost conversions. Also we are expert in running Ads in Amazon and Flipkart Ads Our key
strategies include: </h6>
      
          
           <ul style={{color: "#8D8F8E" , marginTop:'25px'}}> 
            <li>Top e-commerce brands - We create campaigns and optimization for Amazon and Flipkart
            Ads</li>
            <li>Product Listing Optimization – Creating compelling product titles, descriptions, and images
            to enhance visibility. </li>
            <li>Dynamic Retargeting Ads – Re-engaging potential customers with personalized product
            recommendations.  </li>
            <li>Google Shopping & Marketplace Ads – Leveraging platforms like Google Shopping and
            Amazon Ads for wider reach. </li>
            <li>Social Media & Influencer Ads – Running targeted ads on platforms like Facebook,
            Instagram, and TikTok for maximum engagement. </li>
            <li>Data-Driven Performance Analysis – Continuously tracking and optimizing ad campaigns for
            better ROI and sales growth.</li>
          </ul>
          </div>
          <div  className="footerDiv"  style={{ bottom: '0px',   width: '100%'}}>
          <Footer/>
          </div>
    </div>
  );
}

export default Ecommerce;
