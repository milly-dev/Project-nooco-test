import React from "react";
import data from "../data";
import BarChartLogs from "../components/BarChartLogs";
import Content from "../components/Content";
import "../styles/graphics.css";

export const Graphics = () => {
  return (
    <div className="Graph-style">
      <Content title="Logs Graphics"></Content>
      <div className="graph--time-view">
        <div>
          <BarChartLogs
            title={"time viewing"}
            consultationDates={data.logs.map((log) => {
              return log.date_of_clic;
            })}
            timeViewing={data.logs.map((log) => {
              return log.time_viewing;
            })}
          />
        </div>
      </div>
    </div>
  );
};
export default Graphics;
