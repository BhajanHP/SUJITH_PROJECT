// import '../App.css';
// import Card3 from './Card3';
// import Slider from "react-slick";


// function Review(){
  
//     return(
//         <div id="Testimonials">
     
//             <h2  className='Testimonial-h2'>Testimonial</h2>
//             <h3  className='Testimonial-h3'>Review That Inspire Trust</h3>
//         <div className='review card-container'>
//             <Card3 name="Akash Raj" desg="Founder of Deco Coffee" review="I Love how the designs highlight the product's key feature in such an attract way! The use of colors fonts and imagery is spot on for an e-commerce listing" />
//             <Card3 name="Sam Karan" desg="Founder at Scissors Hand Professional, Dubai" review="Ads performance increased our budget diAds performance increased Our budget didn't the team delivered outstanding designs that perfectly capture the essence of the brand."/>
//             <Card3 name="Varun Sharma" desg="Founder Nova Fit" review="The design work delivered was nothing short of outstanding! The visuals were clean, compelling, and designed to convert. Their expertise in e-commerce creatives truly makes them a go-to agency for high-impact branding!"/>
//         </div>
      
//         </div>
//     )
// }

// export default Review;


import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

import img1 from './Images/person3.jpg';
import img2 from './Images/person2.jpeg';
import img3 from './Images/person1.jpeg';
import img4 from './Images/person4.jpg';

export default function Review() {
  return (
    <MDBRow
      className="py-5 text-center"
      id="Testimonials"
      data-aos="fade-up"
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <MDBCol md="12">
        <h1
          className="Testimonial-h2"
          data-aos="fade-right"
          style={{ fontWeight: 600 }}
        >
          Testimonial
        </h1>
        <h3
          className="Testimonial-h3"
          data-aos="fade-left"
          style={{ fontWeight: 600 }}
        >
          Review That Inspire Trust
        </h3>

        {/* ✅ Added length={4} */}
        <MDBCarousel showControls data-aos="zoom-in" length={4} interval={4000}>
          <MDBCarouselItem itemId={1}>
            <p className="testi-margin testimonial-p" style={{ color: '#E0E0E0' }}>
              "I Love how the designs highlight the product's key feature in such an attract way! 
              The use of colors fonts and imagery is spot on for an e-commerce listing"
            </p>
            <div className="mt-5 mb-4">
              <img
                src={img1}
                className="rounded-circle img-fluid shadow-1-strong personImg"
                alt="testimonial"
                width="100"
                height="100"
              />
            </div>
            <p className="mb-0 testimonial-p" style={{ color: '#E0E0E0' }}>
              - Akash Raj (DECO)
            </p>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <p className="testi-margin" style={{ color: '#E0E0E0' }}>
              "The design work delivered was nothing short of outstanding! The visuals were clean, compelling, and designed to convert.
              Their expertise in e-commerce creatives truly makes them a go-to agency for high-impact branding!"
            </p>
            <div className="mt-5 mb-4">
              <img
                src={img3}
                className="rounded-circle img-fluid shadow-1-strong personImg"
                alt="testimonial"
                width="100"
                height="100"
              />
            </div>
            <p className=" mb-0 reviewerName" style={{ color: '#E0E0E0' }}>
              - Faraz (Love kaapi)
            </p>
          </MDBCarouselItem>

          {/* <MDBCarouselItem itemId={3}>
            <p className="testi-margin" style={{ color: '#E0E0E0' }}>
              "Ads performance increased our budget diAds performance increased Our budget didn't the team
              delivered outstanding designs that perfectly"
            </p>
            <div className="mt-5 mb-4">
              <img
                src={img2}
                className="rounded-circle img-fluid shadow-1-strong personImg"
                alt="testimonial"
                width="100"
                height="100"
              />
            </div>
            <p className=" mb-0" style={{ color: '#E0E0E0' }}>
              - Shreyas (skybean)
            </p>
          </MDBCarouselItem> */}

          <MDBCarouselItem itemId={3}>
            <p className="testi-margin" style={{ color: '#E0E0E0' }}>
              "The team was amazing! They understood my needs perfectly and delivered beyond my expectations.
              Thank you Team BrandingBots!"
            </p>
            <div className="mt-5 mb-4">
              <img
                src={img4}
                className="rounded-circle img-fluid shadow-1-strong personImg"
                alt="testimonial"
                width="100"
                height="100"
              />
            </div>
            <p className=" mb-0" style={{ color: '#E0E0E0' }}>
              - Lathesh (Ram Lathesh and co)
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBCol>
    </MDBRow>
  );
}
