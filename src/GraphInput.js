import React, { useState } from "react";

function isValidJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const GraphInput = ({ graph, config, setGraph, setConfig }) => {
  const [value1, setValue1] = useState(JSON.stringify(graph, null, "  "));
  const [value2, setValue2] = useState(JSON.stringify(config, null, "  "));
  return (
    <div className="child-container">
      <textarea value={value1} onChange={e => setValue1(e.target.value)} />
      <button
        onClick={() =>
          isValidJson(value1) ? setGraph(JSON.parse(value1)) : ""
        }
      >
        OK
      </button>
      <textarea value={value2} onChange={e => setValue2(e.target.value)} />
      <button
        onClick={() =>
          isValidJson(value2) ? setConfig(JSON.parse(value2)) : ""
        }
      >
        OK
      </button>
    </div>
  );
};

export default GraphInput;
