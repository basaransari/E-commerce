// src/components/admin/Products.jsx

import React, { useState } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  X,
  Save,
} from "lucide-react";

const Products = () => {
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2999,
      stock: 12,
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Accessories",
      price: 4999,
      stock: 5,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const [errors, setErrors] = useState({});

  // ---------------- VALIDATION ----------------
  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!form.category.trim()) err.category = "Category is required";
    if (!form.price || form.price <= 0)
      err.price = "Enter valid price";
    if (form.stock === "" || form.stock < 0)
      err.stock = "Enter valid stock";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ---------------- HANDLE INPUT ----------------
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- OPEN CREATE ----------------
  const handleCreate = () => {
    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
    });
    setEditId(null);
    setErrors({});
    setIsOpen(true);
  };

  // ---------------- OPEN EDIT ----------------
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });
    setEditId(product.id);
    setErrors({});
    setIsOpen(true);
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      id: editId || Date.now(),
      ...form,
    };

    console.log("SUBMIT PRODUCT:", payload);

    if (editId) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editId ? payload : p))
      );
    } else {
      setProducts((prev) => [...prev, payload]);
    }

    setIsOpen(false);
  };

  // ---------------- DELETE ----------------
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Products
          </h1>
          <p className="text-slate-600">
            Create, edit and manage products
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-700"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* SEARCH */}
      <div className="relative">
        <Search className="absolute left-4 top-3 text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="border-b bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b hover:bg-slate-50">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-slate-600">{p.category}</td>
                <td className="p-4">₹{p.price}</td>
                <td className="p-4">{p.stock}</td>

                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="rounded-lg p-2 hover:bg-slate-100"
                    >
                      <Edit size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(p.id)}
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="p-10 text-center text-slate-500">
            No products found
          </div>
        )}
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                {editId ? "Edit Product" : "Create Product"}
              </h2>

              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">

              {/* NAME */}
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-full rounded-xl border p-3"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* CATEGORY */}
              <div>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="w-full rounded-xl border p-3"
                />
                {errors.category && (
                  <p className="text-sm text-red-500">
                    {errors.category}
                  </p>
                )}
              </div>

              {/* PRICE */}
              <div>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="w-full rounded-xl border p-3"
                />
                {errors.price && (
                  <p className="text-sm text-red-500">
                    {errors.price}
                  </p>
                )}
              </div>

              {/* STOCK */}
              <div>
                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                  className="w-full rounded-xl border p-3"
                />
                {errors.stock && (
                  <p className="text-sm text-red-500">
                    {errors.stock}
                  </p>
                )}
              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white"
                >
                  <Save size={16} />
                  {editId ? "Update" : "Save"}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Products;