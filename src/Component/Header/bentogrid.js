import { useState } from 'react';
import BarChart from '../Graph/BarChart';
import './resuable/stylesheet/style.css'
import AreaChart from '../Graph/AreaChart';
import LineChart from '../Graph/LineChart';
import PieChart from '../Graph/PieChart';
import YearlyLineChart from '../Graph/yearlylinechart';

export default function Grid({ params, darkMode }) {
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
    <div className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-[1rem] mr-4 ">
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-6">
        <div className={` 
         flex items-center justify-between p-4 rounded-2xl border border-white/10
         ${darkMode
          ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "text-black bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10 shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)]"
        }`}>
          Summary 1
        </div>
        <div className={` 
         flex items-center justify-between p-4 rounded-2xl border border-white/10
         ${darkMode
          ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "text-black bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10 shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)]"
        }`}>
          Summary 2
        </div>
        <div className={` 
         flex items-center justify-between p-4 rounded-2xl border border-white/10
         ${darkMode
          ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "text-black bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10 shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)]"
        }`}>
          Summary 3
        </div>
        <div className={` 
         flex items-center justify-between p-4 rounded-2xl border border-white/10
         ${darkMode
          ? "text-white font-bold bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "text-[rgba(0,103,216,0.8)] font-bold bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10 shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)]"
        }`}>
          Summary 4
        </div>
      </section> */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-6">
        {["Summary 1", "Summary 2", "Summary 3", "Summary 4"].map(
          (label, index) => (
            <div
              key={index}
              className={`
        flex items-center justify-between p-4 rounded-2xl border border-white/10 backdrop-blur-xl
        ${
          darkMode
            ? "text-white font-[500]  bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
            : "text-[#1A237E] font-[500]  bg-white/10 backdrop-blur-xl bg-white/50 shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all"
        }
      `}
            >
              {label}
            </div>
          )
        )}
      </section>

      <section className="grid grid-cols-1 mb-6">
        <div
          className={` border border-white/10 p-4 rounded-2xl 
          ${
            darkMode
              ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
              : "bg-white/10 backdrop-blur-xl bg-white/50 shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all"
          } `}
        >
          <YearlyLineChart darkMode={darkMode} />
        </div>
      </section>

      <section className="grid grid-cols-1  md:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 sm:gap-2 gap-6  mb-6">
        <div
          className={`bg-white/5 backdrop-blur-xl border border-white/10  p-4 rounded-2xl
         ${
           darkMode
             ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
             : "bg-white/10 backdrop-blur-xl bg-white/50 shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all"
         } `}
        >
          <BarChart darkMode={darkMode} />
        </div>
        <div
          className={`bg-white/5 backdrop-blur-xl border border-white/10  p-4 rounded-2xl
         ${
           darkMode
             ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
             : "bg-white/10 backdrop-blur-xl bg-white/50 shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all"
         } `}
        >
          <LineChart darkMode={darkMode} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 sm:gap-2 gap-6 mb-6">
        <div
          className={`bg-white/5 backdrop-blur-xl border border-white/10  p-4 rounded-2xl
         ${
           darkMode
             ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
             : "bg-white/10 backdrop-blur-xl bg-white/50 shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all"
         } `}
        >
          <PieChart darkMode={darkMode} />
        </div>
        <div
          className={`bg-white/5 backdrop-blur-xl border border-white/10  p-4 rounded-2xl
         ${
           darkMode
             ? "text-white bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
             : "bg-white/10 backdrop-blur-xl bg-white/50 shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all"
         } `}
        >
          <AreaChart darkMode={darkMode} />
        </div>
      </section>
    </div>
  );
}
