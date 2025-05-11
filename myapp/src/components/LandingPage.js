// import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import img1 from './Images/cover.png';
// import img2 from './Images/afn.png';
// import { matchRoutes } from 'react-router-dom';

// function CollapsibleNavbar() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     // <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
//       <div>
//       <Navbar expanded={expanded} expand="lg" bg="transparent" variant="dark" >
//         <Container>
//           <Navbar.Brand href="#home" style={{ color: 'white' }}>
//             <img
//               src={img2}
//               alt="Logo"
//               height="50" 
//               className="d-inline-block align-top"
//               id="logo"
//               style={{ marginLeft: '-20px' ,marginTop:'2px'}}
//             />
//           </Navbar.Brand>
//          <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={() => setExpanded(expanded ? false : "expanded")}
//           />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" onClick={() => setExpanded(false)} style={{ color: 'white' }}>HOME</Nav.Link>
//               <Nav.Link href="#AboutUs" onClick={() => setExpanded(false)} style={{ color: 'white' }}>ABOUT US</Nav.Link>
//               <Nav.Link href="#OurServices" onClick={() => setExpanded(false)} style={{ color: 'white' }}>OUR SERVICES</Nav.Link>
//               <Nav.Link href="#projects" onClick={() => setExpanded(false)} style={{ color: 'white' }}>PORTFOLIO</Nav.Link>
//               <Nav.Link href="#Testimonials" onClick={() => setExpanded(false)} style={{ color: 'white' }}>TESTIMONIALS</Nav.Link>
//               <Nav.Link href="#contact" onClick={() => setExpanded(false)} style={{ color: 'white' }}>CONTACT US</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default CollapsibleNavbar;












import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img1 from './Images/cover.png';
import img2 from './Images/afn.png';

function CollapsibleNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar 
        expanded={expanded} 
        expand="lg" 
        bg={expanded ? "dark" : "transparent"} // Adds background when expanded
        variant="dark" 
        style={{ padding: '10px 0' }} // Increased navbar padding
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white' }}>
          <img
          src={img2}
          alt="Logo"
          height="50"
          className="d-inline-block align-top"
          id="logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
            style={{ border: 'none' }} // Removes default border
          >
            {expanded ? (
              <span style={{ fontSize: '30px', color: 'white' }}>×</span> // Custom close icon
            ) : (
              <span style={{ fontSize: '30px', color: 'white' }}>☰</span> // Custom hamburger icon
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{ gap: '5px' }}> {/* Added gap between items */}
              <Nav.Link 
                href="#AboutUs" 
                onClick={() => setExpanded(false)} 
                style={navLinkStyle}
                className="nav-hover-effect"
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link 
                href="#OurServices" 
                onClick={() => setExpanded(false)} 
                style={navLinkStyle}
                className="nav-hover-effect"
              >
                OUR SERVICES
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                onClick={() => setExpanded(false)} 
                style={navLinkStyle}
                className="nav-hover-effect"
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link 
                href="#Testimonials" 
                onClick={() => setExpanded(false)} 
                style={navLinkStyle}
                className="nav-hover-effect"
              >
                TESTIMONIALS
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                onClick={() => setExpanded(false)} 
                style={navLinkStyle}
                className="nav-hover-effect"
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Add this CSS in your stylesheet or as a style tag */}
      <style>
        {`
          .nav-hover-effect {
            font-size: 18px; /* Bigger text */
            position: relative;
            padding: 5px 0;
          }
          .nav-hover-effect:hover {
            color: #4da6ff !important;
          }
          .nav-hover-effect::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color:rgb(68, 146, 224);
            transition: width 0.3s ease;
          }
          .nav-hover-effect:hover::after {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

// Style object for nav links
const navLinkStyle = {
  color: 'white',
  fontWeight: '400',
  letterSpacing: '1px',
};

export default CollapsibleNavbar;