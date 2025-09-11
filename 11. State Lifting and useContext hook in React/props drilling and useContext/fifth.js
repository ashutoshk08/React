import { useContext } from "react";
import GlobalContext from "./Global";

export default function Fifth() {
  const data = useContext(GlobalContext);
  return <h1>I am the Fifth Component, {data}</h1>;
}
