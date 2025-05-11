import '../App.css';
import Card from './Card';
import img1 from './Images/desgin.png';
import img2 from './Images/CC.png';
import img3 from './Images/e commerce.png';
import img4 from './Images/SMM.png';
import img5 from './Images/SEO.png';
import img6 from './Images/google ads ppc.png';
import { Link } from "react-router-dom"; 
import Creative from './Creative';

import { useNavigate } from 'react-router-dom';



function Services(){
    const navigate = useNavigate();
    return(
       
        <div id="OurServices" data-aos="fade-up" > 
            <h1 className='serviceHeading'  data-aos="fade-up" style={{ fontWeight: 700 }}> Our Services</h1>
        <div className='services card-container'>
        
            {/* <Card image={img1} heading='Branding and Creative Solution' content='Bringing Brands to Life Through Innovative and Design'/>
            <Card image={img2} heading='Creative and Capture' content='Turning ideas into impactful digital experinces'/>
            <Card image={img3} heading='Ecommerce Creative Solution' content='Engaging visuals. Conversion driven design'/>
            <Card image={img4} heading='Social media marketing' content='Engage, grow and convert with strategic content'/>
            <Card image={img5} heading='Search Engine Optimization' content='Boost Visibility , Drive organix growth'/>
            <Card image={img6} heading='Google Ads, PPC' content='Maximize reach. Optimize conversions'/> */}


            {/* Only "Creative" uses routing */}
        {/* <div className="card">
          <img src={img1} alt="image" className="servisesImg" />
          <b><h6 className="card-h3">Branding and Creative Solution</h6></b>
          <p className="card-p">Bringing Brands to Life Through Innovative and Design</p>
          <Link to="/creative"><button className="know-more-button">Know more</button></Link>
           <a href="./services"><button className='know-more-button' onClick={Creative}>Know more</button></a>
        </div> */}


        <div className='card'  data-aos="zoom-in">
            <img src={img1} alt="image" height='50px' width='50px' className='servisesImg'></img>
           <b> <h6 className='card-h3'>Branding and Creative Solution</h6></b>
            <p className='card-p'>Bringing Brands to Life Through Innovative Design</p>
            <button className='know-more-button' onClick={()=>navigate("/branding")}>Know more</button>
           </div>

           <div className='card'  data-aos="zoom-in">
            <img src={img2} alt="image" height='50px' width='50px' className='servisesImg'></img>
           <b> <h6 className='card-h3'>Creative and Capture</h6></b>
            <p className='card-p'>Turning ideas into impactful digital experinces</p>
            <button className='know-more-button' onClick={()=>navigate("/creative")}>Know more</button>
           </div>

           <div className='card' data-aos="zoom-in">
            <img src={img3} alt="image" height='50px' width='50px' className='servisesImg'></img>
           <b> <h6 className='card-h3'>Ecommerce Creative Solution</h6></b>
            <p className='card-p'>Engaging visuals. Conversion driven design</p>
            <button className='know-more-button' onClick={()=>navigate("/ecommerce")}>Know more</button>
           </div>

           <div className='card'  data-aos="zoom-in">
            <img src={img4} alt="image" height='50px' width='50px' className='servisesImg'></img>
           <b> <h6 className='card-h3'>Social media marketing</h6></b>
            <p className='card-p'>Engage, grow and convert with strategic content</p>
            <button className='know-more-button' onClick={()=>navigate("/socialMediaMarketing")}>Know more</button>
           </div>

           
           <div className='card'  data-aos="zoom-in">
            <img src={img5} alt="image" height='50px' width='50px' className='servisesImg'></img>
           <b> <h6 className='card-h3'>Search Engine Optimization</h6></b>
            <p className='card-p'>Boost Visibility , Drive organix growth</p>
            <button className='know-more-button' onClick={()=>navigate("/SEO")}>Know more</button>
           </div>

           <div className='card'  data-aos="zoom-in">
            <img src={img6} alt="image" height='50px' width='50px' className='servisesImg'></img>
           <b> <h6 className='card-h3'>Google Ads, PPC</h6></b>
            <p className='card-p'>Maximize reach. Optimize conversions</p>
            <button className='know-more-button' onClick={()=>navigate("/googleAds")}>Know more</button>
           </div>

        </div>
        </div>
    )
}

export default Services;