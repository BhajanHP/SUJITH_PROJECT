import '../App.css';
import Card4 from './Card4';
import img1 from './Images/Cover-1.jpg';
import img2 from './Images/cover-2.jpg';
import img3 from './Images/cover-3.jpg';
import img4 from './Images/cover-4.jpg';
import img5 from './Images/cover-5.jpg';
import img6 from './Images/cover-6.jpg';
import vid1 from './Images/3d-vid.mp4';
import vid2 from './Images/love-kaapi-vid.mp4';
import vid3 from './Images/prod-ani-video.mp4';
import vid4 from './Images/E-com-vid.mp4';
import vid5 from './Images/nova_fit.mp4'; 
import vid6 from './Images/nova_fit1.mp4'; 
import React, { useRef, useState, useEffect } from 'react';
import 'animate.css';

const VideoBox = ({ src, poster, isCenter, className }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`video-wrapper ${isCenter ? 'center-video' : ''} ${className || ''}`}
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      onClick={handlePlayButtonClick}
    >
      {!isPlaying && (
        <img
          src={poster}
          alt="Thumbnail"
          className="video-thumbnail"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}

      <button 
        onClick={(e) => {
          e.stopPropagation();
          handlePlayButtonClick();
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '16px',
          paddingLeft: isPlaying ? '0' : '3px',
          transition: 'all 0.2s ease',
          opacity: isPlaying ? 0 : 1,
          pointerEvents: isPlaying ? 'none' : 'auto'
        }}
      >
        {isPlaying ? '' : '▶'}
      </button>

      {isPlaying && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          zIndex: 3,
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '20px',
          padding: '4px 8px',
          color: 'white',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handlePlayButtonClick();
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer',
              padding: '0'
            }}
          >
            ❚❚
          </button>
          <span>Click to pause</span>
        </div>
      )}  
      
      <video
        ref={videoRef}
        src={src}
        className="video-element"
        playsInline
        loop
        muted={false}
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
      setIsMobileOrTablet(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
   <div id="projects" style={{ overflowX: 'hidden' }}>
      <h1 className="projects-container-h1" data-aos="fade-right">
        Check Our Projects With Real Results
      </h1>
      <p className="projects-container-h3-1" data-aos="fade-left">
        Dive into our portfolio and discover the remarkable success stories behind campaign
      </p>
      <p className="projects-container-h3" data-aos="fade-left">
        Explore our work how we can elevate your brand to new heights
      </p>

      {/* <div className="video-grid" data-aos="zoom-in"> */}
      <div className="video-grid" style={{ width: '100%', overflow: 'hidden' }}>
        <VideoBox src={vid1} poster={img1}/>
        <VideoBox src={vid2} poster={img2} />
        <VideoBox 
          src={isMobileOrTablet ? vid6 : vid5} 
          isCenter={!isMobileOrTablet} 
          poster={isMobileOrTablet ? img6 : img5}
        />
        <VideoBox src={vid3} poster={img3} data-aos="zoom-in"/>
        <VideoBox src={vid4} poster={img4} data-aos="zoom-in"/>
      </div>
    </div>
  );
}

export default Projects;