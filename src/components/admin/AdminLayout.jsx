// src/components/admin/AdminLayout.jsx

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Users,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
} from "lucide-react";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Products", path: "/admin/products", icon: ShoppingBag },
    { name: "Orders", path: "/admin/orders", icon: ShoppingCart },
    { name: "Users", path: "/admin/users", icon: Users },
  ];

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static z-50 h-screen w-72 bg-slate-900 text-white flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <h1 className="text-xl font-bold text-white">
            Shoply Admin
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* MENU */}
        <nav className="mt-6 flex-1 space-y-2 px-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* LOGOUT (BOTTOM FIXED AREA) */}
        <div className="border-t border-slate-800 p-4">
          <button
            onClick={() => console.log("logout")}
            className="flex w-full items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 text-sm font-medium hover:bg-slate-700"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col h-screen overflow-hidden">

        {/* TOPBAR */}
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">

          {/* MOBILE MENU */}
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>

          {/* SEARCH */}
          <div className="hidden w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 lg:flex">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search admin panel..."
              className="w-full outline-none"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <button className="relative rounded-xl p-2 hover:bg-slate-100">
              <Bell />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-indigo-600"></div>

              <div className="hidden text-sm lg:block">
                <p className="font-medium">Admin</p>
                <p className="text-xs text-slate-500">Super User</p>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;