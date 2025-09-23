import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

export default function Counter() {
  const count = useSelector((globalState) => globalState.counterSlice.count);
  const dispatch = useDispatch(); // it returns the dispatch function

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
