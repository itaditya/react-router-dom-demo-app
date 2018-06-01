import React from "react";
import { Router, Link } from "@reach/router";

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

const Index = () => (
  <h4>
    Select a product from the wide range of computer accessories
  </h4>
)

const Product = (props) => (
  <div>
    <div>{props.productId}</div>
    <AddToCartButton />
  </div>
)

export default props => (
  <div style={{ display: "flex" }}>
    <aside style={sidebarStyles}>
      <Link to="/">Go Home</Link>
      <ItemList />
    </aside>
    <main style={mainStyles}>
      <Router>
        <Index path="/" />
        <Product path=":productId" />
      </Router>
    </main>
  </div>
);
