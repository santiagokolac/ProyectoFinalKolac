import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ item }) => {
  return (
    <div className="itemList">
      {item.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
