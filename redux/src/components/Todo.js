import React, { useState } from "react";

const TodoItem = React.memo(({ todo }) => {
  return <li>{todo.text}</li>;
});

const TodoList = React.memo(({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
});

function Todo({ todos, onCreate }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text}></input>
        <button type="submit">할일 추가하기</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default Todo;
