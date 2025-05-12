import '../App.css';
import img3 from './Images/afn.png';
import img8 from './Images/insta.png';
import img9 from './Images/youtube.png';
import img10 from './Images/facebook.png';
import img11 from './Images/linkdin.png';
import React from 'react';

function Footer(){
  return (
    <div className="footerDiv">
      <div className="footer">
        <footer className='mainFooter'>
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
            <a href="https://linkedin.com/in/branding-bots-971a71349" target="_blank" rel="noopener noreferrer">
              <img src={img11} alt="LinkedIn" className="footer-icon" />
            </a>
          </div>
        </footer>
        <hr className='footerhr' />
        <p className='footer-p'>© Copyright 2025, All Rights Reserved by BrandingBots</p>
        <br />
      </div>
    </div>
  );
}


export default Footer;



// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter className='text-center text-white'>
//       <MDBContainer className='pt-4'>
//         <section className='mb-4'>
//           <MDBBtn
//             // rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             src={img8}
//             role='button'
//           >
//             <MDBIcon fab className='fab fa-facebook-f' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-twitter' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-google' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-instagram' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-linkedin' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright: BrandingBots
//         {/* <a className='text-dark'>
//           MDBootstrap.com
//         </a> */}
//       </div>
//     </MDBFooter>
//   );
// }