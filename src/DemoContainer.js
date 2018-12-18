import React, { useState } from "react";

import GraphInput from "./GraphInput";
import D3Graph from "./D3Graph";
import ReactGraphSpring from "./ReactGraphSpring";
import ReactGraph from "./ReactGraph";

const initialGraph = {
  nodes: [{ id: "node1" }, { id: "node2" }, { id: "node3" }, { id: "node4" }]
};

const initialConfig = {
  width: 500,
  height: 150,
  nodeSize: { x: 60, y: 60 },
  origin: { x: 20, y: 20 },
  margin: { x: 20 }
};

const DemoContainer = () => {
  const [graph, setGraph] = useState(initialGraph);
  const [config, setConfig] = useState(initialConfig);
  const childProps = { graph, config };

  return (
    <div className="demo-container">
      <GraphInput {...childProps} setGraph={setGraph} setConfig={setConfig} />
      <D3Graph {...childProps} />
      <ReactGraphSpring {...childProps} />
      <ReactGraph {...childProps} />
    </div>
  );
};

export default DemoContainer;
