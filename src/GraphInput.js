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
      <div className="block-container">
        <div className="labelled-field-container">
          <div className="area-label">Graph</div>
          <div style={{ flex: "1 0" }} className="edit-container">
            <textarea
              value={value1}
              onChange={e => setValue1(e.target.value)}
            />
            <button
              onClick={() =>
                isValidJson(value1) ? setGraph(JSON.parse(value1)) : ""
              }
            >
              OK
            </button>
          </div>
        </div>
        <div className="labelled-field-container">
          <div className="area-label">Config</div>
          <div style={{ flex: "1 0" }} className="edit-container">
            <textarea
              value={value2}
              onChange={e => setValue2(e.target.value)}
            />
            <button
              onClick={() =>
                isValidJson(value2) ? setConfig(JSON.parse(value2)) : ""
              }
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphInput;
