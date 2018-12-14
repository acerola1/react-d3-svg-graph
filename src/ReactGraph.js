import React from "react";

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
          <rect
            id={node.id}
            className="node"
            x={config.origin.x + i * config.nodeSize.x + i * config.margin.x}
            y={config.origin.y}
            height={config.nodeSize.y}
            width={config.nodeSize.x}
            rx={5}
          />
        ))}
      </svg>
    </div>
  );
};

export default ReactGraph;
