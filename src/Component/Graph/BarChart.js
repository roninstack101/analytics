import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartFilterButtons from "../Reusable/filterbutton";

const BarChart = ({ darkMode }) => {
  const [filter, setFilter] = useState("month");

  const dataMap = {
    month: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [120, 150, 110, 160, 180, 140],
    },
    week: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      values: [40, 55, 35, 70],
    },
    day: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [25, 45, 35, 50, 65, 30, 40],
    },
  };

  const chartData = dataMap[filter] || { categories: [], values: [] };

  const options = {
    chart: {
      id: "bar-chart",
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
    xaxis: {
      categories: chartData.categories,
      labels: { style: { colors: darkMode ? "#ffffff" : "#333333" } },
    },
    yaxis: {
      labels: { style: { colors: darkMode ? "#ffffff" : "#333333" } },
    },
    colors: [darkMode ? "#a855f7" : "#0067D8"],
    dataLabels: {
      enabled: true,
      style: {
        colors: [darkMode ? "#ffffff" : "#ffffff"],
      },
    },
    title: {
      text: `Bar Chart (${filter})`,
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
  };

  const series = [{ name: "Sales", data: chartData.values || [] }];

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
        type="bar"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default BarChart;
