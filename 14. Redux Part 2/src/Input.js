import { useState } from "react";
import { customIncrement } from "./counterSlice";
import { useDispatch } from "react-redux";

export default function CustomCounter() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="number"
        min={0}
        autoComplete="off"
        style={{ marginRight: "10px" }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(customIncrement(Number(value)));
          setValue("");
        }}
      >
        Submit
      </button>
    </>
  );
}
