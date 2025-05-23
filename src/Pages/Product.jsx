import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BredCrums from "../Components/BredCrums/BredCrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description";
import RelatedProducts from "../Components/RelatedProduct/RelatedProducts";
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId}=useParams()
  const product = all_product.find((e)=>productId == e.id)
  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;