import '../App.css';
import Card3 from './Card3';
import Slider from "react-slick";


function Review(){
  
    return(
        <div id="Testimonials">
     
            <h2  className='Testimonial-h2'>Testimonial</h2>
            <h3  className='Testimonial-h3'>Review That Inspire Trust</h3>
        <div className='review card-container'>
            <Card3 name="Akash Raj" desg="Founder of Deco Coffee" review="I Love how the designs highlight the product's key feature in such an attract way! The use of colors fonts and imagery is spot on for an e-commerce listing" />
            <Card3 name="Sam Karan" desg="Founder at Scissors Hand Professional, Dubai" review="Ads performance increased our budget diAds performance increased Our budget didn't the team delivered outstanding designs that perfectly capture the essence of the brand."/>
            <Card3 name="Varun Sharma" desg="Founder Nova Fit" review="The design work delivered was nothing short of outstanding! The visuals were clean, compelling, and designed to convert. Their expertise in e-commerce creatives truly makes them a go-to agency for high-impact branding!"/>
        </div>
      
        </div>
    )
}

export default Review;