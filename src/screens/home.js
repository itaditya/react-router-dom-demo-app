import React from "react";
import { Link } from 'react-router-dom';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: "100vh"
}

export default () => (
  <div style={styles}>
    <h1>Welcome to Coders Craiglist</h1>
    <Link to="products">Check out Products</Link>
  </div>
);
