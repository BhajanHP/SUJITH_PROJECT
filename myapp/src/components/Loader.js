import '../App.css';

// components/Loader.js
import React from 'react';
import '../App.css';
import img2 from './Images/afn.png';

function Loader() {
  return (
    <div className="loader-container">
      {/* <div className="branding-logo">Branding Bots</div> */}
      <img src={img2} alt="logo not found"></img>
      {/* <div className="spinner"></div> */}
    </div>
  );
}

export default Loader;