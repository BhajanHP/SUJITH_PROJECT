import React, { useState } from 'react';
import img from "./Images/social_media_marketing.jpg";
import img2 from './Images/afn.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img3 from './Images/insta.png';
import img4 from './Images/youtube.png';
import img5 from './Images/facebook.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; 
import Footer from './Footer';

function SocialMediaMarketing(){
  const navigate = useNavigate(); 
  return (
   
    <div className="sub-page-container">
      
        {/* Logout Icon */}
        <div className="logout-button" onClick={() => navigate("/")}>
        <FiLogOut size={30} color="white" title="Go to Home" />
      </div>

      <img src={img} alt="Branding and Creative image not found" className="sub-page-images" />
      <div className="sub-page-div">
      <h1 className="sub-page-heading">Engage, Influence, Convert</h1>
      {/* font-family "Barlow Condensed", sans-serif  */}

      <h6 style={{color: "#8D8F8E"}}>Social media marketing is a powerful tool for engaging audiences and driving brand growth.
At Branding Bots, we leverage these platforms to create meaningful connections and boost
your online presence. Our comprehensive approach includes: </h6>
      
           <ul style={{color: "#8D8F8E" , marginTop:'25px'}}> 
            <li>Content Creation & Curation – Crafting visually appealing and relevant content that
            tells your brand story. </li>
            <li>Targeted Advertising – Utilizing data-driven strategies to reach and convert your ideal
            audience</li>
            <li>Community Engagement – Building and nurturing a loyal customer base through authentic
            interactions</li>
            <li>Analytics & Insights – Measuring performance to optimize campaigns and drive continuous
improvement.
</li>
            <li>Trend Adaptation – Staying ahead by integrating the latest trends and technologies
            into your strategy.</li>
          </ul>
          </div>
          <div  className="footerDiv"  style={{ bottom: '0px',   width: '100%'}}>
          <Footer/>
          </div>
    </div>
  );
}

export default SocialMediaMarketing;
