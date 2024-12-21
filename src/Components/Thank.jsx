import React from 'react';
import './ThankYou.css'; // Import CSS for styling

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
        <p>We appreciate your business!</p>
        <button className="home-button" onClick={() => window.location.href = '/'}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
