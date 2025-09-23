import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((globalState) => globalState.cartSlice.count);
  return (
    <header className="header">
      <h2>Swiggy</h2>
      <h2>Cart ({count})</h2>
    </header>
  );
}
