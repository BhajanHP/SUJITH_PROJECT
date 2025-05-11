
import React, { useState } from 'react';
import img from "./Images/Seo.jpg";
import img2 from './Images/afn.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img3 from './Images/insta.png';
import img4 from './Images/youtube.png';
import img5 from './Images/facebook.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; 
import Footer from './Footer';

function SearchEngineOpt(){
  const navigate = useNavigate(); 
  return (
   
    <div className="sub-page-container">
      
        {/* Logout Icon */}
        <div className="logout-button" onClick={() => navigate("/")}>
        <FiLogOut size={30} color="white" title="Go to Home" />
      </div>

      <img src={img} alt="Branding and Creative image not found" className="sub-page-images" data-aos="fade-up"/>
      <div className="sub-page-div" data-aos="fade-up">
      <h1 className="sub-page-heading">Rank Higher, Grow Faster</h1>
      {/* font-family "Barlow Condensed", sans-serif  */}

      <h6 style={{color: "#8D8F8E"}}> Search Engine Optimization (SEO) is the backbone of online visibility, helping brands rank higher on
search engines and attract quality traffic. At Branding Bots, we implement strategic SEO practices to
enhance your digital presence. Our key focus areas include:
 </h6>          
           <ul style={{color: "#8D8F8E" , marginTop:'25px'}}> 
            <li>Keyword Research & Optimization – Identifying and integrating high-ranking keywords to
            boost search visibility.</li>
            <li>On-Page SEO – Optimizing website structure, content, and meta tags for better user
            experience and rankings.</li>
            <li>Technical SEO – Enhancing site speed, mobile-friendliness, and indexing for seamless
            performance. </li>
            <li>Link Building & Off-Page SEO – Establishing credibility through high-quality backlinks and
external engagement.
</li>
            <li>Analytics & Reporting – Tracking and analyzing performance to refine strategies for longterm success.</li>
          </ul>
          </div>
          <div  className="footerDiv"  style={{ bottom: '0px',   width: '100%'}}>
          <Footer/>
          </div>
    </div>
  );
}


export default SearchEngineOpt;
