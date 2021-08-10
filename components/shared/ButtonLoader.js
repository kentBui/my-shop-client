import React from "react";

const ButtonLoader = () => {
  return (
    <>
      <div
        className="text-white spinner-border spinner-border-sm"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div className="ml-3 text-small">Loading...</div>
    </>
  );
};

export default ButtonLoader;
