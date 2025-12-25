import "./ProjectsUpd.css";
import { useNavigate } from "react-router-dom";
import "../App.css";
import img1 from "./Cover/photography.jpg";
import img2 from "./Cover/amazon_galary.jpg";
import img3 from "./Cover/web_d.jpg";
import img4 from "./Cover/social_media.jpg";
import img5 from "./Cover/Branding_visual.jpg";
import img6 from "./Cover/Ad_shoots.jpg";

function ProjectsUpd() {
  const navigate = useNavigate();

  return (
    <div className="projects-wrapper">
      <h1 className="projects-container-h1" data-aos="fade-right">
        Check Our Projects With Real Results
      </h1>

      <p className="projects-container-h3-1" data-aos="fade-left">
        Dive into our portfolio & discover the remarkable success stories behind campaign
      </p>

      <p className="projects-container-h3" data-aos="fade-left">
        Explore our work how we can elevate your brand to new heights
      </p>

      <div className="projects-grid">
        <div className="project-card" onClick={() => navigate("/projects5")}>
          <img src={img5} alt="Branding & Visuals" />
          <h3>BRANDING & VISUAL IDENTITY</h3>
        </div>

        <div className="project-card" onClick={() => navigate("/projects2")}>
          <img src={img2} alt="Amazon Gallery" />
          <h3>AMAZON WORK GALLERY</h3>
        </div>

        <div className="project-card" onClick={() => navigate("/projects3")}>
          <img src={img3} alt="Web Development" />
          <h3>WEB DEVELOPMENT</h3>
        </div>

        <div className="project-card" onClick={() => navigate("/projects4")}>
          <img src={img4} alt="Social Media Marketing" />
          <h3>SOCIAL MEDIA DESIGN & VIDEO</h3>
        </div>

        <div className="project-card" onClick={() => navigate("/projects1")}>
          <img src={img1} alt="Photography" />
          <h3>PHOTOGRAPHY</h3>
        </div>

        <div className="project-card" onClick={() => navigate("/projects6")}>
          <img src={img6} alt="Ad Shoots" />
          <h3>AD SHOOTS</h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectsUpd;
