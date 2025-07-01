import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartFilterButtons from "../Reusable/filterbutton";

const AreaChart = ({ darkMode }) => {
  const [filter, setFilter] = useState("month");

  const dataMap = {
    month: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [100, 200, 150, 300, 250, 400],
    },
    week: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      values: [60, 90, 50, 120],
    },
    day: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [25, 45, 30, 60, 55, 40, 35],
    },
  };

  const chartData = dataMap[filter] || { categories: [], values: [] };

  const options = {
    chart: {
      type: "area",
      background: "transparent",
      foreColor: darkMode ? "#fff" : "#333",
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
        style: {
          colors: darkMode ? "#fff" : "#333",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: darkMode ? "#fff" : "#333",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      theme: darkMode ? "dark" : "light",
    },
    colors: [darkMode ? "#38bdf8" : "#2196f3"],
    title: {
      text: `Area Chart (${filter})`,
      align: "center",
      style: {
        color: darkMode ? "#fff" : "#1A237E",
        fontSize: "16px",
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: Array.isArray(chartData.values) ? chartData.values : [],
    },
  ];

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
        type="area"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default AreaChart;
