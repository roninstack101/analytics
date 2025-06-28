import React, { useEffect, useState } from "react";

export default function Tables({ darkMode }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const containerClasses = `p-4 md:p-6 rounded-2xl border 
    ${darkMode 
      ? "bg-white/5 text-white border-white/20" 
      : "bg-white/60 text-[#1A237E] border-[#1A237E]/30"} 
    backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all`;

  const headerCell = "px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider";
  const rowCell = "px-6 py-4 whitespace-nowrap";

  return (
    <div className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-4 mr-4">
      <section className="grid grid-cols-1 gap-6 mb-6">
        <div className={containerClasses}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Customer Directory</h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full divide-y">
              <thead
                className={`sticky top-0 z-10 backdrop-blur ${
                  darkMode ? "bg-purple-700 text-white" : "bg-[rgba(0,103,216,0.8)]  text-white"
                }`}
              >
                <tr>
                  <th className={headerCell}>Name</th>
                  <th className={headerCell}>Email</th>
                  <th className={headerCell}>Phone</th>
                  <th className={headerCell}>Company</th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? "divide-white/20" : "divide-[#1A237E]/30"} divide-y`}>
                {data.map((user, i) => (
                  <tr
                    key={user.id}
                    className={`transition ${
                      darkMode
                        ? `${i % 2 === 0 ? "bg-white/10" : "bg-white/5"} hover:bg-white/20`
                        : `${i % 2 === 0 ? "bg-white/40" : "bg-white/60"} hover:bg-white/80`
                    }`}
                  >
                    <td className={rowCell}>{user.name}</td>
                    <td className={rowCell}>{user.email}</td>
                    <td className={rowCell}>{user.phone}</td>
                    <td className={rowCell}>{user.company?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
