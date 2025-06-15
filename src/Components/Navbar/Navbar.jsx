import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} height="50px" alt="" />
          <p>Shopify</p>
        </div>
        <ul className="nav-menu">
          <li>
            <NavLink className={({isActive})=>isActive?'nav-active-link':''} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?'nav-active-link':''} to="/mens">Men</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?'nav-active-link':''} to="/womens">Women</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?'nav-active-link':''} to="/kids">Kids</NavLink>
          </li>
        </ul>
        <div className="nav-login-cart">
          <NavLink to='/login'>
          <button>Login</button>

          </NavLink>
          <NavLink to='/cart'>
          <img src={cart_icon} alt="" height="40px" />
          </NavLink>
          <div className="nav-cart-count">{getTotalCartItems()} </div>
        </div>
      </div>
    
  );
};

export default Navbar;
