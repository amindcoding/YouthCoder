import React from 'react';
import './Footer.css';
// import logo from "../assets/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <section
      id="footer"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="/">&bull; Login</a>
            <a href="/articles">&bull; Articles</a>
            <a href="/forum">&bull; Forum</a>
            <a href="/login">&bull; Home</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="/">&bull; Register</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Jl. Raya Bekasi Km.22 Jakarta 13910
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +62 000 0000 0000
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +62 000 0000 0000
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: weyouthcoder@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.youthcoder.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          {/* <img src={logo} alt="logo" /> */}
          <p className="u-text-small">&copy; Copyright 2022. Ycoder.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
