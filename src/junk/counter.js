//counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Counter:{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <break />
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </section>
  );
};
export default Counter;
