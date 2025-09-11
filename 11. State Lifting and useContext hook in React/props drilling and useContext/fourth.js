import GlobalContext from "./Global";
import { useContext } from "react";

export default function Fourth() {
  const { count, setCount } = useContext(GlobalContext);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
