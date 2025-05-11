import '../App.css';

// components/Loader.js
import React from 'react';
import '../App.css';
import img2 from './Images/web.mp4';

function Loader() {
  return (
    <div className="loader-container">
      {/* <div className="branding-logo">Branding Bots</div> */}
      <video
  src={img2}
  className="startingLogo"
  autoPlay
  muted
  loop
  playsInline
></video>

      {/* <div className="spinner"></div> */}
    </div>
  );
}

export default Loader;