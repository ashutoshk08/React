export default function Increment({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
