// src/components/admin/Users.jsx

import React, { useState } from "react";
import {
  Search,
  User,
  Mail,
  Phone,
  Shield,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  X,
  Save,
} from "lucide-react";

const Users = () => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "+919876543210",
      role: "Customer",
      status: "Active",
      orders: 12,
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@gmail.com",
      phone: "+919123456780",
      role: "Customer",
      status: "Inactive",
      orders: 5,
    },
    {
      id: 3,
      name: "Neha Singh",
      email: "neha@gmail.com",
      phone: "+919988776655",
      role: "Admin",
      status: "Active",
      orders: 0,
    },
    {
      id: 4,
      name: "Vikram Yadav",
      email: "vikram@gmail.com",
      phone: "+919001122334",
      role: "Customer",
      status: "Active",
      orders: 8,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Customer",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (user) => {
    setEditUserId(user.id);

    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      status: user.status,
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

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
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

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const updatedUser = {
      id: editUserId,
      orders:
        users.find((u) => u.id === editUserId)?.orders || 0,
      ...form,
    };

    console.log("UPDATED USER:", updatedUser);

    setUsers((prev) =>
      prev.map((user) =>
        user.id === editUserId ? updatedUser : user
      )
    );

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    console.log("DELETE USER:", id);

    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  const getStatusUI = (status) => {
    return status === "Active" ? (
      <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
        <UserCheck size={14} />
        Active
      </span>
    ) : (
      <span className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
        <UserX size={14} />
        Inactive
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Users
        </h1>

        <p className="text-slate-600">
          Manage registered customers and admins
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
          placeholder="Search users..."
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
              <th className="p-4">User</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Role</th>
              <th className="p-4">Orders</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <User size={18} />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        {user.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        ID #{user.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    {user.email}
                  </div>
                </td>

                <td className="p-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone size={14} />
                    {user.phone}
                  </div>
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      user.role === "Admin"
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Shield
                      size={14}
                      className="mr-1 inline"
                    />
                    {user.role}
                  </span>
                </td>

                <td className="p-4 font-medium">
                  {user.orders}
                </td>

                <td className="p-4">
                  {getStatusUI(user.status)}
                </td>

                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="rounded-lg p-2 hover:bg-slate-100"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(user.id)
                      }
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="p-10 text-center text-slate-500">
            No users found
          </div>
        )}
      </div>

      {/* EDIT USER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Edit User
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
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name}
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
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                >
                  <option value="Customer">
                    Customer
                  </option>
                  <option value="Admin">
                    Admin
                  </option>
                </select>
              </div>

              <div>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                >
                  <option value="Active">
                    Active
                  </option>
                  <option value="Inactive">
                    Inactive
                  </option>
                </select>
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

export default Users;