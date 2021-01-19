import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChartLogs extends Component {
  render() {
    return (
      <div>
          <h1>Time Viewing By Date</h1>
        <Bar
          data={{
            labels: this.props.consultationDates,
            datasets: [
              {
                label: this.props.title,
                data: this.props.timeViewing,
                backgroundColor: this.props.timeViewing.map(() => {
                    return "rgba(63, 0, 208, 0.5)";
                }),
                borderColor: this.props.timeViewing.map(() => {
                    return "rgba(63, 0, 208, 1)";
                }),
                borderWidth: 1,
              },
            ],
          }}
          height={300}
          width={1400}
          option={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}

export default BarChartLogs;
