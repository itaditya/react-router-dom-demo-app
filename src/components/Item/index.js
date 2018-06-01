import React, { Component } from "react";
import { Link } from "@reach/router";

const Item = ({ title }) => (
  <li>
    <Link to={`/products/${title.toLowerCase()}`}>{title}</Link>
  </li>
);

export default Item;
