// src/components/Layout.jsx

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* LOGO */}
          <Link to="/">
            <Logo />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-indigo-600"
                      : "text-slate-700 hover:text-indigo-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* SEARCH */}
          <div className="hidden lg:block">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-72 rounded-xl border border-slate-300 bg-slate-50 py-2 pl-10 pr-4 outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => console.log("wishlist")}
              className="hidden rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:flex"
            >
              <Heart size={20} />
            </button>

            {/* CART */}
            <Link
              to="/cart"
              className="relative rounded-xl p-2 text-slate-600 hover:bg-slate-100"
            >
              <ShoppingCart size={20} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                3
              </span>
            </Link>

            {/* LOGIN */}
            <Link
              to="/login"
              className="hidden items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-indigo-600 hover:text-indigo-600 lg:flex"
            >
              <User size={16} />
              Login
            </Link>

            {/* SIGNUP */}
            <Link
              to="/signup"
              className="hidden rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 lg:block"
            >
              Sign Up
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="space-y-4 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 font-medium ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-slate-300 px-4 py-3 text-center"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-indigo-600 px-4 py-3 text-center text-white"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="mt-20 bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-slate-400">
              Shoply is your premium ecommerce destination for
              quality products and seamless shopping experience.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Help Center</p>
              <p>Returns</p>
              <p>Shipping</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                +91 9876543210
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                support@shoply.com
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={16} />
                Lucknow, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Shoply. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;