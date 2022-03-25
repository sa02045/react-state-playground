import { useQuery } from "react-query";

const getTodos = async () => {
  const response = await fetch("http://localhost:4000/todolist");
  return response.json();
};

export default function useTodos() {
  return useQuery("todos", getTodos);
}
