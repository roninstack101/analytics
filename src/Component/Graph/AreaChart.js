// components/Graph/AreaChart.jsx
import React from "react";
import Chart from "react-apexcharts";

const AreaChart = ({ categories, values, filter }) => {
  const options = {
    chart: {
      id: "area-chart",
      background: "transparent",
      foreColor: "#ffffff",
    },
    xaxis: { categories },
    stroke: { curve: "smooth" },
    colors: ["#f97316"],
    dataLabels: { enabled: false },
    title: { text: `Area Chart (${filter})`, align: "center" },
    tooltip: { theme: "dark" },
    theme: { mode: "dark" },
  };

  const series = [{ name: "Sales", data: values }];

  return <Chart options={options} series={series} type="area" height={300} />;
};

export default AreaChart;
