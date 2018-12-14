import React, { useState } from "react";

const GraphInput = ({ graph, setGraph }) => {
  const [value, setValue] = useState(JSON.stringify(graph, null, "  "));
  return (
    <div className="child-container">
      <textarea value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => setGraph(value)}>OK</button>
    </div>
  );
};

export default GraphInput;
