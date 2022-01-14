import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../modules/counter";

function CounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(counterSlice.actions.increase());
  const onDecrease = () => dispatch(counterSlice.actions.decrease());
  // const onSetDiff = (diff) => dispatch(counterSlice.actions.setDiff());

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      // onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
