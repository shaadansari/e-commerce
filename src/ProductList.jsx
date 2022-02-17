import React, { useContext } from "react";

import ProductComponent from "./Component/ProductComponent";

import { ProductContext } from "./Context";

function ProductList() {
  const { productDetail } = useContext(ProductContext);

  const productElements = productDetail.map((product) => (
    <ProductComponent key={product.id} {...product} />
  ));

  return (
    <>
      <div className="div-productlist">{productElements}</div>
    </>
  );
}

export default ProductList;
