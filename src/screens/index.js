import React, { Fragment } from "react";
import { Router, Link } from "@reach/router";

import Home from "./home";
import Products from "./products";

export default () => (
  <Router>
    <Home path="/" />
    <Products path="products/*" />
  </Router>
);
