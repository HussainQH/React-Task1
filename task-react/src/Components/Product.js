import React from "react";

export default function Product(props) {
  const info = props.info;

  return (
    <div>
      <img src={info.image} />
      <h5>{info.name}</h5>
      <p>{info.price} KD</p>
    </div>
  );
}
