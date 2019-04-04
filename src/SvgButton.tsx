import * as React from 'react';
import { FC } from 'react';
//@ts-ignore
import { useSpring, animated } from 'react-spring';

interface Props {
  x: number;
  y: number;
  hint: string;
  height: number;
  width: number;
  opened: boolean;
  onToggleOpen: (newState: boolean) => void;
}

const SvgButton: FC<Props> = ({ x, y, hint, width, height, opened, onToggleOpen }) => {
  const textX = width / 2;
  const textY = height / 2;

  const props = useSpring({ transform: `rotate(${opened ? 90 : -90}deg)`});

  return (
      <g
        transform={`translate(${x},${y})`}
        className="open-button"
        onClick={() => onToggleOpen(!opened)}
      >
        <title>{hint}</title>
        <rect
          className={`button-rect`}
          x={0}
          y={0}
          height={height}
          width={width}
        />
        <animated.path
          className="button-icon"
          style={{...props, transformOrigin: `${textX}px ${textY}px`}}
          d="M10.7 3.41 9.3 2l-6 6 6 6 1.41 -1.41L6.13 8z"
        />
      </g>
  );
};

export default SvgButton;
