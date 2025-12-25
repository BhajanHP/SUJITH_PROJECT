import "./ProjectsUpd.css";

import img1 from "./Amazon/1.jpg";
import img2 from "./Amazon/2.jpg";
import img3 from "./Amazon/3.jpg";
import img4 from "./Amazon/13.jpg";
import img5 from "./Amazon/14.jpg";
import img6 from "./Amazon/15.jpg";

function ProjectDetails2() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title" data-aos="fade-up">Amazon Work Gallery</h1>
      <div className="gallery-grid">
        <img src={img1} alt="Amazon Work 1" data-aos="fade-up" />
        <img src={img2} alt="Amazon Work 2" data-aos="fade-up"/>
        <img src={img3} alt="Amazon Work 3" data-aos="fade-up"/>
        <img src={img4} alt="Amazon Work 4" data-aos="fade-up"/>
        <img src={img5} alt="Amazon Work 5" data-aos="fade-up"/>
        <img src={img6} alt="Amazon Work 6" data-aos="fade-up"/>
      </div>
    </div>
  );
}

export default ProjectDetails2;
