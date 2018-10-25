import React from "react";

export default React.memo(({ count, onClick }) => {
  return <div onClick={onClick}>the counter is set to {count}</div>;
});
