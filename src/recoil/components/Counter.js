import React from "react";
import { useRecoilState } from "recoil";
import countState from "../atoms/countState";

function Counter() {
  const [count] = useRecoilState(countState);
  return <h1>{count}</h1>;
}

export default Counter;
