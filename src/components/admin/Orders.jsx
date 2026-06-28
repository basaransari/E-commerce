// src/components/admin/Orders.jsx

import React, { useState } from "react";
import {
  Search,
  Edit,
  Clock,
  Truck,
  CheckCircle,
  XCircle,
  X,
  Save,
} from "lucide-react";

const Orders = () => {
  const [search, setSearch] = useState("");

  const [orders, setOrders] = useState([
    {
      id: "#ORD1001",
      customer: "Rahul Sharma",
      email: "rahul@gmail.com",
      amount: 2999,
      status: "Delivered",
      date: "2026-06-20",
    },
    {
      id: "#ORD1002",
      customer: "Aman Verma",
      email: "aman@gmail.com",
      amount: 4999,
      status: "Processing",
      date: "2026-06-22",
    },
    {
      id: "#ORD1003",
      customer: "Neha Singh",
      email: "neha@gmail.com",
      amount: 1499,
      status: "Shipped",
      date: "2026-06-23",
    },
    {
      id: "#ORD1004",
      customer: "Vikram Yadav",
      email: "vikram@gmail.com",
      amount: 7999,
      status: "Cancelled",
      date: "2026-06-24",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOrderId, setEditOrderId] = useState(null);

  const [form, setForm] = useState({
    customer: "",
    email: "",
    amount: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleEdit = (order) => {
    setEditOrderId(order.id);

    setForm({
      customer: order.customer,
      email: order.email,
      amount: order.amount,
      status: order.status,
    });

    setErrors({});
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.customer.trim()) {
      newErrors.customer = "Customer name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        form.email
      )
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.amount || Number(form.amount) <= 0) {
      newErrors.amount = "Enter a valid amount";
    }

    if (!form.status) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const updatedOrder = {
      ...orders.find((o) => o.id === editOrderId),
      customer: form.customer,
      email: form.email,
      amount: Number(form.amount),
      status: form.status,
    };

    console.log("UPDATED ORDER:", updatedOrder);

    setOrders((prev) =>
      prev.map((order) =>
        order.id === editOrderId
          ? updatedOrder
          : order
      )
    );

    setIsModalOpen(false);
  };

  const getStatusUI = (status) => {
    switch (status) {
      case "Delivered":
        return (
          <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
            <CheckCircle size={14} />
            Delivered
          </span>
        );

      case "Processing":
        return (
          <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-600">
            <Clock size={14} />
            Processing
          </span>
        );

      case "Shipped":
        return (
          <span className="flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
            <Truck size={14} />
            Shipped
          </span>
        );

      case "Cancelled":
        return (
          <span className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
            <XCircle size={14} />
            Cancelled
          </span>
        );

      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Orders
        </h1>

        <p className="text-slate-600">
          Manage customer orders
        </p>
      </div>

      {/* SEARCH */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="border-b bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Email</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {order.id}
                </td>

                <td className="p-4">
                  {order.customer}
                </td>

                <td className="p-4 text-slate-600">
                  {order.email}
                </td>

                <td className="p-4 font-medium">
                  ₹{order.amount}
                </td>

                <td className="p-4 text-slate-600">
                  {order.date}
                </td>

                <td className="p-4">
                  {getStatusUI(order.status)}
                </td>

                <td className="p-4">
                  <div className="flex justify-end">
                    <button
                      onClick={() =>
                        handleEdit(order)
                      }
                      className="rounded-lg p-2 hover:bg-slate-100"
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="p-10 text-center text-slate-500">
            No orders found
          </div>
        )}
      </div>

      {/* EDIT ORDER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Edit Order
              </h2>

              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="customer"
                  value={form.customer}
                  onChange={handleChange}
                  placeholder="Customer Name"
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                />

                {errors.customer && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.customer}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="Order Amount"
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                />

                {errors.amount && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.amount}
                  </p>
                )}
              </div>

              <div>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                >
                  <option value="">
                    Select Status
                  </option>

                  <option value="Processing">
                    Processing
                  </option>

                  <option value="Shipped">
                    Shipped
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>

                  <option value="Cancelled">
                    Cancelled
                  </option>
                </select>

                {errors.status && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.status}
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;