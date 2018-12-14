import React, { useEffect } from "react";
import { select } from "d3-selection";
import * as d3 from "d3";

const renderD3Content = (svg, data) => {
  select(svg)
    .selectAll("rect")
    .data(data.nodes, d => d.id)
    .enter()
    .append("rect");

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
    .style("fill", "#f5f5f5")
    .style("stroke", "000000")
    .style("stroke-width", "1px")
    .transition()
    .duration(500)
    .attr(
      "x",
      (d, i) => data.origin.x + i * data.nodeSize.x + i * data.margin.x
    )
    .attr("y", data.origin.y)
    .attr("rx", 5)
    .attr("height", data.nodeSize.y)
    .attr("width", data.nodeSize.x);
};

const D3Graph = ({ graph }) => {
  useEffect(() => {
    renderD3Content("#d3svg", graph);
  });

  return (
    <div className="child-container svg-container">
      <svg
        id="d3svg"
        className="svg"
        width={graph.width}
        height={graph.height}
      />
    </div>
  );
};

export default D3Graph;
