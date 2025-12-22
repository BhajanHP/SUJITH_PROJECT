import "./ProjectsUpd.css";

function ProjectDetails3() {
  return (
    <div className="webdev-container">
       <h1 className="webdev-title">Web Development</h1>
        {/* <hr className="webdev-hr" /> */}


      <div className="webdev-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/o1fidR_DNt0"
          title="Web Development Project"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ProjectDetails3;
