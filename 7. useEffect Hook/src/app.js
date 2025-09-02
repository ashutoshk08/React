import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import BgColorChanger from "./Component/backGroundChanger";

function Main() {
  let [count, setCount] = useState(0);
  console.log("main render");
  return (
    <>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <BgColorChanger></BgColorChanger>
      {/* BgColorChanger() is the function after all so whenever Main() func will be called it will also be called */}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main></Main>);
