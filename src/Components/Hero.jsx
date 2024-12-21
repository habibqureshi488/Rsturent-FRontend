import React from 'react';
import './Hero.css';
import image1 from '../assets/Hero/Old/1.jpg'
import image2 from '../assets/Hero/Old/2.jpg'
import image3 from '../assets/Hero/Old/3.jpg'
import image4 from '../assets/Hero/Old/4.jpg'
import image5 from '../assets/Hero/Old/5.jpg'
import image6 from '../assets/Hero/Old/6.jpg'
import image7 from '../assets/Hero/Old/7.jpg'
import image8 from '../assets/Hero/Old/8.jpg'
import image9 from '../assets/Hero/Old/9.jpg'
import image10 from '../assets/Hero/Old/10.jpg'
import image11 from '../assets/Hero/Old/11.jpg'
import image12 from '../assets/Hero/Old/12.jpg'
import image13 from '../assets/Hero/Old/13.jpg'
import image14 from '../assets/Hero/Old/14.jpg'
import image15 from '../assets/Hero/Old/15.jpg'
import image16 from '../assets/Hero/Old/16.jpg'
import image17 from '../assets/Hero/Old/17.jpg'
import image18 from '../assets/Hero/Old/18.jpg'
import image19 from '../assets/Hero/Old/19.jpg'
import image20 from '../assets/Hero/Old/20.jpg'
import image21 from '../assets/Hero/Old/21.jpg'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>My List</h1>
        <p>Enjoy the best movies and series with StreamVIP</p>
        <button className="hero-button">Explore Now</button>
      </div>
      <div className="hero-images">
        <img src = {image1} alt="Movie 1" />
        <img src = {image2} alt="Movie 2" />
        <img src = {image3} alt="Movie 3" />
        <img src = {image4} alt="Movie 4" />
        <img src = {image5} alt="Movie 5" />
        <img src = {image6} alt="Movie 6" />
        <img src = {image7} alt="Movie 7" />
        <img src = {image8} alt="Movie 1" />
        <img src = {image9} alt="Movie 2" />
        <img src = {image10} alt="Movie 3" />
        <img src = {image11} alt="Movie 4" />
        <img src = {image12} alt="Movie 5" />
        <img src = {image13} alt="Movie 6" />
        <img src = {image14} alt="Movie 7" />
        <img src = {image15} alt="Movie 1" />
        <img src = {image16} alt="Movie 2" />
        <img src = {image17} alt="Movie 3" />
        <img src = {image18} alt="Movie 4" />
        <img src = {image19} alt="Movie 5" />
        <img src = {image20} alt="Movie 6" />
        <img src = {image21} alt="Movie 7" />
      </div>
    </div>
  );
};

export default HeroSection;
