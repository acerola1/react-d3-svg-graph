import React from "react";

const Node = ({ node, config, idx }) => {
  return (
    <rect
      id={node.id}
      className="node"
      x={config.origin.x + idx * config.nodeSize.x + idx * config.margin.x}
      y={config.origin.y}
      height={config.nodeSize.y}
      width={config.nodeSize.x}
      rx={5}
    />
  );
};

const ReactGraph = ({ graph, config }) => {
  return (
    <div className="child-container svg-container">
      <svg
        id="d3svg"
        className="svg"
        width={config.width}
        height={config.height}
      >
        {graph.nodes.map((node, i) => (
          <Node key={node.id} node={node} config={config} idx={i} />
        ))}
      </svg>
    </div>
  );
};

export default ReactGraph;
