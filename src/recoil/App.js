import React from "react";
import { RecoilRoot } from "recoil";
import Button from "./components/Button";
import Counter from "./components/Counter";
function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Button />
    </RecoilRoot>
  );
}

export default App;
