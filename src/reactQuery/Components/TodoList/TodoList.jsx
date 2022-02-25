import React from "react";
import useTodos from "../../Hooks/useTodos";
function TodoList() {
  const { isLoading, isError, data, error } = useTodos();
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
