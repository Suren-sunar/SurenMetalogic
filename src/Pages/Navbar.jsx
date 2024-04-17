import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="icon">i</span>
        <span className="text">MetaLogic</span>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#" className="active">Career</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <button className="cta-button">Get in Touch</button>
      </div>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};
