import "./App.css";
import TodoContainer from "./containers/TodoContainer";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostContainer";
function App() {
  return (
    <div className="App">
      <PostListContainer />
    </div>
  );
}

export default App;
