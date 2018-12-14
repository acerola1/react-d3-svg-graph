import React from "react";

const GraphInput = ({ graph }, { setGraph }) => {
  return (
    <div className="child-container">
      <textarea value={JSON.stringify(graph, null, "  ")} />
    </div>
  );
};

export default GraphInput;
