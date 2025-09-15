import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./Single-Page Application/Home";
import Contact from "./Single-Page Application/Contact";
import About from "./Single-Page Application/About";
import Cart from "./Single-Page Application/Cart";
import Details from "./Single-Page Application/Details";
import Services from "./Single-Page Application/Services";
import Pricing from "./Single-Page Application/Pricing";
import Monthly from "./Single-Page Application/Monthly";
import Yearly from "./Single-Page Application/Yearly";
import Github from "./Single-Page Application/Github";

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        {/* <Link to="/github">Github</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}>
          <Route index element={<Details />}></Route>
          <Route path="services" element={<Services></Services>}></Route>
          <Route path="pricing">
            <Route index element={Pricing()}></Route>
            <Route path="monthly" element={<Monthly />}></Route>
            <Route path="yearly" element={<Yearly />}></Route>
          </Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/cart" element={Cart()}></Route>
        <Route path="/github/:username" element={<Github />}></Route>
      </Routes>

      {/* Footer */}
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
