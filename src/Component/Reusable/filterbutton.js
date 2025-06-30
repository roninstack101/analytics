import React from "react";

const ChartFilterButtons = ({ activeFilter, onChange, darkMode }) => {
  return (
    <div className="flex justify-center md:justify-end xl:justify-end mb-3 gap-2">
      {["month", "week", "day"].map((type) => {
        const isActive = activeFilter === type;

        let buttonClass = "px-4 py-2 rounded text-sm font-medium transition-all ";

        if (isActive) {
          buttonClass += darkMode
            ? "bg-purple-600 text-white"
            : "bg-[rgba(0,103,216,0.8)] text-white";
        } else {
          buttonClass += darkMode
            ? "text-white bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
            : "bg-white text-[rgba(0,103,216,0.8)] shadow-[0_4px_8px_rgba(0,0,0,0.2)] backdrop-blur-xl";
        }

        return (
          <button key={type} onClick={() => onChange(type)} className={buttonClass}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default ChartFilterButtons;
