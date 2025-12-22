import "./ProjectsUpd.css";

import img1 from "./social_media/1.jpg";
import img2 from "./social_media/2.jpg";
import img3 from "./social_media/3.jpg";
import img4 from "./social_media/4.jpg";
import img5 from "./social_media/5.jpg";
import img6 from "./social_media/6.jpg";
import img7 from "./social_media/7.jpg";
import img8 from "./social_media/8.jpg";
import img9 from "./social_media/9.jpg";
import img10 from "./social_media/10.jpg";

import vid1 from "./social_media/02.mp4";
import vid2 from "./social_media/fenesta.mp4";
import vid3 from "./social_media/instax.mp4";
import vid4 from "./social_media/REEL.mp4";
import vid5 from "./social_media/RENDER_ME.mp4";

function ProjectDetails4() {
  return (
    <div className="brand-container">
      <h1 className="brand-title">Social Media</h1>

      {/* VIDEO SECTION */}
      {/* <h2 className="media-subtitle">Videos</h2> */}

      

      {/* IMAGE SECTION */}
      <div className="brand-grid">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img10].map(
          (img, index) => (
            <div className="brand-card" key={`img-${index}`}>
              <img src={img} alt={`Social Media ${index + 1}`} />
            </div>
          )
        )}
      </div>

      {/* <div className="video-grid">
        {[vid1, vid2, vid3, vid4, vid5].map((vid, index) => (
          <div className="video-card" key={`vid-${index}`}>
            <video
              src={vid}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div> */}

    </div>
  );
}

export default ProjectDetails4;
