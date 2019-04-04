import * as React from 'react';
import { FC, useState }  from 'react';
import { useTransition, /*animated*/ } from 'react-spring';
import './TopologyGraph.css';
import AspectNode from './AspectNode';
import { Config } from './DemoContainer';

export interface Graph {
  aspects: Aspect[];
}

export interface Aspect {
  id: string;
  steps: Step[];
}

export interface Step {
  id: string;
}

interface Props {
  graph: Graph;
  config: Config;
}

interface State {
  openedAspectId: string;
}

export interface LayoutGetter {
  aspectStart: (idx: number) => {x: number, y: number};
  aspectHeight: (idx: number) => number;
  aspectWidth: () => number;
  aspectHeaderHeight: () => number;
  aspectHeaderTextStart: () => {x: number, y: number};
  button: () => {width: number, height: number};
  aspectHeaderButton: () => {x: number, y: number};
  aspectHeaderScaleX: () => number;
}

const crateLayoutGetter = (conf: Config, graph: Graph, state: State): LayoutGetter => {
  const aspectHeights: number[] = graph.aspects.map (
    aspect =>
      aspect.id === state.openedAspectId ? conf.aspect.height : conf.aspect.header.height
  );

  return ({
    aspectStart: function(idx: number) {
      let heigths = 0;
      for (let i = 0; i < idx; i++) {
        heigths = heigths + this.aspectHeight(i);
      }
      return {
        x: conf.origin.x,
        y: conf.origin.y + conf.aspect.margin * idx + heigths
      };
    },
    aspectHeight: function(idx: number) {
      return aspectHeights[idx];
    },
    aspectWidth: () => conf.aspect.width,
    aspectHeaderHeight: () => conf.aspect.header.height,
    aspectHeaderTextStart: () => ({x: conf.aspect.header.text.x, y: conf.aspect.header.text.y}),
    button: () => ({width: conf.button.width, height: conf.button.height}),
    aspectHeaderButton: () => ({x: conf.aspect.width - conf.button.width - 15, y: (conf.aspect.header.height - conf.button.height) / 2}),
    aspectHeaderScaleX: function() {return this.aspectHeaderButton().x - 20; }
  });
};

const TopologyGraph: FC<Props> = ({config, graph}) => {

  const [openedAspectId, setOpenedAspectId] = useState('');
  const get = crateLayoutGetter(config, graph, {openedAspectId});
  const transitions = useTransition(graph.aspects, aspect => aspect.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  //const AnimatedAspectNode = animated(AspectNode);

  return (
    <div style={{marginLeft: '10px', marginTop: '10px'}}>
      <svg
        className="topology-svg"
        width={500}
        height={800}
      >
        {transitions.map( ({item, key, props}, idx) => (
          <AspectNode
            aspect={item}
            style={props}
            key={item.id}
            get={get}
            idx={idx}
            opened={openedAspectId === item.id}
            setOpenedAspectId={setOpenedAspectId}
          />
        ))}
      </svg>
    </div>
  );
};

export default TopologyGraph;
