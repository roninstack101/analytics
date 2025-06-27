// components/Graph/BarChart.jsx
import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ categories, values, filter }) => {
  const options = {
    chart: {
      id: "bar-chart",
      background: "transparent",
      foreColor: "#ffffff",
      toolbar: { tools: { download: true } },
    },
    plotOptions: { bar: { borderRadius: 6, columnWidth: "55%" } },
    xaxis: { categories },
    colors: ["purple"],
    dataLabels: { enabled: true },
    title: { text: `Bar Chart (${filter})`, align: "center" },
    tooltip: { theme: "dark" },
    theme: { mode: "dark" },
  };

  const series = [{ name: "Sales", data: values }];

  return <Chart options={options} series={series} type="bar"  height={300} width='100%' />;
};

export default BarChart;
