import React from "react";
import usePost from "../../Hooks/usePost";
function PostList() {
  const { data, isError, isLoading } = usePost(6);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return <div>{data.id}</div>;
}

export default PostList;
