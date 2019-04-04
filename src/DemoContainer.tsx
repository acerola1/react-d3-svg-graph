import React, { useState } from "react";

import GraphInput from "./GraphInput";
import TopologyGraph, { Graph } from "./TopologyGraph";

const initialGraph: Graph = {
  aspects: [
    {
      id: 'Aspect1',
      steps: []
    },
    {
      id: 'Aspect2',
      steps: []
    },
    {
      id: 'Aspect3',
      steps: []
    }
  ]
};

const initialConfig = {
  origin: {
    x: 20.5,
    y: 20.5
  },
  aspect: {
    height: 100,
    width: 205,
    margin: 13,
    header: {
      height: 42,
      text: {
        x: 12,
        y: 25
      }
    }
  },
  button: {
    width: 15,
    height: 15
  }
};

export type Config = typeof initialConfig;

const DemoContainer = () => {
  const [graph, setGraph] = useState(initialGraph);
  const [config, setConfig] = useState(initialConfig);
  const childProps = { graph, config };
  return (
    <div className="demo-container">
      <GraphInput {...childProps} setGraph={setGraph} setConfig={setConfig} />
      <TopologyGraph graph={graph} config={config} />
    </div>
  );
};

export default DemoContainer;
