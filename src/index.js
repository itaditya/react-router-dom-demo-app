import React from "react";
import { render } from "react-dom";
import Screens from "./screens";

const styles = {
  fontFamily: "sans-serif",
  minHeight: "100vh"
};

const App = () => (
  <div style={styles}>
    <Screens />
  </div>
);

render(<App />, document.getElementById("root"));
