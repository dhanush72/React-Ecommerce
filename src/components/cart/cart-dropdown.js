import React from "react";
import CustomButton from "../custom-button/custom-button";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default Cart;
