import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "h1",
//   { style: { fontSize: "30px", backgroundColor: "lightpink" } },
//   "Namaste, Toh Kaisen hain aaplog?"
// );
// console.log(element) --> 'object'

// React.createElement() => returns a react element (which is actually a Js Object) =render()=> HTML Code
// We know that, browser convert html file into Js object(DOM).
// .render(element) manipulates the DOM by inserting the element into the DOM and browser display the code

// JSX (Javascript XML) - let's you write HTML like code inside javascript
/*
const element = (
  <h1 style={{ fontSize: "30px", backgroundColor: "lightpink" }}>
    Namaste, Toh Kaise hain aaplog?
  </h1>
);
*/
// This code is actually interpreted as - React.createElement("h1",{style:{fontSize:"30px", backgroundColor:"lightpink"},"Namaste, Toh Kaise hain aaplog?"})
// Babel converts the JSX into react element
// Babel is a JS compiler(transpiler).
// JSX => React.createElement() => react element(Js Object) => HTML

// js variable only expect a single element so
// If you want to write multiple element, you either wrap inside a another element like div or you can use <></>
// <></> --> it is like a invisible wrapper that don't render on the screen or doesn't appear in HTML code
// JSX also lets you write JS expression(which evaluates to some value) inside HTML element
// For JS expression, you have to write it inside curly braces{}
const myName = "Ashutosh Kumar";
const element = (
  <>
    <h1 style={{ fontSize: "30px", backgroundColor: "lightpink" }}>
      Namaste, Toh Kaise hain aaplog?
    </h1>
    <h2>Hello, {myName}</h2>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
