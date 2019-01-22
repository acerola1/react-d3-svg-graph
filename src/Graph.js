import React, { Fragment, useRef, useState } from "react";
import { Transition, Spring, animated } from "react-spring";

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
          native
          items={graph.networks}
          keys={nw => nw.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(nw, state, idx) => props => (
            <Spring
              native
              from={{
                o: props.opacity,
                x: config.nw.start.x,
                y: config.nw.start.y + yScroll
              }}
              to={{
                o: yScroll < 50 ? props.opacity : 0.3,
                x: config.nw.start.x + 0.5 + config.nw.margin * idx,
                y: config.nw.start.y + yScroll
              }}
            >
              {({ o, x, y }) => (
                <Fragment>
                  <animated.line
                    className="network"
                    x1={x}
                    y1={config.nw.start.y}
                    x2={x}
                    y2={height - config.margin.y}
                    style={props}
                  />
                  <animated.text
                    textAnchor="start"
                    x={x}
                    y={y}
                    dx={8}
                    className="nw-text"
                    fill="#323232"
                    style={{ writingMode: "tb", opacity: o }}
                  >
                    {nw.id}
                  </animated.text>
                </Fragment>
              )}
            </Spring>
          )}
        </Transition>
      </svg>
    </div>
  );
};

export default Graph;
