// import React from "react";
import "../styles/styles.css";

import Logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Get our stories delivered From us to your inbox weekly.</h2>
        <div className="input-group">
          <input type="email" placeholder="Your Email" />
          <button>Get started</button>
        </div>
        <p className="response-text">
          Get a response tomorrow if you submit by 9pm today. If we receive it
          after 9pm, we will respond the following day.
        </p>
      </div>

      <div className="footer-content">
         <div className="logo">
                <img src={Logo} alt="Zarrin Logo" />
              </div>
        <ul className="footer-links">
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div className="social-icons">
          <span>FB</span>
          <span>IG</span>
          <span>LN</span>
          <span>YT</span>
        </div>
      </div>

<div className="footer-line"></div>

      <p className="copyright">Copyright Ideapeel Inc © 2023, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
