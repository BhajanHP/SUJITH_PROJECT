import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img2 from './Images/afn.png';

function CollapsibleNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar 
        expanded={expanded} 
        expand="lg" 
        bg={expanded ? "dark" : "transparent"}
        variant="dark" 
        style={{ 
          padding: '10px 0',
          position: 'relative' // Added for proper overlay positioning
        }}
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
            style={{ border: 'none' }}
          >
            {expanded ? (
              <span style={{ fontSize: '30px', color: 'white' }}>×</span> 
            ) : (
              <span style={{ fontSize: '30px', color: 'white' }}>☰</span> 
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${expanded ? 'mx-auto text-center' : 'ms-auto'}`} style={{ gap: expanded ? '0' : '5px' }}> 
              <Nav.Link 
                href="#About" 
                onClick={() => setExpanded(false)} 
                style={expanded ? {...navLinkStyle, ...expandedLinkStyle} : navLinkStyle}
                className={`nav-hover-effect ${expanded ? 'expanded-item' : ''}`}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link 
                href="#OurServices" 
                onClick={() => setExpanded(false)} 
                style={expanded ? {...navLinkStyle, ...expandedLinkStyle} : navLinkStyle}
                className={`nav-hover-effect ${expanded ? 'expanded-item' : ''}`}
              >
                OUR SERVICES
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                onClick={() => setExpanded(false)} 
                style={expanded ? {...navLinkStyle, ...expandedLinkStyle} : navLinkStyle}
                className={`nav-hover-effect ${expanded ? 'expanded-item' : ''}`}
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link 
                href="#Testimonials" 
                onClick={() => setExpanded(false)} 
                style={expanded ? {...navLinkStyle, ...expandedLinkStyle} : navLinkStyle}
                className={`nav-hover-effect ${expanded ? 'expanded-item' : ''}`}
              >
                TESTIMONIALS
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                onClick={() => setExpanded(false)} 
                style={expanded ? {...navLinkStyle, ...expandedLinkStyle} : navLinkStyle}
                className={`nav-hover-effect ${expanded ? 'expanded-item' : ''}`}
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style>
        {`
          .nav-hover-effect {
            font-size: 18px;
            position: relative;
            padding: 5px 0;
            transition: all 0.3s ease;
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
            background-color: rgb(68, 146, 224);
            transition: width 0.3s ease;
          }
          .nav-hover-effect:hover::after {
            width: 100%;
          }
          
          /* Expanded mobile menu overlay styles */
          .navbar-collapse.collapsing,
          .navbar-collapse.show {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.95);
            padding: 20px 0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          }
          
          .expanded-item {
            padding: 15px 0 !important;
            margin: 0 25px;
          }
          
          .expanded-item:not(:last-child) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }
          
          @media (max-width: 992px) {
            .navbar-collapse .nav {
              width: 100%;
            }
            .navbar-collapse .nav-link {
              display: block;
              text-align: center;
            }
            .nav-hover-effect::after {
              left: 50%;
              transform: translateX(-50%);
              width: 0;
            }
            .nav-hover-effect:hover::after {
              width: 30%;
            }
          }
          
          /* Prevent body scrolling when menu is open */
          body.navbar-expanded {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}

const navLinkStyle = {
  color: 'white',
  fontWeight: '300',
  letterSpacing: '1px',
};

const expandedLinkStyle = {
  fontSize: '20px',
  fontWeight: '400',
  padding: '15px 0',
  transition: 'all 0.3s ease'
};

export default CollapsibleNavbar;