import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

function GitHubProfiles() {
  return (
    <>
      <Header></Header>
      <Body></Body>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GitHubProfiles />);
