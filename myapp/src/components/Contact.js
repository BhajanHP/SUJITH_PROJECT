import React, { useRef, useState } from "react";
import "../App";
import img1 from './Images/insta.png';
import img2 from './Images/youtube.png';
import img3 from './Images/facebook.png';
import img4 from './Images/mail.png';
import img5 from './Images/phone-call.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_28baj5i', 'template_7dhspwn', form.current, {
        publicKey: '9k0Wj57Ab_b90yeYH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowPopup(true);
          // Clear form
          setFormData({
            first_name: '',
            last_name: '',
            user_email: '',
            user_phone: '',
            message: ''
          });
          // Hide popup after 3 seconds
          setTimeout(() => setShowPopup(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact" className="contact-main-div">
      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-modal">
          <div className="popup-content">
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        </div>
      )}

      <div className="contact-wrapper" data-aos="fade-up">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h1 className="contact-heading">DON'T BE SHY, SAY HELLO!</h1>
          <div>
            <h3 style={{ color: '#E0E0E0', marginTop: '30px' }}>Contact Us</h3>
            <p></p>
            <div className="contact-detail contact-detail1">
              <span><img src={img5} alt="image not found" className="insta-image"></img></span>
              <span style={{ color: '#E0E0E0' }}>+91-7975949978</span>
            </div>

            <div className="contact-detail contact-detail2">
              <span><img src={img4} alt="image not found" className="insta-image"></img></span>
              <span style={{ color: '#E0E0E0' }}>brandingbots5@gmail.com</span>
              <hr></hr>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-fields">
              <div className="input-group">
                <label style={{ color: '#E0E0E0' }}>First Name</label>
                <input 
                  type="text" 
                  name="first_name" 
                  value={formData.first_name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <label style={{ color: '#E0E0E0' }}>Last Name</label>
                <input 
                  type="text" 
                  name="last_name" 
                  value={formData.last_name}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="input-group">
              <label style={{ color: '#E0E0E0' }}>Email</label>
              <input 
                type="email" 
                name="user_email" 
                value={formData.user_email}
                onChange={handleChange}
                placeholder="abc@gmail.com" 
                required 
              />
            </div>

            <div className="input-group">
              <label style={{ color: '#E0E0E0' }}>Phone </label>
              <input 
                type="text" 
                name="user_phone" 
                value={formData.user_phone}
                onChange={handleChange}
                placeholder="xxx-xxx-xxxx" 
                required 
              />
            </div>

            <div className="input-group">
              <label style={{ color: '#E0E0E0' }}>Message</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message ..." 
                required
              ></textarea>
            </div>

            <input type="submit" value="Send" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;