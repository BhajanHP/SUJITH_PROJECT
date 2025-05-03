import '../App.css';
import Card4 from './Card4';
import img1 from './Images/3d-proj-p.jpg';
import img2 from './Images/E-com-p.jpg';
import img3 from './Images/BC-p.jpg';
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
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        className="video-element"
        playsInline
        loop
        muted
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
      setIsMobileOrTablet(window.innerWidth <= 568);
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
        <VideoBox src={vid1} poster={img1} />
        <VideoBox src={vid2} poster={img2} />
        <VideoBox src={isMobileOrTablet ? vid6 : vid5} poster={img3} isCenter={!isMobileOrTablet} />
        <VideoBox src={vid3} poster={img2} />
        <VideoBox src={vid4} poster={img2} />
      </div>
    </div>
  );
}

export default Projects;
