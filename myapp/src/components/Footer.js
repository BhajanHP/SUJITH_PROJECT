import img3 from './Images/afn.png';
import img4 from './Images/logo1.png';
import img5 from './Images/logo2.png';
import img6 from './Images/logo3.png';
import img7 from './Images/logo4.png';
import '../App.css';
import img8 from './Images/insta.png';
import img9 from './Images/youtube.png';
import img10 from './Images/facebook.png';
import img11 from './Images/linkdin.png';


function Footer(){
    return(
        <div className="footer">
        {/* <div className="marquee-container">
        <div className="marquee-track">
            <img src={img4} alt="Logo 1" />
            <img src={img5} alt="Logo 2" />
            <img src={img6} alt="Logo 3" />
            <img src={img7} alt="Logo 4" />
        </div>
       </div> */}
         <footer className='mainFooter'>
                   <img src={img3} alt="Logo not found" className="footer-logo" />
        
                    {/* Right Side: Social Media Icons */}
                    <div className="footer-icons">
                    <a href="https://www.instagram.com/branding.bots?igsh=MXZrNGljajlwem9tcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <img src={img8} alt="LinkedIn not found" className="footer-icon" /></a>
                    <a href="https://www.youtube.com/@BrandingBots-25" target="_blank" rel="noopener noreferrer">
                    <img src={img9} alt="LinkedIn not found" className="footer-icon" /></a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <img src={img10} alt="LinkedIn not found" className="footer-icon" /></a>
                      <a href="linkedin.com/in/branding-bots-971a71349" target="_blank" rel="noopener noreferrer">
                      <img src={img11} alt="LinkedIn not found" className="footer-icon" /></a>
                    </div>
                    
                  </footer>
                  <hr className='footerhr'></hr>
                  <p className='footer-p'>@ Copyright 2025, All Rights Reserved by BrandingBots </p>
                  <br></br>
        </div>
    )
}

export default Footer;