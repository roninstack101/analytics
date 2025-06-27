import { useState } from "react";
import BarChart from "../Graph/BarChart";
import "./resuable/stylesheet/style.css";
import AreaChart from "../Graph/AreaChart";
import LineChart from "../Graph/LineChart";
import PieChart from "../Graph/PieChart";

export default function Grid(params) {
  const [filter, setFilter] = useState("month");

  const dataMap = {
    month: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [120, 150, 110, 160, 180, 140],
      pie: [30, 35, 20, 15],
    },
    week: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      values: [40, 55, 35, 70],
      pie: [20, 40, 25, 15],
    },
    day: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [25, 45, 35, 50, 65, 30, 40],
      pie: [30, 25, 30, 15],
    },
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
    <div className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-[4rem] mr-4 ">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-6">
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10 shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] flex items-center justify-between p-4 rounded-2xl">
          kbkmfbkfmkf
        </div>
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10  flex items-center justify-between p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)]">
          kbkmfbkfmkf
        </div>
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10  flex items-center justify-between p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)]">
          kbkmfbkfmkf
        </div>
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10  flex items-center justify-between p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)]">
          kbkmfbkfmkf
        </div>
      </section>

      <section className="grid grid-cols-1 mb-6">
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10 p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] ">
          kbkmfbkfmkf
        </div>
      </section>

      <section className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 sm:gap-2 gap-6  mb-6">
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10  p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] ">
          <BarChart
            categories={selected.categories}
            values={selected.values}
            filter={filter}
          />
        </div>
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10   p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] ">
          <LineChart
            categories={selected.categories}
            values={selected.values}
            filter={filter}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 sm:gap-2 gap-6 mb-6">
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10   p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] ">
          <PieChart series={selected.pie} filter={filter} />
        </div>
        <div className=" bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10  p-4 rounded-2xl shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] ">
          <AreaChart
            categories={selected.categories}
            values={selected.values}
            filter={filter}
          />
        </div>
      </section>
    </div>
  );
}
