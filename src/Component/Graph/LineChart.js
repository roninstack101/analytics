import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartFilterButtons from "../Reusable/filterbutton";

const LineChart = ({ darkMode }) => {
  const [filter, setFilter] = useState("month");

  const dataMap = {
    month: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [100, 120, 90, 150, 130, 170],
    },
    week: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      values: [40, 60, 30, 75],
    },
    day: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [22, 44, 36, 52, 61, 34, 45],
    },
  };

  const chartData = dataMap[filter] || { categories: [], values: [] };

  const options = {
    chart: {
      id: "line-chart",
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
      labels: {
        style: { colors: darkMode ? "#ffffff" : "#333333" },
      },
    },
    yaxis: {
      labels: {
        style: { colors: darkMode ? "#ffffff" : "#333333" },
      },
    },
    stroke: { curve: "smooth" },
    colors: [darkMode ? "#10b981" : "#1976d2"],
    dataLabels: {
      enabled: true,
      style: {
        colors: [darkMode ? "#ffffff" : "#000000"],
      },
    },
    title: {
      text: `Line Chart (${filter})`,
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

  const series = [
    {
      name: "Sales",
      data: Array.isArray(chartData.values) ? chartData.values : [],
    },
  ];

  console.log("Filter:", filter);
  console.log("ChartData:", chartData);
  console.log("Series Data:", series);

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
        type="line"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default LineChart;
