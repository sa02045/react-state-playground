import { useQuery } from "react-query";

const getPostById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};

const usePost = (id) => {
  const { data, isError, isLoading } = useQuery(["post", id], () =>
    getPostById(id)
  );
  return { data, isError, isLoading };
};

export default usePost;
