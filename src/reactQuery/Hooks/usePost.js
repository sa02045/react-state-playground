import { useQuery } from "react-query";

const getPostById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};

const usePost = (id) => {
  return useQuery(["post", id], () => getPostById(id));
};

export default usePost;
