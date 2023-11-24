import "./ItemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <div>
        <button
          disabled={count <= 1}
          className="itemCountButton"
          onClick={decrease}
        >
          -
        </button>
        <span>{count}</span>
        <button
          disabled={count >= stock}
          className="itemCountButton"
          onClick={increase}
        >
          +
        </button>
      </div>
      <div>
        <button
          disabled={stock <= 0}
          className="itemCountButton"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
