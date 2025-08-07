import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import hero_girl from '../../assets/p8.webp'
const Hero = () => {
  return (
    <div className=" h-[75vh] sm:h-[90vh] md:h-screen flex justify-between bg-gradient-to-b from-green-300 to-white">
      <div className="flex flex-col justify-center pl-20">
        <h2 className="text-xl md:text-2xl font-semibold">Best Deals! Best Prices!</h2>
        <div className="flex items-center gap-5">
          <p className="text-2xl sm:text-4xl md:text-5xl font-bold">New</p>
          <img src={hand_icon} className="h-12" />
        </div>
        <p className="text-2xl sm:text-4xl md:text-5xl font-bold">Colleciton</p>
        <p className="text-2xl sm:text-4xl md:text-5xl font-bold">for everyOne</p>

        <div className="flex items-center justify-center gap-1 w-40 h-8 sm:w-50 sm:h-10 md:w-60 md:h-12 rounded-full mt-7 bg-[#ff4141] text-white text-[14px] sm:text-[16px] md:text-[18px] font-medium ">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="" className=" h-5 sm:h-6 md:h-8" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img src={hero_girl} alt=""  />
      </div>
    </div>
  );
};

export default Hero;
