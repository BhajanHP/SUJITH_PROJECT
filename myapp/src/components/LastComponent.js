import Contact from "./Contact";
import Footer from "./Footer";
import Review from "./Review";
import img3 from './Images/afn.png';
import img8 from './Images/insta.png';
import img9 from './Images/youtube.png';
import img10 from './Images/facebook.png';
import img11 from './Images/linkdin.png';

import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function LastComponent(){
    return(
        <div id='LastComponent'>
            {/* <div className="mainFooterDiv">
            <Footer />
            </div> */}
            <Review />
            <Contact />
            <MDBFooter className='text-center text-white'>
           <footer className='subFooter'>
                     <img src={img3} alt="Logo not found" className="footer-logo" />
                     <div className="footer-icons">
                       <a href="https://www.instagram.com/branding.bots" target="_blank" rel="noopener noreferrer">
                         <img src={img8} alt="Instagram" className="footer-icon" />
                       </a>
                       <a href="https://www.youtube.com/@BrandingBots-25" target="_blank" rel="noopener noreferrer">
                         <img src={img9} alt="YouTube" className="footer-icon" />
                       </a>
                       <a href="https://www.facebook.com/profile.php?id=61572486230681&sk=photos" target="_blank" rel="noopener noreferrer">
                         <img src={img10} alt="Facebook" className="footer-icon" />
                       </a>
                       <a href="https://www.linkedin.com/company/branding-bots/" target="_blank" rel="noopener noreferrer">
                         <img src={img11} alt="LinkedIn" className="footer-icon" />
                       </a>
                     </div>
                   </footer>
                   <div className="footer-comp">
                    <hr className='footerhr' />
                    <p className='footer-p mb-5'> {/* mb-5 = margin-bottom: 3rem (~48px) */}
                      © Copyright 2026, All Rights Reserved by BrandingBots
                    </p>
                  </div>
                </MDBFooter>
        </div>
    )
}

export default LastComponent;