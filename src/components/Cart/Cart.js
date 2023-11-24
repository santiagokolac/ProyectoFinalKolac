import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cartContainer">
        <p>No hay elementos en el carrito</p>
        <Link to="/">
          <button className="backHomeBtn">Volver al inicio</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <p>Total: ${totalPrice()}</p>
      <button className="cartBtn" onClick={clearCart}>
        Vaciar carrito
      </button>
      <Link to="/checkout">
        <button className="cartBtn">Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
