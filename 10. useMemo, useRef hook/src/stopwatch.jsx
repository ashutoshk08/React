import ReactDOM from "react-dom/client";
import { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  // const [intervalRef, setIntervalRef] = useState(null);
  const intervalRef = useRef(null);

  function start() {
    // setIntervalRef(
    //   setInterval(() => {
    //     setTime((newTime) => newTime + 1);
    //   }, 1000)
    // )
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((newTime) => newTime + 1);
    }, 1000);
  }
  function pause() {
    // clearInterval(intervalRef);
    // setIntervalRef(null);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function reset() {
    setTime(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <div className="counter">
      <h1>{time}</h1>
      <div className="btns">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
