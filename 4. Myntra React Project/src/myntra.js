import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import category, { greet as Greet, meet as Meet } from "./Utils/constants";

// console.log(<Meet />);
// console.log(<Greet />);

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <h1>SHOP BY CATEGORY</h1>
        <section className="card-container">
          {category.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              offer={obj.offer}
              src={obj.img.src}
              alt={obj.img.alt}
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
