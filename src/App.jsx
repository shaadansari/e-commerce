import React from "react";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import ProdcutDetail from "./ProductDetail";
import Profile from "./Profie";
import Cart from "./Cart";
function App() {
  return (
    <div className="div-app">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/:id-detailpage">
          <ProdcutDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
