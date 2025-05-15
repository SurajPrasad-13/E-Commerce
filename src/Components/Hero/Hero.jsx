import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/p8.webp";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Prices !</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} height="60px" alt="" />
        </div>
        <p>Collections</p>
        <p>For EveryOne</p>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="" height="30px" />
        </div>
      </div>

      <div className="hero-right">
        <img src={men} height="400px" alt="" />
      </div>
    </div>
  );
};

export default Hero;
