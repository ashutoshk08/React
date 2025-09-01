import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import category, { greet as Greet, meet as Meet } from "./Utils/constants";

// console.log(<Meet />);
// console.log(<Greet />);

/*
// Using Javascript
function createCard(props) {
  // Create card container
  const card = document.createElement("div");
  card.className = "card";

  // Create image
  const img = document.createElement("img");
  img.src = props.img.src;
  img.alt = props.img.alt;

  // Create card-info container
  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";

  // Create and append <p> elements
  const titleP = document.createElement("p");
  titleP.textContent = props.title;

  const offerP = document.createElement("p");
  offerP.textContent = props.offer;

  const shopNowP = document.createElement("p");
  shopNowP.textContent = "Shop Now";

  const priceP = document.createElement("p");
  priceP.textContent = `Rs. ${props.price}`;

  // Append all <p> to card-info
  cardInfo.appendChild(titleP);
  cardInfo.appendChild(offerP);
  cardInfo.appendChild(shopNowP);
  cardInfo.appendChild(priceP);

  // Append img and card-info to card
  card.appendChild(img);
  card.appendChild(cardInfo);

  return card;
}

function handleSort() {
  const temp = category;
  temp.sort((a, b) => a.price - b.price);

  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  for (let i = 0; i < temp.length; i++) {
    cardContainer.appendChild(createCard(temp[i]));
  }
}
*/

function App() {
  let [arr, setArr] = useState(category);

  function handleSort() {
    arr.sort((a, b) => a.price - b.price);
    setArr([...arr]);
  }

  return (
    <>
      <Header />

      <main className="container">
        <h1>SHOP BY CATEGORY</h1>
        <button id="sort-btn" onClick={handleSort}>
          sort by price
        </button>
        <section className="card-container">
          {arr.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              offer={obj.offer}
              src={obj.img.src}
              alt={obj.img.alt}
              price={obj.price}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
