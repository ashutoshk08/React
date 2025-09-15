import { Link, Outlet } from "react-router";

export default function About() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
        <Link to="services">Services</Link>
        <Link to="pricing">Pricing</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
