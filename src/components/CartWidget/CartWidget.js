import React from "react";
import cartIcon from "../../assets/cart-icon.svg";
import "./CartWidget.css";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();
  return (
    <div>
      <img className="cart" src={cartIcon} alt="cart-widget" />
      <span>{totalProducts() || cart}</span>
    </div>
  );
};

export default CartWidget;
