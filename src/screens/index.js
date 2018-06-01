import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";
import Products from "./products";

export default () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
    </Fragment>
  </Router>
);
