import React from "react";
import Todo from "../components/Todo";
import { addTodo } from "../modules/todos";
import { useSelector, useDispatch } from "react-redux";

function TodoContainer() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const onCreate = (text) => dispatch(addTodo(text));
  return <Todo todos={todos} onCreate={onCreate} />;
}

export default TodoContainer;
