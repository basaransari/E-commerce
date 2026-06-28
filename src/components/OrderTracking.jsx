// src/components/OrderTracking.jsx

import React, { useState } from "react";
import {
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Eye,
} from "lucide-react";

const OrderTracking = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD1001",
      date: "25 Jun 2026",
      amount: 2999,
      status: "Processing",
      items: 3,
      address: "Lucknow, Uttar Pradesh",
      payment: "Online Payment",
    },
    {
      id: "ORD1002",
      date: "22 Jun 2026",
      amount: 4999,
      status: "Shipped",
      items: 2,
      address: "Delhi, India",
      payment: "Credit Card",
    },
    {
      id: "ORD1003",
      date: "18 Jun 2026",
      amount: 1999,
      status: "Delivered",
      items: 1,
      address: "Mumbai, India",
      payment: "UPI",
    },
    {
      id: "ORD1004",
      date: "12 Jun 2026",
      amount: 8999,
      status: "Cancelled",
      items: 4,
      address: "Bangalore, India",
      payment: "Online Payment",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleCancelOrder = (id) => {
    console.log("CANCEL ORDER:", id);

    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status: "Cancelled" }
          : order
      )
    );

    if (selectedOrder?.id === id) {
      setSelectedOrder({
        ...selectedOrder,
        status: "Cancelled",
      });
    }
  };

  const handleViewOrder = (order) => {
    console.log("VIEW ORDER:", order);

    setSelectedOrder(order);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-100 text-yellow-700";

      case "Shipped":
        return "bg-indigo-100 text-indigo-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Processing":
        return <Package size={16} />;

      case "Shipped":
        return <Truck size={16} />;

      case "Delivered":
        return <CheckCircle size={16} />;

      case "Cancelled":
        return <XCircle size={16} />;

      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            My Orders
          </h1>

          <p className="mt-2 text-slate-600">
            Manage and track all your orders
          </p>
        </div>

        {/* ORDERS LIST */}
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    #{order.id}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Ordered on {order.date}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Total Amount
                  </p>

                  <p className="font-bold text-indigo-600">
                    ₹{order.amount}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Items
                  </p>

                  <p className="font-semibold text-slate-900">
                    {order.items}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      handleViewOrder(order)
                    }
                    className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
                  >
                    <Eye size={16} />
                    View Details
                  </button>

                  {(order.status ===
                    "Processing" ||
                    order.status ===
                      "Shipped") && (
                    <button
                      onClick={() =>
                        handleCancelOrder(order.id)
                      }
                      className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER DETAILS */}
        {selectedOrder && (
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                Order Details
              </h2>

              <button
                onClick={() =>
                  setSelectedOrder(null)
                }
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-slate-500">
                  Order ID
                </p>

                <p className="font-semibold text-slate-900">
                  #{selectedOrder.id}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Order Date
                </p>

                <p className="font-semibold text-slate-900">
                  {selectedOrder.date}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Amount
                </p>

                <p className="font-semibold text-indigo-600">
                  ₹{selectedOrder.amount}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Status
                </p>

                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${getStatusStyle(
                    selectedOrder.status
                  )}`}
                >
                  {getStatusIcon(
                    selectedOrder.status
                  )}
                  {selectedOrder.status}
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <h3 className="mb-3 font-semibold text-slate-900">
                  Shipping Address
                </h3>

                <p className="text-slate-600">
                  {selectedOrder.address}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <h3 className="mb-3 font-semibold text-slate-900">
                  Payment Method
                </h3>

                <p className="text-slate-600">
                  {selectedOrder.payment}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-4 font-semibold text-slate-900">
                Order Timeline
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={18}
                    className="text-green-500"
                  />
                  <span>
                    Order Placed Successfully
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Package
                    size={18}
                    className="text-green-500"
                  />
                  <span>
                    Order Packed & Ready
                  </span>
                </div>

                {(selectedOrder.status ===
                  "Shipped" ||
                  selectedOrder.status ===
                    "Delivered") && (
                  <div className="flex items-center gap-3">
                    <Truck
                      size={18}
                      className="text-indigo-500"
                    />
                    <span>
                      Order Shipped
                    </span>
                  </div>
                )}

                {selectedOrder.status ===
                  "Delivered" && (
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                    <span>
                      Order Delivered
                    </span>
                  </div>
                )}

                {selectedOrder.status ===
                  "Cancelled" && (
                  <div className="flex items-center gap-3">
                    <XCircle
                      size={18}
                      className="text-red-500"
                    />
                    <span>
                      Order Cancelled
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderTracking;