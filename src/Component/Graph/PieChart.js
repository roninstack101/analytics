import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartFilterButtons from "../Reusable/filterbutton";
import "../StyleSheet/style.css";

const PieChart = ({ darkMode }) => {
  const [filter, setFilter] = useState("month");

  // Mock series data for demo purpose
  const dataMap = {
    month: [44, 55, 13, 43],
    week: [21, 35, 14, 30],
    day: [11, 25, 8, 12],
  };

  const safeFilter = ["month", "week", "day"].includes(filter) ? filter : "month";
  const series = dataMap[safeFilter] || [];

  const options = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    chart: {
      type: "pie",
      background: "transparent",
      foreColor: darkMode ? "#ffffff" : "#333333",
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
    },
    title: {
      text: `Pie Chart (${safeFilter})`,
      align: "center",
      style: {
        color: darkMode ? "#ffffff" : "#1A237E",
        fontSize: "16px",
      },
    },
    tooltip: {
      theme: darkMode ? "dark" : "light",
    },
    theme: {
      mode: darkMode ? "dark" : "light",
    },
    legend: {
      labels: {
        colors: darkMode ? "#ffffff" : "#333333",
      },
    },
  };

  return (
   <div className="flex flex-col-reverse md:flex-col xl:flex-col gap-4">
      <ChartFilterButtons
        activeFilter={filter}
        onChange={setFilter}
        darkMode={darkMode}
      />
      <Chart
        options={options}
        series={series}
        type="pie"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default PieChart;
