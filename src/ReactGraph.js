import React from "react";
import SvgButton from "./SvgButton";

const Node = ({ node, config, idx }) => {
  let x = config.origin.x + idx * config.nodeSize.x + idx * config.margin.x;
  return (
    <g className="node" transform={`translate(${x},${config.origin.y})`}>
      <rect
        id={node.id}
        className="node-rect"
        x={0}
        y={0}
        height={config.nodeSize.y}
        width={config.nodeSize.x}
        rx={2}
      />
      <text
        textAnchor="middle"
        x={config.nodeSize.x / 2}
        y={15}
        dy={4}
        className="node-text"
      >
        {node.id}
      </text>
      <SvgButton
        config={config}
        id={idx}
        x={10}
        y={config.nodeSize.y - config.button.y - 10}
        title="Open"
      />
      <SvgButton
        config={config}
        id={idx}
        x={config.button.y + 20}
        y={config.nodeSize.y - config.button.y - 10}
        title="Heal"
      />
    </g>
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
