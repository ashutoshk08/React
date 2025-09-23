import ReactDOM from "react-dom/client";
import Counter from "./src/Counter";
import Cart from "./src/Cart";
import store from "./src/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
      <Cart></Cart>
    </Provider>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
