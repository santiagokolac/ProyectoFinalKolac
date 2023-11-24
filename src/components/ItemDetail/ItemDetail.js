import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className="itemDetail">
      <div>
        <img src={item.img} className="itemDetailImg" alt={item.name} />
      </div>
      <div className="itemInfo">
        <h2 className="itemName">{item.name}</h2>
        <p className="itemDescription">
          <i>{item.description}</i>
        </p>
        <p className="itemStock">Cantidad disponible: {item.stock}</p>
        <p className="itemPrice">${item.price}</p>
        {goToCart ? (
          <Link to="/cart">
            <button className="finishButton">Ir al carrito</button>
          </Link>
        ) : (
          <ItemCount stock={10} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
