import React from "react";
import "./Offers.css";
import exclusive from "../../assets/p14.png";
const Offers = () => {
  return (
    <div className=" w-[65%] sm:flex-col md:flex-row md:flex px-28 mx-auto items-center justify-between my-15  bg-gradient-to-tr from-green-300 to-white shadow-[0px_4px_20px_rgba(136,242,173,0.5)] ">
      <div className="flex flex-col justify-center">
        <p className=" text-[16px] sm:text-2xl md:text-3xl text-[#171717]">
          Exclusive
        </p>
        <p className=" text-[16px] sm:text-2xl md:text-3xl text-[#171717]">
          Offers For You
        </p>
        <p className="text-[#171717] text-[14px] sm:text-xl font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-20 sm:w-35 md:w-40 h-6 sm:h-8 md:h-10 rounded-[35px] bg-[#ff4141] border-none text-white text-[14px] sm:text-[16px] md:text-xl font-medium mt-2 cursor-pointer">
          Exclusive
        </button>
      </div>
      <div className="flex items-center justify-end">
        <img src={exclusive} />
      </div>
    </div>
  );
};

export default Offers;
