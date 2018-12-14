import React from 'react';

const Node = ({ node, config, idx }) => {
  let x = config.origin.x + idx * config.nodeSize.x + idx * config.margin.x;
  return (
    <g transform={`translate(${x},${config.origin.y})`}>
      <rect
        id={node.id}
        className="node"
        x={0}
        y={0}
        height={config.nodeSize.y}
        width={config.nodeSize.x}
        rx={5}
      />
      <text
        textAnchor="middle"
        x={config.nodeSize.y / 2}
        y={config.nodeSize.y / 2}
        className="node-text"
      >
        {node.id}
      </text>
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
