import React, { useEffect } from "react";
import * as d3 from "d3";

const renderD3Content = (svgCont, data) => {
  console.log(d3.select(svgCont));
  let svg = d3
    .select(svgCont)
    .select("svg")

    .append("svg")
    .attr("id", "d3svg")
    .classed("svg", true)
    .attr("height", data.height)
    .attr("width", data.width);

  let nodes = svg.selectAll("rect").data(data.nodes);

  nodes.enter().append("rect");

  nodes.exit().remove();

  nodes
    .attr("id", d => "node" + d.id)
    .style("fill", "#f5f5f5")
    .style("stroke", "000000")
    .style("stroke-width", "1px")
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
    renderD3Content("#d3-svg-cont", graph);
  });

  return <div id="d3-svg-cont" className="child-container svg-container" />;
};

export default D3Graph;
