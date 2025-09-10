import { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function Main() {
  const [count, setCount] = useState(0); // useState, variable ki state ko maintain karke rakhta hai across re-renders
  // let step = 0; at every render a new step variable is created and initialize with 0.
  // We want step value to sustain across re-renders. But how can we do that?
  // if we able to maintain the reference of step across re-renders then we can avoid creation and initialization of step every time.
  // for this we have useRef hook that lets your reference intact across re-renders
  let step = useRef(0); // it returns an object because object is created in the heap memory and its reference is stored in stack whereas variables are directly stored in stack memory

  return (
    <>
      <div className="counter">
        <h1>Count: {count}</h1>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </div>
      <div className="counter">
        <h1>Step: {step.current}</h1>
        <div className="btns">
          <button
            onClick={() => {
              step.current += 1;
              console.log(step.current);
            }}
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
