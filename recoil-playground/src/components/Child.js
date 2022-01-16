import React, { useEffect } from "react";

function Child() {
  useEffect(() => {
    return () => console.log("Child");
  }, []);
  return <div></div>;
}

export default Child;
