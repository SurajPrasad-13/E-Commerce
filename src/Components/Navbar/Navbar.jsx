import { useState } from "react";
import "./Navbar.css";
import nav_logo from "../../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

// NavBar Links
const Navlinks = ({ mobile }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) => `hover:text-red-500 active:text-[#757575]  
        ${isActive ? "border-red-500 border-b-2" : ""}`}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => `hover:text-red-500 active:text-[#757575]  
        ${isActive ? "border-red-500 border-b-2" : ""}`}
        to="/men"
      >
        Men
      </NavLink>

      <NavLink
        className={({ isActive }) => `hover:text-red-500 active:text-[#757575]  
        ${isActive ? "border-red-500 border-b-2" : ""}`}
        to="/women"
      >
        Women
      </NavLink>

      <NavLink
        className={({ isActive }) => `hover:text-red-500 active:text-[#757575]  
        ${isActive ? "border-red-500 border-b-2" : ""}`}
        to="/kids"
      >
        Kids
      </NavLink>

      <NavLink className="hover:text-red-500" to="/login">
        <button className="w-30 h-10 outline-0 border rounded-4xl text-[#515151] text-[16px] bg-white cursor-pointer ">
          Login
        </button>
      </NavLink>

      <NavLink to="/cart" className={!mobile ? "m-2" : ""}>
        <FaCartShopping className="text-2xl" />
        <div className="size-5 flex justify-center items-center mt-[-40px] ml-4 rounded-xl text-[13px] bg-red-500">
          0
        </div>
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [mobile, setmobile] = useState(false);
  return (
    <div className="navbar p-2  flex-wrap sticky top-0 z-100">
      <div className="nav-logo flex justify-between items-center gap-1 ">
        {/* Brand Logo */}
        <div className="flex items-center justify-center">
          <img src={nav_logo} alt="" className="h-[40px]" />
          <NavLink to="/">
            <h2 className="w-55 text-2xl font-semibold ">Shopify Store</h2>
          </NavLink>
        </div>
        

        {/* Web NavBar */}
        <div className="nav-menu hidden md:flex items-center  list-none gap-[4.5vw] text-[18px]">
          <Navlinks mobile={mobile} />
        </div>

        {/* Toggle NavBar */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setmobile(!mobile)}
        >
          {mobile ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile NavBar */}
      {mobile && (
        <div className=" w-full flex flex-col gap-2 items-center md:hidden py-3">
          {/* w-full  flex flex-col gap-1   items-center  md:hidden */}
          <Navlinks />
        </div>
      )}
    </div>
  );
};

export default Navbar;
