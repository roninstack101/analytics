// components/Graph/PieChart.jsx
import React from "react";
import Chart from "react-apexcharts";

const PieChart = ({ series, filter }) => {
  const options = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    chart: { foreColor: "#ffffff" },
    title: { text: `Pie Chart (${filter})`, align: "center" },
    tooltip: { theme: "dark" },
  };

  return <Chart options={options} series={series} type="pie" height={300} />;
};

export default PieChart;
