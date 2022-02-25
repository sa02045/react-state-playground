import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./Components/TodoList/TodoList";
import PostList from "./Components/PostList/PostList";
const queryClient = new QueryClient();
function ReactQueryApp() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <TodoList /> */}
      <PostList />
    </QueryClientProvider>
  );
}

export default ReactQueryApp;
