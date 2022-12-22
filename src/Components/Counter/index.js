import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
  decrementByValue
} from "../../Features/counterSlice";

const Counter = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Rest
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          dispatch(incrementByValue(Number(value)));
        }}
      >
        Add Value
      </button>

      <button
        onClick={() => {
          dispatch(decrementByValue(Number(value)));
        }}
      >
        Subtract Value
      </button>
    </>
  );
};

export default Counter;
