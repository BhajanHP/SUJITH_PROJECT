// import '../App.css';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// function Contact(){

//      const form = useRef();

//       const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .sendForm('service_28baj5i', 'template_7dhspwn', form.current, {
//           publicKey: '9k0Wj57Ab_b90yeYH',
//         })
//         .then(
//           (res) => {
//             console.log(res.text);
//             console.log('SUCCESS!');
//             e.target.reset();
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     };

// return(
//     <div>
//         <h1>Contact Us</h1>
//     <div className='contactUS'>
        
//          <form ref={form} onSubmit={sendEmail}>
//            <label>Name</label>
//          <input type="text" name="user_name" />
//          <label>Email</label>
//          <input type="email" name="user_email" />
//          <label>Phone number</label>
//          <input type="tel" name="user_number" />
//           <label>Message</label>
//           <textarea name="message" />
//           <input type="submit" value="Send"  className='contact-form-button'/>
//         </form>
//     </div>
//     </div>
// )

// }

//     // const form = useRef();

//     // const sendEmail = (e) => {
//     //   e.preventDefault();
  
//     //   emailjs
//     //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//     //       publicKey: 'YOUR_PUBLIC_KEY',
//     //     })
//     //     .then(
//     //       () => {
//     //         console.log('SUCCESS!');
//     //       },
//     //       (error) => {
//     //         console.log('FAILED...', error.text);
//     //       },
//     //     );
//     // };

//     // return (
//     //     <div>
//     //     <form ref={form} onSubmit={sendEmail}>
//     //       <label>Name</label>
//     //       <input type="text" name="user_name" />
//     //       <label>Email</label>
//     //       <input type="email" name="user_email" />
//     //       <label>Message</label>
//     //       <textarea name="message" />
//     //       <input type="submit" value="Send" />
//     //     </form>
//     //     </div>
//     //   );





import React, { useRef } from "react";
import "../App";
import img1 from './Images/insta.png';
import img2 from './Images/youtube.png';
import img3 from './Images/facebook.png';
import img4 from './Images/mail.png';
import img5 from './Images/phone-call.png';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact(){
  const form = useRef();

  return (
    <div id="contact" className="contact-main-div">
    <div className="contact-wrapper">
     
      

     {/* Left Side - Contact Info */}
     <div className="contact-info">
        
        <h1 className="contact-heading">DON'T BE SHY, SAY HELLO</h1>
        <div>
        <h3>Contact Us</h3>
        <p></p>
        <div className="contact-detail">
          {/* <FaPhoneAlt className="icon" />  */}
          <span><img src={img5} alt="image not found" className="insta-image"></img></span>
          <span>+91-7975949978</span>
        </div>

        <div className="contact-detail">
          {/* <FaEnvelope className="icon" /> */}
          <span><img src={img4} alt="image not found" className="insta-image"></img></span>
           <span>brandingbots@gmail.com</span>
        </div>
        </div>

        <div>
        <div className="contact-detail">
          <h3>FALLOW US ON</h3>
        </div>

        <div className="contact-detail">
          {/* <FaPhoneAlt className="icon" />  */}
          <div className="social-media">
          <img src={img1} alt="image not found" className="insta-image"></img>
          <img src={img2} alt="image not found" className="insta-image"></img>
          <img src={img3} alt="image not found" className="insta-image"></img>
          </div>
          </div>
        </div>
       

      </div>

      {/* Right Side - Form */}
      <div className="contact-form">
        <form ref={form}>
          <div className="name-fields">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" name="first_name" required />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" name="last_name" required />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="abc@gmail.com" required />
          </div>

          <div className="input-group">
            <label>Phone </label>
            <input type="text" name="user_phone" placeholder="xxx-xxx-xxxx" required/>
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea name="message" placeholder="Type your message ..." required></textarea>
          </div>

          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>

    </div>
    </div>
  );
};



export default Contact;

