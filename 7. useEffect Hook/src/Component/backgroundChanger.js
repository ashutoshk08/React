import React, { useState, useEffect } from "react";

function BgColorChanger() {
  let [color, setColor] = useState("white");

  console.log("first");

  // useEffect Hook => [callbackFn, dependency array]
  // useEffect executes after whole component done excuting
  // After initial rendering, it will be excuted only when it's dependency change
  // if dependency array is empty then it will only run during the initial rendering
  // And if no dependency array is given it run callback Function during every render.
  useEffect(() => {
    console.log("useEffect Executed");
    document.body.style.backgroundColor = color;
  }, [color]);

  //   console.log("second");
  return (
    <div className="container">
      <button onClick={() => setColor("orange")} id="orange">
        orange
      </button>
      <button onClick={() => setColor("skyblue")} id="skyblue">
        blue
      </button>
      <button onClick={() => setColor("yellow")} id="yellow">
        yellow
      </button>
      <button onClick={() => setColor("lightgreen")} id="green">
        green
      </button>
    </div>
  );
}

export default React.memo(BgColorChanger);
