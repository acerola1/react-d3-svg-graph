import React, { useState } from "react";
import { Spring, animated as a } from "react-spring";

const SvgButton = ({ id, config, x, y, title }) => {
  const [pressed, setPressed] = useState(false);
  const textX = config.button.x / 2;
  const textY = config.button.y / 2;
  return (
    <Spring native from={{ rotation: 0 }} to={{ rotation: pressed ? 180 : 0 }}>
      {({ rotation }) => (
        <a.g
          transform={`translate(${x},${y})`}
          onClick={() => setPressed(!pressed)}
        >
          <title>{title}</title>
          <a.rect
            id={id}
            className={`button-rect`}
            x={0}
            y={0}
            height={config.button.y}
            width={config.button.x}
            rx={2}
          />
          <a.text
            textAnchor="middle"
            transform={rotation.interpolate(
              rotation => `rotate(${rotation} ${textX}, ${textY})`
            )}
            x={textX}
            y={textY}
            dy={3}
            dx={0}
            className="button-symbol"
          >
            {"\u2335"}
          </a.text>
          <a.rect
            className={`button-rect-hover`}
            x={0}
            y={0}
            height={config.button.y}
            width={config.button.x}
            rx={2}
          />
        </a.g>
      )}
    </Spring>
  );
};

export default SvgButton;
