import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// useState() is an function
// it is like an variable in React
function Counter() {
  let [count, setCount] = useState(0); // returns an array
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <p>{count}</p>
      <div className="btns">
        <button onClick={increment}>Increment: {count}</button>
        <button onClick={decrement}>Decrement: {count}</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
