import React from "react";
import { useState } from "react";
import { Minus, Plus } from "react-feather";
import "./QuantityInput.css";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = (qty: number) => {
    if (qty > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="quantity-input">
      <button
        className="quantity-input__increase-btn"
        onClick={() => decreaseQuantity(quantity)}
      >
        <Minus color={quantity === 1 ? "#bcbcbc" : "#f94f35"} />
      </button>
      <input
        className="quantity-input__input"
        disabled
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      ></input>
      <button
        className="quantity-input__decrease-btn"
        onClick={() => increaseQuantity()}
      >
        <Plus color="#f94f35" />
      </button>
    </div>
  );
};

export default QuantityInput;
