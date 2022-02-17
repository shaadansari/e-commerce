import React, { useState, useEffect } from "react";

const ProductContext = React.createContext();

function ProductContextProvider(props) {
  const [productDetail, setProductDetail] = useState([]);

  const [cart, setCart] = useState([]);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, []);

  function addToCart(id) {
    if (isLogin) {
      const alreadyInCart = cart.find((item) => item.id == id);
      if (alreadyInCart) {
        return alert("already in cart");
      } else {
        return <i onClick={addCart(id)}></i>;
      }
    } else {
      alert("please login");
    }
  }

  function addCart(id) {
    setCart((prevalue) => [
      ...prevalue,
      productDetail.find((Product) => Product.id == id),
    ]);
  }

  function removeCart(id) {
    setCart((prevalue) => prevalue.filter((Product) => Product.id != id));
  }

  return (
    <ProductContext.Provider
      value={{
        addCart,
        removeCart,
        productDetail,
        cart,
        addToCart,
        isLogin,
        setIsLogin,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
