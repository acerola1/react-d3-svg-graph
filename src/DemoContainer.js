import React, { useState } from "react";

import Graph from "./Graph";

const initialGraph = {
  nodes: [
    { id: "node1" },
    { id: "node2" },
    { id: "node3" },
    { id: "node4" },
    { id: "node5" },
    { id: "node6" },
    { id: "node7" },
    { id: "node8" },
    { id: "node9" },
    { id: "node10" },
    { id: "node11" },
    { id: "node12" }
  ],
  networks: [
    { id: "network 1" },
    { id: "network 2" },
    { id: "network 3" },
    { id: "network 4" }
  ]
};

const initialConfig = {
  width: 800,
  height: 1500,
  nodeSize: { x: 60, y: 60 },
  button: { x: 15, y: 15 },
  origin: { x: 20.5, y: 20.5 },
  margin: { y: 20 },
  nw: { start: { x: 130, y: 20 }, margin: 30 }
};

const DemoContainer = () => {
  return (
    <div className="demo-container">
      <Graph initialGraph={initialGraph} initialConfig={initialConfig} />
    </div>
  );
};

export default DemoContainer;
