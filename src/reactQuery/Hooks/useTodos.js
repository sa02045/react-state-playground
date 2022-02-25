import { useQuery } from "react-query";

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

export default function useTodos() {
  return useQuery("todos", getTodos);
}
