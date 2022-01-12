import "./App.css";
import TodoContainer from "./containers/TodoContainer";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div className="App">
      <TodoContainer />
      <CounterContainer />
    </div>
  );
}

export default App;
