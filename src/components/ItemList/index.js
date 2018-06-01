import React, { Component } from "react";

import Item from "../Item";

const ItemList = () => {
  const items = ["Mouse", "Keyboard", "Pendrive"];
  return (
    <ul>
      {items.map(item => (
        <Item key={item} title={item}/>
      ))}
    </ul>
  );
};

export default ItemList;
