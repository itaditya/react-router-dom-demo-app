import React from "react";
import { Route, Link } from "react-router-dom";

import AddToCartButton from "../components/AddToCartButton";
import ItemList from "../components/ItemList";

const sidebarStyles = {
  width: "30%",
  padding: "10px",
  background: "#ddd"
};

const mainStyles = {
  width: "70%",
  padding: "10px",
  textAlign: "center"
};

export default props => (
  <div style={{ display: "flex" }}>
    <aside style={sidebarStyles}>
      <Link to="/">Go Home</Link>
      <ItemList />
    </aside>
    <main style={mainStyles}>
      <Route exact path="/products" render={() => (
        <h4>Select a product from the wide range of computer accessories</h4>
      )} />
      <Route path="/products/:productId" render={(props) => (
        <div>
          <div>
            {props.match.params.productId}
          </div>
          <AddToCartButton />
        </div>
      )} />
    </main>
  </div>
);
