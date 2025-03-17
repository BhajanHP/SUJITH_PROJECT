import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img1 from './Images/cover.png';
import img2 from './Images/afn.png';

function CollapsibleNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
      <Navbar expanded={expanded} expand="lg" bg="transparent" variant="dark" > {/* bg="transparent" */}
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white' }}>
            <img
              src={img2}
              alt="Logo"
              height="50" // Adjust height as needed
              className="d-inline-block align-top"
              id="logo"
            />
            {' '} {/* Add space between image and text if needed */}
            {/* My App */}
          </Navbar.Brand>
         {/* Toggle Button Always Visible */}
         <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => setExpanded(false)} style={{ color: 'white' }}>HOME</Nav.Link>
              <Nav.Link href="#features" onClick={() => setExpanded(false)} style={{ color: 'white' }}>ABOUT US</Nav.Link>
              <Nav.Link href="#pricing" onClick={() => setExpanded(false)} style={{ color: 'white' }}>OUR SERVICES</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)} style={{ color: 'white' }}>PORTFOLIO</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)} style={{ color: 'white' }}>TESTIMONIALS</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)} style={{ color: 'white' }}>PORTFOLIO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            <h1>POWERING</h1>
            <h1>BRANDS</h1>
            <h1>DELIVERING</h1>
            <h1>IMPACTx</h1>
    </div>
  );
}

export default CollapsibleNavbar;