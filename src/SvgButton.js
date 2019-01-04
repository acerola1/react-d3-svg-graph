import React, { useState } from "react";
import { Spring } from "react-spring";

const SvgButton = ({ id, config, x, y, title }) => {
  const [pressed, setPressed] = useState(false);
  const textX = config.button.x / 2;
  const textY = config.button.y / 2;
  return (
    <Spring from={{ rotation: 0 }} to={{ rotation: pressed ? 180 : 0 }}>
      {({ rotation }) => (
        <g
          transform={`translate(${x},${y})`}
          onClick={() => setPressed(!pressed)}
        >
          <title>{title}</title>
          <rect
            id={id}
            className={`button-rect`}
            x={0}
            y={0}
            height={config.button.y}
            width={config.button.x}
            rx={2}
          />
          <text
            textAnchor="middle"
            transform={`rotate(${rotation} ${textX}, ${textY})`}
            x={textX}
            y={textY}
            dy={4}
            dx={0}
            className="button-symbol"
          >
            {"\u2b9f"}
          </text>
          <rect
            className={`button-rect-hover`}
            x={0}
            y={0}
            height={config.button.y}
            width={config.button.x}
            rx={2}
          />
        </g>
      )}
    </Spring>
  );
};

export default SvgButton;
