export default function Decrement({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrement</button>;
}
