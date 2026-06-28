// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";

// Pages
import Home from "./components/Home";
import Shop from "./components/Shop";
import Categories from "./components/Categories";
import NewArrivals from "./components/NewArrivals";
import ShopDetails from "./components/ShopDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

// Admin Pages
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import OrderTracking from "./components/OrderTracking";

const MainLayout = ({ children }) => <Layout>{children}</Layout>;

const AdminWrapper = ({ children }) => <AdminLayout>{children}</AdminLayout>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= AUTH (NO LAYOUT) ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= MAIN WEBSITE ================= */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/shop"
          element={
            <MainLayout>
              <Shop />
            </MainLayout>
          }
        />
        <Route
          path="/shop/:id"
          element={
            <MainLayout>
              <ShopDetails />
            </MainLayout>
          }
        />
        <Route
          path="/categories"
          element={
            <MainLayout>
              <Categories />
            </MainLayout>
          }
        />
        <Route
          path="/new-arrivals"
          element={
            <MainLayout>
              <NewArrivals />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <MainLayout>
              <Checkout />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* ================= ADMIN PANEL ================= */}
        <Route
          path="/admin"
          element={
            <AdminWrapper>
              <Dashboard />
            </AdminWrapper>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminWrapper>
              <Products />
            </AdminWrapper>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminWrapper>
              <Orders />
            </AdminWrapper>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminWrapper>
              <Users />
            </AdminWrapper>
          }
        />

        {/* ================= 404 PAGE ================= */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-center">
              <div>
                <h1 className="text-6xl font-bold text-indigo-600">404</h1>

                <p className="mt-4 text-xl font-semibold text-slate-900">
                  Page Not Found
                </p>

                <p className="mt-2 text-slate-600">
                  The page you are looking for doesn’t exist.
                </p>

                <a
                  href="/"
                  className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
                >
                  Go Home
                </a>
              </div>
            </div>
          }
        />

        <Route
          path="/track-order"
          element={
            <Layout>
              <OrderTracking />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
