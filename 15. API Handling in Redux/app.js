import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store";
import CryptoCurrency from "./CryptoCurrency";

function App() {
  return (
    <Provider store={store}>
      <CryptoCurrency></CryptoCurrency>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/*
function fetchUser() {
  useEffect(async () => {
    dispatch(LoadingData(true));
    try {
      const resp = await fetch("...");
      const data = await resp.json();
      dispatch(UpdateData(data));
    } catch (err) {
      dispatch(ErrorData(err.message));
    }
  });
}
*/
// {type: 'slice/LoadingData', payload: true}
// {type: 'slice/UpdateData', payload: data}
// {type: 'slice/ErrorData', payload: err.message}
