import React, { Fragment, useRef, useState } from "react";
import { Transition, animated } from "react-spring";

import Node from "./Node";

const Graph = ({ initialGraph, initialConfig }) => {
  const svgElement = useRef(null);
  const [yScroll, setYScroll] = useState(0);

  const handleScroll = e => {
    const bounding = svgElement.current.getBoundingClientRect();
    setYScroll(bounding.y < 0 ? -bounding.y : 0);
  };

  let graph = initialGraph;
  let config = initialConfig;
  let height =
    graph.nodes.length * (config.nodeSize.y + config.margin.y) +
    config.origin.y;

  return (
    <div className="child-container svg-container" onScroll={handleScroll}>
      <svg
        id="d3svg"
        className="svg"
        width={config.width}
        height={height}
        ref={svgElement}
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
        <Transition
          items={graph.networks}
          keys={nw => nw.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(nw, state, idx) => props => (
            <Fragment>
              <line
                className="network"
                x1={config.nw.start.x + config.nw.margin * idx}
                y1={config.nw.start.y}
                x2={config.nw.start.x + config.nw.margin * idx}
                y2={height - config.margin.y}
                style={props}
              />
              <text
                textAnchor="start"
                x={config.nw.start.x + config.nw.margin * idx}
                y={config.nw.start.y + yScroll}
                dx={8}
                className="nw-text"
                style={{ writingMode: "tb", ...props }}
              >
                {nw.id}
              </text>
            </Fragment>
          )}
        </Transition>
      </svg>
    </div>
  );
};

export default Graph;
