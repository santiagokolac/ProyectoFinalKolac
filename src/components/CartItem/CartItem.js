import { useCartContext } from "../Context/CartContext";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="cartItem">
      <img className="cartItemImg" src={product.img} alt={product.title} />
      <div className="cartItemCol">
        <p>Título: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio unitario: ${product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>
          Quitar del carrito
        </button>
      </div>
    </div>
  );
};

export default CartItem;
