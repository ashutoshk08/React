import { Link, Outlet } from "react-router";

function Pricing() {
  return (
    <>
      <nav>
        <Link to="monthly">Monthly</Link>
        <Link to="yearly">Yearly</Link>
      </nav>
      <h1>These are the pricing of our services.</h1>
      <Outlet></Outlet>
    </>
  );
}

export default Pricing;
