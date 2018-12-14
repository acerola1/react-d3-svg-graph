import React, { useState } from "react";

function isValidJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const GraphInput = ({ graph, setGraph }) => {
  const [value, setValue] = useState(JSON.stringify(graph, null, "  "));
  return (
    <div className="child-container">
      <textarea value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={() => (isValidJson(value) ? setGraph(JSON.parse(value)) : "")}
      >
        OK
      </button>
    </div>
  );
};

export default GraphInput;
