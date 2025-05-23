import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mens from "../Components/Mens";
import Womens from "../Components/Womens";
import Kids from "../Components/Kids";
import ShopCategory from "../Pages/ShopCategory";
import Product from "../Pages/Product";
import LoginSignup from "../Pages/LoginSignup";
import Cart from "../Pages/Cart";
import Shop from "../Pages/Shop";

import men_banner from '../assets/banner.jpg'
import women_banner from '../assets/women_banner.avif'
import kids_banner from '../assets/kids_banner.jpg'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Shop /> },
      { path: "kids", element: <ShopCategory banner ={men_banner} category="kid" /> },
      { path: "mens", element: <ShopCategory banner ={women_banner} category="men" /> },
      { path: "womens", element: <ShopCategory banner ={kids_banner} category="women" /> },
      { path: "product", element: <Product /> },
      { path: "product/:productId", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <LoginSignup /> },
    ],
  },
]);
