import React from "react";
import "./ComingSoon.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ComingSoon = () => {
  return (
   <>
   <Navbar />
   <div className="coming-soon-container">
      <div className="content">
        <h1>Coming Soon</h1>
        <p>We're working hard to bring you an amazing streaming experience.</p>
        <p>Stay tuned!</p>
        <div className="countdown">
          
         
        </div>
      </div>
    </div>
   <Footer />
   
   </>
  );
};

export default ComingSoon;
