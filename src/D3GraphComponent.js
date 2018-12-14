import React from "react";
import { select } from "d3-selection";

const renderD3Content = (svg, data) => {
  console.log(data.nodes);
  let nodes = select(svg)
    .selectAll("rect")
    .data(data.nodes)
    .enter()
    .append("rect");

  select(svg)
    .selectAll("rect")
    .data(data.nodes)
    .exit()
    .remove();

  select(svg)
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
    renderD3Content("#d3svg", this.props.graph);
  }

  componentWillReceiveProps() {
    renderD3Content("#d3svg", this.props.graph);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    let { graph } = this.props;
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
  }
}

export default D3GraphComponent;
