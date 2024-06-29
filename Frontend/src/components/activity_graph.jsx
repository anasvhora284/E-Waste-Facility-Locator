/* eslint-disable react/prop-types */
import "./activity_graph.css";
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.data));
  const roundTo = 50; // You can change this to 100 or any other value
  const stepSize = Math.ceil(maxValue / roundTo) * roundTo;
  const steps = [...Array(6).keys()].map((step) => step * stepSize).reverse();

  return (
    <div className="ActivityGraphMainDiv">
      <div className="GraphHeading">
        <span>Activity</span>
      </div>
      <div className="YandBarDiv">
        <div className="y-axis">
          {steps.map((step, index) => (
            <div key={index} className="month-label">
              {step}
            </div>
          ))}
        </div>
        <div className="MainBarContainere">
          {data.map((item, index) => (
            <div
              key={index}
              className="line-vertical-wrapper"
              style={{ height: 300 }}
            >
              <Progress.Line
                className="ProgressBar"
                percent={(item.data / maxValue) * 100}
                vertical={true}
                showInfo={false}
                strokeWidth={20}
                strokeColor="#00D64F"
              />
              <div className="bar-label">{item.month} &nbsp;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
