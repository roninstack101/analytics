import React, { useEffect, useState } from "react";
import { IndianRupee, FileText, Loader } from "lucide-react";
import PieChart from "../Graph/PieChart";
import BarChart from "../Graph/BarChart";

export default function Billing({ darkMode }) {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        setBills(data.carts.slice(0, 6));
        setLoading(false);
      });
  }, []);

  const total = bills.reduce((a, b) => a + b.total, 0);
  const pending = 2;
  const paid = bills.length - pending;
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const monthlyData = [3000, 4200, 2500, total];
  const pieData = [50, 30, 20];

  const card = `rounded-2xl p-4 border border-white/10 bg-white/5 backdrop-blur-xl 
  shadow-md ${darkMode ? "text-white" : "text-black bg-white/50"}`;

  if (loading) return <Loader className="animate-spin mx-auto mt-10" />;

  return (
    <div className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-4 mr-4">
      {/* Summary Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Revenue", value: `₹${total}`, icon: <IndianRupee size={20} /> },
          { label: "Bills", value: bills.length, icon: <FileText size={20} /> },
          { label: "Paid", value: paid, icon: <FileText size={20} /> },
          { label: "Pending", value: pending, icon: <FileText size={20} /> },
        ].map((item, i) => (
          <div key={i} className={card}>
            <div className="flex items-center justify-between">
              <p className="text-sm">{item.label}</p>
              {item.icon}
            </div>
            <p className="text-xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Billing Table */}
      <section className="mb-6">
        <div className={card}>
          <h2 className="text-lg font-semibold mb-4">Recent Bills</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-2 text-left">Bill ID</th>
                  <th className="p-2 text-left">Customer</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr
                    key={bill.id}
                    className="border-t border-white/10 hover:bg-white/10 transition"
                  >
                    <td className="p-2">#{bill.id}</td>
                    <td className="p-2">User {bill.userId}</td>
                    <td className="p-2">₹{bill.total}</td>
                    <td className="p-2">
                      {bill.id % 2 === 0 ? (
                        <span className="text-green-500">Paid</span>
                      ) : (
                        <span className="text-yellow-500">Pending</span>
                      )}
                    </td>
                    <td className="p-2">2025-06-{bill.id + 10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Graphs */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={card}>
          <h3 className="text-base font-semibold mb-2">Monthly Revenue</h3>
          <BarChart categories={months} values={monthlyData} />
        </div>
        <div className={card}>
          <h3 className="text-base font-semibold mb-2">Payment Method</h3>
          <PieChart series={pieData} />
        </div>
      </section>
    </div>
  );
}
