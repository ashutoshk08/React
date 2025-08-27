// function createElement(tag, styles, children) {
//     const element = document.createElement(tag);
//     element.innerHTML = children;

//     for (let key in styles) {
//       element.style[key] = styles[key];
//     }
//     return element;
// }

// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello Coder Army";
// h1.style.fontSize = "30px";
// h1.style.backgroundColor = "orange";
// h1.style.color = "white";

// const h2 = document.createElement("h2");
// h2.innerHTML = "Toh kaise hain aap log";
// h2.style.fontSize = "25px";
// h2.style.backgroundColor = "green";
// h2.style.color = "white";

// const root = document.getElementById("root");
// root.append(h1, h2);

// React: Object
// createElement is a method not a function
const React = {
  createElement: function (tag, props, children) {
    const element = document.createElement(tag);

    if (Array.isArray(children)) {
      for (let child of children) {
        element.appendChild(child);
      }
    } else {
      element.innerHTML = children;
    }

    for (let key in props) {
      if (typeof props[key] !== "object") {
        element[key] = props[key];
      } else {
        for (let prop in props[key]) {
          element[key][prop] = props[key][prop];
        }
      }
    }
    return element;
  },
};
// ReactDOM: Object
const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

const h1 = React.createElement(
  "h1",
  {
    style: {
      fontSize: "30px",
      backgroundColor: "orange",
      color: "white",
    },
  },
  "Hello Coder Army"
);
const h2 = React.createElement(
  "h2",
  {
    style: {
      fontSize: "25px",
      backgroundColor: "green",
      color: "white",
    },
  },
  "Toh Kaise Hain Aap Log"
);

const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "Javascript");

const ul = React.createElement(
  "ul",
  {
    style: {
      fontSize: "24px",
      fontWeight: "600",
      backgroundColor: "lightpink",
    },
  },
  [li1, li2, li3]
);

ReactDOM.render(h1, document.getElementById("root"));
ReactDOM.render(h2, document.getElementById("root"));
ReactDOM.render(ul, document.getElementById("root"));

// Creating a React Card

// Image Section
const img = React.createElement(
  "img",
  {
    src: "https://images.unsplash.com/photo-1652513842544-ca66b676757a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "cricket field",
  },
  ""
);
const img_container = React.createElement(
  "div",
  { className: "img-container" },
  [img]
);

// Description Section
const desc_h2 = React.createElement("h2", {}, "Cricket");
let desp_p_content =
  "Cricket is a traditional yet dynamic bat-and-ball sport played between two teams of eleven players each. The contest unfolds on an oval or circular field centered around a 22-yard rectangular pitch, with a wicket at each end—comprised of three stumps topped by two bails Topend Sports. One team bats and tries to score runs by striking the ball and running between the wickets or hitting boundaries, while the other bowls and fields to dismiss batters and restrict scoring.";
const desc_p = React.createElement("p", {}, desp_p_content);
const section = React.createElement("section", { className: "description" }, [
  desc_h2,
  desc_p,
]);

const div = React.createElement("div", { className: "card" }, [
  img_container,
  section,
]);

// Render React Card
ReactDOM.render(div, root);

/*
    <div class="card">
      <div class="img-container">
        <img
          src="https://images.unsplash.com/photo-1652513842544-ca66b676757a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cricket field"
        />
      </div>
      <section class="description">
        <h2>Cricket</h2>
        <p>
          Cricket is a traditional yet dynamic bat-and-ball sport played between
          two teams of eleven players each. The contest unfolds on an oval or
          circular field centered around a 22-yard rectangular pitch, with a
          wicket at each end—comprised of three stumps topped by two bails
          Topend Sports. One team bats and tries to score runs by striking the
          ball and running between the wickets or hitting boundaries, while the
          other bowls and fields to dismiss batters and restrict scoring.
        </p>
      </section>
    </div>

*/
