import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBContainer
} from "mdb-react-ui-kit";
import img1 from './Images/1.png';
import img2 from './Images/2.png';
import img3 from './Images/3.png';
import img4 from './Images/4.png';
import img5 from './Images/5.png';
import img6 from './Images/6.png';

// Don't forget to include this link tag in public/index.html head:
// <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">

export default function PathSlider() {
  return (
    <div id='pathSlider'>
    <MDBContainer>
      <MDBRow className="align-items-center py-5" data-aos="fade-up">
        {/* First Column - Stylized Heading */}
        <MDBCol md="5" className="text-center heading-phone" data-aos="zoom-in">
        <div className="brand-heading-container">
        <div className="brand-heading-container">
  <h6 className='brand-shadow'>We're a Creative Agency</h6>
  <h6 className='brand-shadow'>Crafting Experiences</h6>
  <h6 className='brand-shadow'>
  That Captivate <span style={{ WebkitTextFillColor: '#4eb8ff' }}>Connect</span>
</h6>

<h6 className='brand-shadow branding-h6'>
  <span style={{WebkitTextFillColor: '#4eb8ff' }}>and Convert</span>
</h6>

</div>
</div>
</MDBCol>

        {/* Second Column - Carousel */}
        <MDBCol md="7">
          <MDBCarousel showControls dark interval={2000} data-aos="zoom-in">
            <MDBCarouselItem itemId={1}>
              <div className="mt-5 mb-4">
                <img
                  src={img1}
                  className=" img-fluid shadow-1-strong"
                  alt="testimonial"
                  width="1200"
                  height="1200"
                />
              </div>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}>
              <div className="mt-5 mb-4">
                <img
                  src={img2}
                  className="img-fluid shadow-1-strong"
                  alt="testimonial"
                  width="1200"
                  height="1200"
                />
              </div>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={3}>
              <div className="mt-5 mb-4">
                <img
                  src={img3}
                  className="img-fluid shadow-1-strong"
                  alt="testimonial"
                  width="1200"
                  height="1200"
                />
              </div>
            </MDBCarouselItem>
            

            <MDBCarouselItem itemId={4}>
              <div className="mt-5 mb-4">
                <img
                  src={img4}
                  className="img-fluid shadow-1-strong"
                  alt="testimonial"
                  width="1400"
                  height="1600"
                />
              </div>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={5}>
              <div className="mt-5 mb-4">
                <img
                  src={img5}
                  className="img-fluid shadow-1-strong"
                  alt="testimonial"
                  width="1200"
                  height="1200"
                />
              </div>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={6}>
              <div className="mt-5 mb-4">
                <img
                  src={img6}
                  className="img-fluid shadow-1-strong"
                  alt="testimonial"
                  width="1200"
                  height="1200"
                />
              </div>
            </MDBCarouselItem>


          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

// const styles = {
//   mainText: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     lineHeight: '1.3',
//   },
//   subText: {
//     fontFamily: "'Dancing Script', cursive",
//     fontSize: '2rem',
//     color: '#FFD700',
//     marginTop: '-40px',
//   }
// };
