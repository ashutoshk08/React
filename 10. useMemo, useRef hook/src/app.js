import { useState, useEffect, useMemo, useCallback } from "react";
import ReactDOM from "react-dom/client";

// useMemo
// 1. counter
// 2. take input -- return the fibonacci number

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState("");
  //   const [fiboNum, setFiboNum] = useState("");

  // yeh function kisi bhi state variable par depend nahi karta toh ham isse baar baar create hone se bacha skte hai using useCallback hook.
  // jab koi state variable change hoga to App component render hoga aur sare state variable aur function dubara se create honge par kuch function jo state variable
  // ki values ka use nhi kar rahe unhe ham baar baar create hone se bacha skte hai. Ase situation me ham useCallback use karte hai.
  // ya toh isse bhi badhiya ham is function ko App component ke bahar define karde toh sirf wo ek hi baar create hoga.
  const findFibonaaci = useCallback(() => {
    if (num === "") return;

    let first = 0,
      second = 1,
      third;
    for (let i = 0; i < Number(num); i++) {
      third = first + second;
      first = second;
      second = third;
    }
    return first;
  }, [num]);

  // useEffect renders one more time because it is executed in the last after the excution of whole function
  //   useEffect(() => setFiboNum(findFibonaaci()), [num]);
  // useMemo just see if num has changed or not, if changed then it excute the callback function else it ignores. So in useMemo, it donot require that extra render
  // therefore useMemo in such cases is more useful than useEffect.
  // useMemo is used when we want to prevent one rendering cycle.
  const result = useMemo(() => findFibonaaci(), [num]);
  //  const result = useMemo(()=>findFibonaaci(), [findFibonaaci]); --> this also works because findFibonaaci will only be created when num will change and everytime
  // findFibonacci will contain the new reference since findFinonacci is changed useMemo executes the callback function and new fibonacci num will be displayed.

  return (
    <>
      <div className="counter">
        <h1>{count}</h1>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>

      <div className="fibonacci-container">
        <h1>Fibonacci Number is: {result}</h1>
        <input
          type="number"
          min={0}
          placeholder="Enter n"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
