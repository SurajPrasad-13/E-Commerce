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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Shop /> },
      { path: "kids", element: <ShopCategory category="kids" /> },
      { path: "mens", element: <ShopCategory category="mens" /> },
      { path: "womens", element: <ShopCategory category="womens" /> },
      { path: "product", element: <Product /> },
      { path: ":productId", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <LoginSignup /> },
    ],
  },
]);
