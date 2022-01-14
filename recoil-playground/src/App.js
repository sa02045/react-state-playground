import { useRecoilValue } from "recoil";
import { charCountState } from "./store";
import TextInput from "./components/TextInput";

function App() {
  const count = useRecoilValue(charCountState);
  return (
    <>
      <TextInput />
      Character Count: {count}
    </>
  );
}

export default App;
