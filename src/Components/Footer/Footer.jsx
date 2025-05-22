import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.webp";
import instagram_icon from "../../assets/instagram.png";
import facefook_icon from "../../assets/facebook.png";
import whatsapp_icon from "../../assets/whatsapp.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="" height="45px" />
        <p>Shopify</p>
      </div>

      <ul className="footer-links">
        <li>About</li>
        <li>Product</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-social-container">
          <img src={instagram_icon} alt="" height="30px" />
        </div>
        <div className="footer-social-container">
          <img src={facefook_icon} alt="" height="30px" />
        </div>
        <div className="footer-social-container">
          <img src={whatsapp_icon} alt="" height="30px" />
        </div>
      </div>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved .............</p>
      </div>
    </footer>
  );
};

export default Footer;
