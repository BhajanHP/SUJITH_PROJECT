import '../App.css';
import React, { useRef, useEffect } from 'react';
import '../App.css';
import vid1 from './Images/web.mp4';

function Loader() {

  const videoRef = useRef(null);

  useEffect(() => {
    const tryPlay = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .catch(error => {
            console.log("Auto-play prevented:", error);
          });
      }
    };
    tryPlay();
    const handleFirstInteraction = () => {
      tryPlay();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="loader-container">
      <video
      src={vid1}
      className="startingLogo"
      autoPlay
      muted
      loop
      playsInline></video>
    </div>
  );
}

export default Loader;


