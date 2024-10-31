import React from 'react';
import './Footer.css';
import i from "../../assets/615px-Food_Network_New_Logo 2.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={i} alt="Food Network Logo" className="logo" />
        <p>www.companyname.com</p>
        <p>companyname@gmail.com</p>
        <p>Phone: +7 485-118-03-25</p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Home</h4>
          <a href="#">Landingpage</a>
          <a href="#">Documentation</a>
          <a href="#">Referral Program</a>
          <a href="#">UI & UX Design</a>
          <a href="#">Web Design</a>
        </div>
        <div className="footer-column">
          <h4>Menu</h4>
          <a href="#">Landingpage</a>
          <a href="#">Documentation</a>
          <a href="#">Referral Program</a>
          <a href="#">UI & UX Design</a>
          <a href="#">Web Design</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">Landingpage</a>
          <a href="#">Documentation</a>
          <a href="#">Referral Program</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
