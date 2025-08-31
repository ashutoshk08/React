import React from "react";
import ReactDOM from "react-dom/client";

/*
function greet(name) {
  return <h1>Ram Ram {name.join(" ")} ji</h1>;
}

const element = greet(["Ashutosh", "Kumar"]);
*/

// props is an object that contains all the attributes of GiveIntro component
function GiveIntro(props) {
  // function GiveIntro(name, age){}
  return (
    <h1>
      My name is {props.name} and I am {props.age} years old.
    </h1>
  );
}

const element = <GiveIntro name="Ashutosh Kumar" age={22} />; // GiveIntro("Ashutosh Kumar", 22)
// <GiveIntro/> => function call
// functional component are Capitalize to differentiate from HTML element that are generally written in lower case.
// Like in HTML element, we give attributes. Similarly in functional component we give arguments as attributes.
// In DOM, each HTML element is transformed into object. Example - <h1>Hello World</h1>
// {   tag: "h1"
//     children: "Hello World"
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
