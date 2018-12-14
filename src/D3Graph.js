import React, { useEffect } from "react";
import { select } from "d3-selection";
import * as d3 from "d3";

const renderD3Content = (svg, data, config) => {
  select(svg)
    .selectAll("rect")
    .data(data.nodes, d => d.id)
    .enter()
    .append("rect")
    .classed("node", true);

  select(svg)
    .selectAll("rect")
    .data(data.nodes, d => d.id)
    .exit()
    .transition()
    .style("opacity", 0)
    .remove();

  select(svg)
    .selectAll("rect")
    .data(data.nodes, d => d.id)
    .attr("id", d => "node" + d.id)
    .transition()
    .duration(500)
    .attr(
      "x",
      (d, i) => config.origin.x + i * config.nodeSize.x + i * config.margin.x
    )
    .attr("y", config.origin.y)
    .attr("rx", 5)
    .attr("height", config.nodeSize.y)
    .attr("width", config.nodeSize.x);
};

const D3Graph = ({ graph, config }) => {
  useEffect(() => {
    renderD3Content("#d3svg", graph, config);
  });

  return (
    <div className="child-container svg-container">
      <svg
        id="d3svg"
        className="svg"
        width={config.width}
        height={config.height}
      />
    </div>
  );
};

export default D3Graph;
