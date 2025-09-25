import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FetchedData } from "./Slice1";
import Card from "./Card";

export default function CryptoCurrency() {
  const { data, loading, error } = useSelector(
    (globalState) => globalState.slice1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchedData(20));
  }, []);

  if (loading) {
    return <h1>Shimmer Effect</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="card-container">
      {data.map((value) => (
        <Card {...value} />
      ))}
    </div>
  );
}
