1. How to create your own library
2. What is CDN(Content Delivery Network)?
3. How to bring React and React DOM
4. Why React and ReactDom are used separately?
   Ans: React is not only used in web development but also used in android and ios development as React Native. React DOM performs manipulation on DOM only. React Native has there own runtime enviroment.
5. How React 18 is different from React 17?

const element = React.createElement("h1",{id:"money", class:"Rohit" , style:{fontSize:"20px",backgroundColor:"blue",color:"red"}},"Hello Coder Army")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
