import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="itemLink">
      <div className="item">
        <img src={item.img} className="itemImg" alt={item.name} />
        <div>
          <p>
            {item.name} - ${item.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
