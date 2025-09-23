import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, empty } from "./cartSlice";

export default function Cart() {
  const count = useSelector((globalState) => globalState.cartSlice.count);
  const dispatch = useDispatch(); // it returns the dispatch function

  return (
    <>
      <h1>Items: {count}</h1>
      <button onClick={() => dispatch(increment())}>Add Item</button>
      <button onClick={() => dispatch(decrement())}>Subtract Item</button>
      <button onClick={() => dispatch(empty())}>Empty Cart</button>
    </>
  );
}
