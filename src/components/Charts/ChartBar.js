import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let percentageFill = "0%";
  if (props.maxValue > 0) {
    percentageFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  console.log(percentageFill);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: percentageFill }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
