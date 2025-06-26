import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import AreaChart from "./AreaChart";

import "../StyleSheet/style.css";
import YearlyLineChart from "./yearlylinechart";

const Graph = () => {
  const [filter, setFilter] = useState("month");

  const dataMap = {
    month: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], values: [120, 150, 110, 160, 180, 140], pie: [30, 35, 20, 15] },
    week: { categories: ["Week 1", "Week 2", "Week 3", "Week 4"], values: [40, 55, 35, 70], pie: [20, 40, 25, 15] },
    day: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], values: [25, 45, 35, 50, 65, 30, 40], pie: [30, 25, 30, 15] },
  };

  const selected = dataMap[filter];

  const chartBoxStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
  };

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-6 md:mb-10">
        {["month", "week", "day"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 md:px-6 py-2 rounded-lg text-sm font-medium capitalize transition-all shadow-md ${
              filter === type
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-700 border border-purple-300 hover:bg-purple-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 md:p-6 rounded-xl shadow-lg" style={chartBoxStyle}>
          <BarChart categories={selected.categories} values={selected.values} filter={filter} />
        </div>
        <div className="p-4 md:p-6 rounded-xl shadow-lg" style={chartBoxStyle}>
          <LineChart categories={selected.categories} values={selected.values} filter={filter} />
        </div>
        <div className="p-4 md:p-6 rounded-xl shadow-lg" style={chartBoxStyle}>
          <PieChart series={selected.pie} filter={filter} />
        </div>
        <div className="p-4 md:p-6 rounded-xl shadow-lg" style={chartBoxStyle}>
          <AreaChart categories={selected.categories} values={selected.values} filter={filter} />
        </div>
      </div>

      {/* Always Visible Year Chart */}
      <div className="mt-10 md:mt-14">
        <YearlyLineChart />
      </div>
    </div>
  );
};

export default Graph;
