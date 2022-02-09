import React from "react";
import { useQuery } from "react-query";

function TodoList() {
  const fetchTodolist = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos");
  };

  const { isLoading, isError, data, error } = useQuery("todos", fetchTodolist);

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
