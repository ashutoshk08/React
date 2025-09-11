import { useState } from "react";
import ReactDom from "react-dom/client";
import Increment from "./Incremenet";
import Decrement from "./Decrement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />
    </>
  );
}

ReactDom.createRoot(document.getElementById("root")).render(<App />);
