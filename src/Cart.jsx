import React, { useContext } from "react";
import { ProductContext } from "./Context";

export default function Cart() {
  const { cart, removeCart } = useContext(ProductContext);

  const totalPrice = cart.length * 120;
  const cartElements = cart.map((product) => (
    <div key={product.id}>
      <img src={product.image} />
      <h3>Price: 120</h3>
      <button onClick={() => removeCart(product.id)}>remove</button>
    </div>
  ));
  return (
    <div className="div-cart">
      <div className="div-cartelement">{cartElements}</div>
      <div className="div-amount">Total amount :{totalPrice}</div>
      <button onClick={() => alert("cart move to payment page")}>
        checkout
      </button>
    </div>
  );
}
