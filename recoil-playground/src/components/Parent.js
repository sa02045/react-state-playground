import React, { useEffect } from "react";
import Child from "./Child";
function Parent() {
  useEffect(() => {
    return () => {
      console.log("Parent");
    };
  }, []);
  return (
    <div>
      <Child />
    </div>
  );
}

export default Parent;
