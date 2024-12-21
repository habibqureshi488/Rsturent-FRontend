import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link , useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import imageprofile from '../assets/Profile/1.jpg'

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/shopping');
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="/logo.png" alt="Streaming App Logo" /> */}
        <span>Resturent</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/food">Food</Link></li>
        {/* <li><Link to="/series">Series</Link></li> */}
        <li><Link to="/newreleases">Reservations</Link></li>
        {/* <li><Link to="/mylist">My List</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-actions">
        <input type="text" placeholder="Search..." className="navbar-search"/>
        {/* <button className="navbar-button login-button">Login</button> */}
        <button onClick={handleNavigate} className="navbar-button vip-button">
          <FaShoppingCart className="crown-icon" /> 
        </button>
        {/* <img src={imageprofile} alt="Profile" className="profile-image" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
