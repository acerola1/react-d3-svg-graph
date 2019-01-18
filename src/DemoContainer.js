import React, { useState } from "react";

import ReactGraphSpring from "./ReactGraphSpring";

const initialGraph = {
  nodes: [{ id: "node1" }, { id: "node2" }, { id: "node3" }, { id: "node4" }]
};

const initialConfig = {
  width: 500,
  height: 150,
  nodeSize: { x: 60, y: 60 },
  button: { x: 15, y: 15 },
  origin: { x: 20.5, y: 20.5 },
  margin: { x: 20 }
};

const DemoContainer = () => {
  const [graph, setGraph] = useState(initialGraph);
  const [config, setConfig] = useState(initialConfig);
  const childProps = { graph, config };

  return (
    <div className="demo-container">
      <ReactGraphSpring {...childProps} />
    </div>
  );
};

export default DemoContainer;
