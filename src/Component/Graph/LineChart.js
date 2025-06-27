import React from "react";
import Chart from "react-apexcharts";
import '../StyleSheet/style.css'

const LineChart = ({ categories, values, filter }) => {
  const options = {
    chart: {
      id: "line-chart",
      background: "transparent",
      foreColor: "#ffffff",
      toolbar: {
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        }
      },
    },
    xaxis: { categories },
    stroke: { curve: "smooth" },
    colors: ["#10b981"],
    title: { text: `Line Chart (${filter})`, align: "center" },
    tooltip: { theme: "dark" },
    theme: { mode: "dark" },
  };

  const series = [{ name: "Sales", data: values }];

  return <Chart options={options} series={series} type="line" height={300} width='100%' />;
};

export default LineChart;
