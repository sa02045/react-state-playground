import React from "react";
import { useRecoilState } from "recoil";
import countState from "../atoms/countState";

function Button() {
  const [count, setCount] = useRecoilState(countState);
  return <button onClick={() => setCount(count + 1)}>+</button>;
}

export default Button;
