// src/pages/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Create this file for your custom styles

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Name:</strong> Amayalei Clark
        </p>
        <p>
          <strong>Email:</strong> amayalei2003@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
      </div>

      <div className="contact-form">
        <h2>Contact Form</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnb1dFF9rHiA7GGQrQEyJt39n8PJL8yTRH988QKNiobjhSxw/viewform?embedded=true" width="400" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
};

export default Contact;
