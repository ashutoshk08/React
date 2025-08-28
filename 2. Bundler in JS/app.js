const h1 = React.createElement(
  "h1",
  {
    id: "header1",
    className: "header",
    style: { fontSize: "30px", backgroundColor: "skyblue" },
  },
  "Hello Coder Army"
);
const h2 = React.createElement(
  "h2",
  {
    id: "header2",
    className: "header",
    style: { fontSize: "25px", backgroundColor: "lightpink" },
  },
  "Kaise hain aap log?"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);
// root.render(h2); // render means remove all the previous html elements and textNodes inside root and  insert the current element
// .render() renders only one html element at one time

// To render multiple elements, we can insert all the elements inside a div and render that div
const div = React.createElement("div", {}, [h1, h2]);
root.render(div);

// root.render("Hello, How are you?"); --> it renders the string
// root.render(<div>Hello, How are you?</div>); --> it do not the work, do not render this
