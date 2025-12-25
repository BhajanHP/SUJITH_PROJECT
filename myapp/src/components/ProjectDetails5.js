import "./ProjectsUpd.css";

import img1 from "./Brand/Brand identity-greencity.jpg";
import img2 from "./Brand/Brand identity-skybean.jpg";
import img3 from "./Brand/Brand identity-novaL-1.jpg";


function ProjectDetails5() {
  return (
    <div className="brand-container">
      <h1 className="brand-title" data-aos="fade-up">Branding Identity & Design</h1>
      <hr className="brand-hr" />

      <div className="brand-grid" data-aos="fade-up">
        <div className="brand-card">
          <img src={img1} alt="Brand Identity Green City" />
        </div>
        <div className="brand-card">
          <img src={img2} alt="Brand Identity NovaL" />
        </div>
        <div className="brand-card">
          <img src={img3} alt="Brand Identity Skybean" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails5;
