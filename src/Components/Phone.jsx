import React from 'react';
import './COntact.css';

const Phone = () => {
  return (
<div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="form-input"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="button" className="submit-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="contact-info">
        <p>Or reach us directly at:</p>
        <p className="contact-detail">+123 456 7890</p>
        <p className="contact-detail">info@yourrestaurant.com</p>
      </div>
    </div>
);
};

export default Phone;