import React from "react";
import Chart from "react-apexcharts";

const YearlyLineChart = () => {
  const series = [
    {
      name: "Sales",
      data: [300, 400, 350, 500, 490, 600, 700, 820, 910, 1000, 1100, 1200], // Sample yearly data
    },
  ];

  const options = {
    chart: {
      id: "year-line-chart",
      background: "transparent",
      foreColor: "#ffffff",
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#38bdf8"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Yearly Sales Overview",
      align: "center",
      style: {
        color: "#fff",
      },
    },
    tooltip: {
      theme: "dark",
    },
    theme: {
      mode: "dark",
    },
  };

  const chartBoxStyle = {
    // backgroundColor: "rgba(255, 255, 255, 0.05)",
    // backdropFilter: "blur(10px)",
    // WebkitBackdropFilter: "blur(10px)",
    // border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    padding: "1.5rem",
    borderRadius: "1rem",
  };

  return (
    // <div className="w-full mt-10" style={chartBoxStyle}>
      <Chart options={options} series={series} type="line" height={'300'} width={'100%'} />
    // </div>
  );
};

export default YearlyLineChart;
