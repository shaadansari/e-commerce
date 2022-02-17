import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./Context";
import { MdOutlineLocalMall } from "react-icons/md";

function ProdcutDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { productDetail, addToCart } = useContext(ProductContext);
  const detail = productDetail.find((product) => product.id == id);
  const { image, title, category, price, description } = detail;
  const updatePrice = quantity > 1 ? price * quantity : price;

  function increament() {
    setQuantity((prevalue) => prevalue + 1);
  }

  function decreament() {
    setQuantity((prevalue) => (prevalue === 1 ? prevalue : prevalue - 1));
  }

  return (
    <div className="div-productDetail">
      <img src={image} alt="photo" />
      <div>
        <h2>Title: {title}</h2>
        <h3>Category: {category}</h3>
        <h3>Price: {updatePrice}</h3>
        <span>
          <button className="quantity-btn" onClick={() => decreament()}>
            -
          </button>
          <span> Quantity : {quantity}</span>
          <button className="quantity-btn" onClick={() => increament()}>
            +
          </button>
        </span>
        <h4>Description: {description}</h4>
        <span>
          <button onClick={() => addToCart(id)}>
            <span>
              <MdOutlineLocalMall />
            </span>
            add to cart
          </button>
        </span>
      </div>
    </div>
  );
}

export default ProdcutDetail;
