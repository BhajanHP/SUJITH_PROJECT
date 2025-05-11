import '../App.css';
import Card4 from './Card4';
import img1 from './Images/Cover-1.jpg';
import img2 from './Images/cover-2.jpg';
import img3 from './Images/cover-3.jpg';
import img4 from './Images/cover-4.jpg';
import img5 from './Images/cover-5.jpg';
import img6 from './Images/cover-6.jpg';
// import img3 from './Images/BC-p.jpg';
import vid1 from './Images/3d-vid.mp4';
import vid2 from './Images/love-kaapi-vid.mp4';
import vid3 from './Images/prod-ani-vid.mp4';
import vid4 from './Images/E-com-vid.mp4';
import vid5 from './Images/nova_fit.mp4'; // hori
import vid6 from './Images/nova_fit1.mp4';  // verti
import React, { useRef, useState, useEffect } from 'react';
import 'animate.css';

const VideoBox = ({ src, poster, isCenter, className }) => {
  const videoRef = useRef(null);
  const [showThumbnail, setShowThumbnail] = useState(true);

  // changes for play button
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768); // Changed to 768 for tablet detection
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setShowThumbnail(false);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setShowThumbnail(true);
    }
  };

  const handlePlayButtonClick = () => {
    if (isMobileOrTablet && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowThumbnail(true);
      } else {
        videoRef.current.play().catch(() => {});
        setShowThumbnail(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`video-wrapper ${isCenter ? 'center-video' : ''} ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {showThumbnail && (
        <img
          src={poster}
          alt="Thumbnail"
          className="video-thumbnail"
          style={{
            // position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}

{isMobileOrTablet && showThumbnail && (
  <button 
    onClick={handlePlayButtonClick}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 3,
      background: 'rgba(0, 0, 0, 0.7)',
      border: 'none',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      fontSize: '24px',
      paddingLeft: '5px' // Adjusts the play symbol position
    }}
  >
    ▶
  </button>
)}

{isMobileOrTablet && isPlaying && (
  <button 
    onClick={handlePlayButtonClick}
    style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      zIndex: 3,
      background: 'rgba(0, 0, 0, 0.7)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      fontSize: '16px'
    }}
  >
    ❚❚
  </button>
)}  



      <video
        ref={videoRef}
        src={src}
        className="video-element"
        playsInline
        loop
        // muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
};

function Projects() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // setIsMobileOrTablet(window.innerWidth <= 568);
      setIsMobileOrTablet(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="projects">
      <h1 className="projects-container-h1" data-aos="fade-right">
        Check Our Projects With Real Results
      </h1>
      <p className="projects-container-h3-1" data-aos="fade-left">
        Dive into our portfolio and discover the remarkable success stories behind campaign
      </p>
      <p className="projects-container-h3" data-aos="fade-left">
        Explore our work how we can elevate your brand to new heights
      </p>

      <div className="video-grid" data-aos="zoom-in">
        {/* for thumbnail Poster Image */}
        <VideoBox src={vid1}  poster={img1}/>
        <VideoBox src={vid2}  poster={img2} />
        {/* <VideoBox src={isMobileOrTablet ? vid6 : vid5} poster={img3} isCenter={!isMobileOrTablet} /> */}
        <VideoBox src={isMobileOrTablet ? vid6 : vid5} isCenter={!isMobileOrTablet} poster={isMobileOrTablet? img6:img5}/>
        <VideoBox src={vid3}  poster={img3} data-aos="zoom-in"/>
        <VideoBox src={vid4} poster={img4} data-aos="zoom-in"/>
      </div>
    </div>
  );
}

export default Projects;
