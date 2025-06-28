import React, { useEffect, useState } from "react";
import { IndianRupee, ShoppingCart, CheckCircle, RotateCcw } from "lucide-react";
import PieChart from "../Graph/PieChart";
import BarChart from "../Graph/BarChart";

export default function Billing({ darkMode }) {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then(res => res.json())
      .then(json => setCarts(json.carts))
      .catch(err => console.error("Failed to fetch carts", err));
  }, []);

  const totalRevenue = carts.reduce((sum, cart) => sum + cart.total, 0);
  const totalOrders = carts.length;
  const successfulPayments = Math.floor(totalOrders * 0.85); // Dummy
  const refundedOrders = totalOrders - successfulPayments;

  const recent = carts.slice(0, 5);
  const pieData = [40, 30, 20, 10];
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const monthTotals = [500, 1200, 800, totalRevenue];

  const cardClass = `p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-md transition 
    ${darkMode ? "text-white" : "text-black bg-white/50"}`;
  const iconStyle = "w-5 h-5 mr-2";

  return (
    <div className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-4 mr-4">
      {/* Cards */}
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className={cardClass}>
          <div className="flex items-center">
            <IndianRupee className={iconStyle} />
            <h4 className="text-sm opacity-70">Total Revenue</h4>
          </div>
          <p className="text-xl font-semibold mt-1">₹{totalRevenue}</p>
        </div>

        <div className={cardClass}>
          <div className="flex items-center">
            <ShoppingCart className={iconStyle} />
            <h4 className="text-sm opacity-70">Total Orders</h4>
          </div>
          <p className="text-xl font-semibold mt-1">{totalOrders}</p>
        </div>

        <div className={cardClass}>
          <div className="flex items-center">
            <CheckCircle className={iconStyle} />
            <h4 className="text-sm opacity-70">Successful Payments</h4>
          </div>
          <p className="text-xl font-semibold mt-1">{successfulPayments}</p>
        </div>

        <div className={cardClass}>
          <div className="flex items-center">
            <RotateCcw className={iconStyle} />
            <h4 className="text-sm opacity-70">Refunded Orders</h4>
          </div>
          <p className="text-xl font-semibold mt-1">{refundedOrders}</p>
        </div>
      </section>

      {/* Table */}
      <section className="mb-6">
        <div className={cardClass}>
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-2 text-left">Cart ID</th>
                  <th className="px-4 py-2 text-left">User ID</th>
                  <th className="px-4 py-2 text-left">Products</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Discount</th>
                </tr>
              </thead>
              <tbody>
                {recent.map(c => (
                  <tr
                    key={c.id}
                    className="border-t border-white/10 hover:bg-white/10 transition"
                  >
                    <td className="px-4 py-2">{c.id}</td>
                    <td className="px-4 py-2">{c.userId}</td>
                    <td className="px-4 py-2">{c.products.length}</td>
                    <td className="px-4 py-2">₹{c.total}</td>
                    <td className="px-4 py-2">₹{c.discountedTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={cardClass}>
          <h3 className="text-lg font-medium mb-2">Monthly Revenue</h3>
          <BarChart categories={months} values={monthTotals} />
        </div>
        <div className={cardClass}>
          <h3 className="text-lg font-medium mb-2">Payment Method Share</h3>
          <PieChart series={pieData} />
        </div>
      </section>
    </div>
  );
}
