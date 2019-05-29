import React, { Component } from "react";
// import "./style.scss";
import { scaleLinear, scaleTime } from "d3-scale"
import { extent } from "d3-array"

interface Props {
  data: Array<string>;
  width: number;
}

class Timeline extends Component<Props> {

  render() {
    const { data, width } = this.props
    const xScale = scaleTime()
      .domain(extent(data.time))
      .range([0, width])
    const yScale = scaleLinear()
      .domain()
      .range()

    return (
      <div className="Timeline">
        data.map(d => (
          <div className="bar"></div>
        ))
      </div>
    );
  }
}

export default Timeline;
