import "./ProjectsUpd.css";

import img1 from "./Photography/01.jpg";
import img2 from "./Photography/03.jpg";
import img3 from "./Photography/14.jpg";
import img4 from "./Photography/15.jpg";
import img5 from "./Photography/16.jpg";
import img6 from "./Photography/17.jpg";
import img7 from "./Photography/18.jpg";
import img8 from "./Photography/19.jpg";
import img9 from "./Photography/21.jpg";
import img10 from "./Photography/Cake - M.jpg";
// import img11 from "./Photography/cover.jpg";
import img12 from "./Photography/cxvcv.jpg";
// import img13 from "./photography/layout.jpg";

function ProjectDetails() {
  return (
    <div className="project-details-wrapper">
      <h2 className="project-details-title">PHOTOGRAPHY</h2>
      {/* <hr id="project-hr"></hr> */}

      <div className="project-details-gallery">
        <img src={img1} alt="Project view 1" />
        <img src={img2} alt="Project view 2" />
        <img src={img3} alt="Project view 3" />
         <img src={img4} alt="Project view 4" />
         <img src={img5} alt="Project view 5" />
        <img src={img6} alt="Project view 6" />
        <img src={img7} alt="Project view 7" />
         <img src={img8} alt="Project view 8" />
         <img src={img9} alt="Project view 9" />
        <img src={img10} alt="Project view 10" />
        {/* <img src={img13} alt="Project view 11" /> */}
         <img src={img12} alt="Project view 12" />
         {/* <img src={img13} alt="Project view 13" /> */}
      </div>
    </div>
  );
}

export default ProjectDetails;
