import React, { useState } from "react";

import GraphInput from "./GraphInput";
import D3Graph from "./D3Graph";
import ReactGraph from "./ReactGraph";

const initialGraph = {
  width: 400,
  height: 400,
  nodeSize: { x: 60, Y: 60 },
  origo: { x: 20, y: 20 },
  margin: { y: 20 },
  nodes: [{ id: "node1" }, { id: "node2" }, { id: "node3" }, { id: "node4" }]
};

const DemoContainer = () => {
  const [graph, setGraph] = useState(initialGraph);
  const childStyle = {};
  const childProps = { childStyle, graph };

  return (
    <div className="demo-container">
      <GraphInput {...childProps} setGraph={setGraph} />
      <D3Graph {...childProps} />
      <ReactGraph {...childProps} />
    </div>
  );
};

export default DemoContainer;
