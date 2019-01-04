import React from "react";
import { Transition, Spring, config as springConfig } from "react-spring";
import SvgButton from "./SvgButton";

const Node = ({ node, config, idx, style }) => {
  let x = config.origin.x + idx * config.nodeSize.x + idx * config.margin.x;
  return (
    <Spring
      config={springConfig.wobbly}
      delay={idx * 100}
      from={{ x: 0, y: config.origin.y }}
      to={{ x: x, y: config.origin.y }}
    >
      {props => (
        <g
          className="node"
          style={style}
          transform={`translate(${props.x},${props.y})`}
        >
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
      )}
    </Spring>
  );
};

const ReactGraphSpring = ({ graph, config }) => {
  return (
    <div className="child-container svg-container">
      <svg
        id="d3svg"
        className="svg"
        width={config.width}
        height={config.height}
      >
        <Transition
          items={graph.nodes}
          keys={node => node.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(node, state, idx) => props => (
            <Node node={node} config={config} idx={idx} style={props} />
          )}
        </Transition>
      </svg>
    </div>
  );
};

export default ReactGraphSpring;
