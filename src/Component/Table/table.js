import React, { useEffect, useState } from "react";

export default function Tables({ darkMode }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((json) => setData(json.users));
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  const containerClasses = `p-4 md:p-6 rounded-2xl border 
    ${darkMode
      ? "bg-white/5 text-white border-white/20"
      : "bg-white/60 text-[#1A237E] border-[#1A237E]/30"} 
    backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all`;

  const headerCell = "px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider";
  const rowCell = "px-6 py-4 whitespace-nowrap";

  const getButtonClasses = (isActive, disabled = false) => {
    return `
      flex justify-center items-center px-4 py-2 rounded-lg w-full sm:w-auto transition-all duration-300
      ${darkMode
        ? disabled
          ? "opacity-50 cursor-not-allowed text-gray-400 font-semibold"
          : isActive
            ? "bg-purple-700 text-white font-semibold"
            : "text-gray-400 hover:bg-purple-700 hover:text-white font-medium"
        : disabled
          ? "opacity-50 cursor-not-allowed text-[#1A237E] font-medium"
          : isActive
            ? "bg-[rgba(0,103,216,0.8)] text-white font-semibold"
            : "text-[#1A237E] hover:bg-[rgba(0,103,216,0.8)] hover:text-white font-medium"
      }
    `;
  };

  return (
    <div className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-4 mr-4">
      <section className="grid grid-cols-1 gap-6 mb-6">
        <div className={containerClasses}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Customer Directory</h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full">
              <thead
                className={`sticky top-0 z-10 backdrop-blur ${darkMode ? "bg-purple-700 text-white" : "bg-[rgba(0,103,216,0.8)] text-white"
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
                {paginatedData.map((user, i) => (
                  <tr
                    key={user.id}
                    className={`transition ${darkMode
                        ? `${i % 2 === 0 ? "bg-white/10" : "bg-white/5"} hover:bg-white/20`
                        : `${i % 2 === 0 ? "bg-white/40" : "bg-white/60"} hover:bg-white/80`
                      }`}
                  >
                    <td className={rowCell}>{user.firstName} {user.lastName}</td>
                    <td className={rowCell}>{user.email}</td>
                    <td className={rowCell}>{user.phone}</td>
                    <td className={rowCell}>{user.company?.name || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex flex-row sm:flex-row justify-between items-center gap-4">
            {/* Left side: First & Prev */}
            <div className="flex flex-row sm:flex-row gap-2 sm:w-auto">
              <button
                onClick={() => {
                  if (currentPage > 1) setCurrentPage(1);
                }}
                className={getButtonClasses(currentPage === 1, currentPage === 1)}
              >
                <span className="block sm:hidden">«</span>
                <span className="hidden sm:block">First</span>
              </button>
              <button
                onClick={() => {
                  if (currentPage > 1) setCurrentPage((prev) => prev - 1);
                }}
                className={getButtonClasses(false, currentPage === 1)}
              >
                <span className="block sm:hidden">‹</span>
                <span className="hidden sm:block">Previous</span>
              </button>
            </div>

            {/* Center: Page info */}
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>

            {/* Right side: Next & Last */}
            <div className="flex flex-row sm:flex-row gap-2 sm:w-auto">
              <button
                onClick={() => {
                  if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
                }}
                className={getButtonClasses(false, currentPage === totalPages)}
              >
                <span className="block sm:hidden">›</span>
                <span className="hidden sm:block">Next</span>
              </button>
              <button
                onClick={() => {
                  if (currentPage < totalPages) setCurrentPage(totalPages);
                }}
                className={getButtonClasses(currentPage === totalPages, currentPage === totalPages)}
              >
                <span className="block sm:hidden">»</span>
                <span className="hidden sm:block">Last</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
