import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Item = ({ title }) => (
  <li>
    <NavLink to={`/products/${title.toLowerCase()}`}>{title}</NavLink>
  </li>
);

export default Item;
