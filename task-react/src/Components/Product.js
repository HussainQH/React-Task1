import React from "react";

export default function Product(props) {
  const info = props.info;

  return (
    <div className="list">
      <img className="image" src={info.image} />
      <div className="rectangle">
        <p>{info.name}</p>
        <p>{info.price} KD</p>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
