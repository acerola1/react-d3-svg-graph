import * as React from 'react';
import { FC } from 'react';
import { Aspect, LayoutGetter } from './TopologyGraph';
import SvgButton from './SvgButton';
//@ts-ignore
import { useSpring, animated } from 'react-spring';

interface Props {
  aspect: Aspect;
  idx: number;
  get: LayoutGetter;
  opened: boolean;
  setOpenedAspectId: Function;
  style: any;
}

const AspectNode: FC<Props> = ({ aspect, idx, get, opened, setOpenedAspectId, style }) => {
  const { aspectHeight, groupPosition} = useSpring({
    aspectHeight: get.aspectHeight(idx),
    groupPosition: `translate(${get.aspectStart(idx).x}px,${get.aspectStart(idx).y}px)`,
  });

  return (
    <animated.g
      className={`aspect ${opened ? 'opened' : 'closed'}`}
      key={aspect.id}
      style={{transform: groupPosition, opacity: style.opacity}}
    >
      <animated.rect
        className="aspect-rect"
        x={0}
        y={0}
        height={aspectHeight}
        width={get.aspectWidth()}
        rx={2}
      />
      <rect
        className="aspect-header-rect"
        x={0}
        y={0}
        height={get.aspectHeaderHeight()}
        width={get.aspectWidth()}
        rx={2}
      />
      <text
        className="aspect-name"
        textAnchor="start"
        x={get.aspectHeaderTextStart().x}
        y={get.aspectHeaderTextStart().y}
      >
        {aspect.id}
      </text>
      <text
        className="aspect-scale"
        textAnchor="start"
        x={get.aspectHeaderScaleX()}
        y={get.aspectHeaderTextStart().y}
      >
        {aspect.steps.length}
      </text>
      <SvgButton
        width={get.button().width}
        height={get.button().height}
        x={get.aspectHeaderButton().x}
        y={get.aspectHeaderButton().y}
        hint={'Open Aspect'}
        opened={opened}
        onToggleOpen={(newState) => newState ? setOpenedAspectId(aspect.id) : setOpenedAspectId('')}
      />
    </animated.g>
  );
};

export default AspectNode;