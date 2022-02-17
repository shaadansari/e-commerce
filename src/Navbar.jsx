import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocalMall, MdPermIdentity } from "react-icons/md";

import { ProductContext } from "./Context";

function Navbar() {
  const { cart } = useContext(ProductContext);

  return (
    <nav className="div-nav">
      <h2>
        <Link to="/">E commerce</Link>
      </h2>
      <ul>
        <li className="icon-nav">
          <MdPermIdentity />
        </li>

        <li className="icon-nav">
          <MdOutlineLocalMall />
        </li>
        <li className="name-nav">
          <Link to="/profile">Login</Link>
        </li>
        <li className="name-nav">
          <Link to="/cart">
            {" "}
            {cart.length > 0 ? (
              <sup className="sup-nav">cart-{cart.length}</sup>
            ) : (
              "cart"
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
