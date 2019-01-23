import React from "react";
import {
  Spring,
  config as springConfig,
  animated as a,
  interpolate
} from "react-spring";
import SvgButton from "./SvgButton";

const Node = ({ node, config, idx, style }) => {
  let y = config.origin.y + idx * config.nodeSize.y + idx * config.margin.y;
  return (
    <Spring
      native
      config={springConfig.default}
      delay={idx * 100}
      from={{ x: 0, y: y }}
      to={{ x: config.origin.x, y }}
    >
      {({ x, y }) => (
        <a.g
          className="node"
          style={style}
          transform={interpolate([x, y], (x, y) => `translate(${x},${y})`)}
        >
          <a.rect
            id={node.id}
            className="node-rect"
            x={0}
            y={0}
            height={config.nodeSize.y}
            width={config.nodeSize.x}
            rx={2}
          />
          <a.text
            textAnchor="middle"
            x={config.nodeSize.x / 2}
            y={15}
            dy={4}
            className="node-text"
          >
            {node.id}
          </a.text>
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
        </a.g>
      )}
    </Spring>
  );
};

export default Node;
