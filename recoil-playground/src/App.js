import { useRecoilValue } from "recoil";
import { charCountState } from "./store";
import TextInput from "./components/TextInput";
import Parent from "./components/Parent";
import { useState } from "react";

function App() {
  const count = useRecoilValue(charCountState);
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <Parent />}
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        클릭
      </button>
      Character Count: {count}
    </>
  );
}

export default App;
