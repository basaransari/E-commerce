// src/components/admin/Dashboard.jsx

import React from "react";
import {
  ShoppingBag,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  Package,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹1,25,000",
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Orders",
      value: "1,240",
      icon: ShoppingCart,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Products",
      value: "320",
      icon: Package,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Users",
      value: "850",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD1021",
      customer: "Rahul Sharma",
      amount: "₹2,999",
      status: "Delivered",
    },
    {
      id: "#ORD1022",
      customer: "Aman Verma",
      amount: "₹5,499",
      status: "Processing",
    },
    {
      id: "#ORD1023",
      customer: "Neha Singh",
      amount: "₹1,799",
      status: "Shipped",
    },
  ];

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>
        <p className="text-slate-600">
          Welcome back, manage your store efficiently.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`rounded-xl p-3 ${item.color}`}
                >
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ANALYTICS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Sales Overview
            </h2>
            <TrendingUp className="text-green-500" />
          </div>

          <div className="flex h-40 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
            Chart Placeholder (Add Recharts later)
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            Recent Orders
          </h2>

          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 p-4"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {order.id}
                  </p>
                  <p className="text-sm text-slate-500">
                    {order.customer}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-slate-900">
                    {order.amount}
                  </p>
                  <p
                    className={`text-sm ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Shipped"
                        ? "text-indigo-600"
                        : "text-orange-600"
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-slate-900">
          Quick Actions
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-700">
            Add Product
          </button>

          <button className="rounded-xl bg-slate-900 px-4 py-3 font-medium text-white hover:bg-slate-800">
            View Orders
          </button>

          <button className="rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 hover:border-indigo-600 hover:text-indigo-600">
            Manage Users
          </button>

          <button className="rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 hover:border-indigo-600 hover:text-indigo-600">
            Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;