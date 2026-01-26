import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-col brand">
          <h2>
            IMRICH<span>STORE</span>
          </h2>
          <p>
            IMRICH STORE is a premium digital marketplace crafted for
            individuals who value ambition, quality, and distinction.
            Every product represents a statement — not just ownership.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/profile">My Account</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: support@imrichstore.com</p>
          <p>Phone: +91 90000 00000</p>
          <p>Location: India</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} IMRICH STORE. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
