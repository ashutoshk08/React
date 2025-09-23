import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Cards from "./src/Cards";
import store from "./src/Store";
import { Provider } from "react-redux";

function Swiggy() {
  return (
    <Provider store={store}>
      <Header />
      <Cards />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Swiggy />);
