import React, { useState } from "react";

import GraphInput from "./GraphInput";
import D3GraphComponent from "./D3GraphComponent";
import ReactGraph from "./ReactGraph";

const initialGraph = {
  width: 500,
  height: 280,
  nodeSize: { x: 60, y: 60 },
  origin: { x: 20, y: 20 },
  margin: { x: 20 },
  nodes: [{ id: "node1" }, { id: "node2" }, { id: "node3" }, { id: "node4" }]
};

const DemoContainer = () => {
  const [graph, setGraph] = useState(initialGraph);
  const childProps = { graph };

  return (
    <div className="demo-container">
      <GraphInput {...childProps} setGraph={setGraph} />
      <D3GraphComponent {...childProps} />
      <ReactGraph {...childProps} />
    </div>
  );
};

export default DemoContainer;
