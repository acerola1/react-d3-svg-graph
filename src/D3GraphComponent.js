import React from "react";
import * as d3 from "d3";

const renderD3Content = (svg, data) => {
  console.log("data", data);
  svg
    .selectAll("rect")
    .data(data.nodes)
    .enter()
    .append("rect");

  svg
    .selectAll("rect")
    .data(data.nodes)
    .exit()
    .remove();

  svg
    .selectAll("rect")
    .data(data.nodes)
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

class D3GraphComponent extends React.Component {
  componentDidMount() {
    this.svg = d3
      .select("#d3-svg-cont")
      .append("svg")
      .attr("id", "d3svg")
      .classed("svg", true)
      .attr("height", this.props.graph.height)
      .attr("width", this.props.graph.width);
    renderD3Content(this.svg, this.props.graph);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps.graph.nodes);

    renderD3Content(this.svg, nextProps.graph);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    let { graph } = this.props;
    return <div id="d3-svg-cont" className="child-container svg-container" />;
  }
}

export default D3GraphComponent;
