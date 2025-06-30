import React from "react";
import Chart from "react-apexcharts";
import "../StyleSheet/style.css";

const YearlyLineChart = ({ darkMode }) => {
  const series = [
    {
      name: "Sales",
      data: [300, 400, 350, 500, 490, 600, 700, 820, 910, 1000, 1100, 1200],
    },
  ];

  const options = {
    chart: {
      id: "year-line-chart",
      background: "transparent",
      foreColor: darkMode ? "#ffffff" : "#333333",
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      labels: {
        style: {
          colors: darkMode ? "#ffffff" : "#333333",
        },
      },
    },
    stroke: {
      curve: "smooth",
    },
    colors: [darkMode ? "#38bdf8" : "#1976d2"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Yearly Sales Overview",
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

  return (
    <Chart options={options} series={series} type="line" height={300} width="100%" />
  );
};

export default YearlyLineChart;
