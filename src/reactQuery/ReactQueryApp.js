import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./Components/TodoList/TodoList";
const queryClient = new QueryClient();
function ReactQueryApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
}

export default ReactQueryApp;
