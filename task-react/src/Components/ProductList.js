import React from "react";
import Product from "./Product";
import productsData from "../Products";

export default function ProductList() {
  let ProductArray = productsData.map((product) => <Product info={product} />);
  return <div>{ProductArray}</div>;
}
