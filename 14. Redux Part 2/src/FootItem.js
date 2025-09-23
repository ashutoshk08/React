import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./cartSlice";
import { useState } from "react";

export default function FoodItem(value) {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    if (inCart) {
      dispatch(removeItem());
    } else {
      dispatch(addItem());
    }
    setInCart(!inCart);
  }

  return (
    <div className="card" key={value.id}>
      <img src={value.image} alt={value.food} />
      <h2>{value.food}</h2>
      <h3>Rs. {value.price}</h3>
      <button onClick={handleClick}>{inCart ? "remove" : "add"}</button>
    </div>
  );
}
