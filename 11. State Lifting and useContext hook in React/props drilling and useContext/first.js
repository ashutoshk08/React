import { useState } from "react";
import ReactDom from "react-dom/client";
import Second from "./second";
import GlobalContext from "./Global";
import Fifth from "./fifth";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Fifth />
      <GlobalContext.Provider value={{ count, setCount }}>
        <h1>Count: {count}</h1>
        <h1>Namaskar</h1>
        {/* <Second count={count} setCount={setCount} /> */}
        <Second />
      </GlobalContext.Provider>
      <Fifth />
    </>
  );
}

ReactDom.createRoot(document.getElementById("root")).render(<Main />);
