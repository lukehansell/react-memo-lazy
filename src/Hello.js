import React from "react";
export default React.memo(({ name, onClick }) => {
  return <h1 onClick={onClick}>Hello {name}</h1>;
});
