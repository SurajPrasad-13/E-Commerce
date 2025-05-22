import React, { createContext } from "react";
import all_product from "../assets/all_product";

// // created context
// export const ShopContext = createContext(null)

// // created context provider
// const ShopContextProvider = (props)=>{
//   const contextValue = {all_product}
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider
