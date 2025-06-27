import React from "react";
import Chart from "react-apexcharts";
import '../StyleSheet/style.css'

const PieChart = ({ series, filter }) => {
  const options = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    chart: {
      foreColor: "#ffffff",
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
    title: { text: `Pie Chart (${filter})`, align: "center" },
    tooltip: { theme: "dark" },
  };

  return <Chart options={options} series={series} type="pie"  height={300} width='100%' />;
};

export default PieChart;
