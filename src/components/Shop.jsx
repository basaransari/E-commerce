// src/components/Shop.jsx

import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingCart,
  Star,
  Grid3X3,
  List,
} from "lucide-react";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "Accessories",
      price: 2499,
      originalPrice: 3499,
      rating: 4.7,
      reviews: 89,
      badge: "Trending",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    },
    {
      id: 3,
      name: "Modern Sneakers",
      category: "Fashion",
      price: 1899,
      originalPrice: 2499,
      rating: 4.9,
      reviews: 210,
      badge: "Hot",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    },
    {
      id: 4,
      name: "Premium Office Chair",
      category: "Home & Living",
      price: 7999,
      originalPrice: 9999,
      rating: 4.6,
      reviews: 58,
      badge: "Popular",
      image:
        "https://interio.com/media/catalog/product/c/r/cross00002_a2_413x440.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
    },
    {
      id: 5,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 1599,
      originalPrice: 2199,
      rating: 4.8,
      reviews: 142,
      badge: "Sale",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
    },
    {
      id: 6,
      name: "Luxury Backpack",
      category: "Fashion",
      price: 1299,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 96,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Shop Products
            </h1>

            <p className="mt-2 text-slate-600">
              Discover premium products curated for you.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-indigo-500 sm:w-72"
              />
            </div>

            {/* Filter */}
            <button
              onClick={() => console.log("Open Filters")}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-slate-600">
            {filteredProducts.length} Products Found
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`rounded-lg p-2 ${
                view === "grid"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              <Grid3X3 size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`rounded-lg p-2 ${
                view === "list"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Products */}
        <div
          className={`grid gap-6 ${
            view === "grid"
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                view === "list"
                  ? "flex flex-col md:flex-row"
                  : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  view === "list"
                    ? "md:w-72"
                    : "aspect-square"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  {product.badge}
                </span>

                <button
                  onClick={() =>
                    console.log("Wishlist:", product.name)
                  }
                  className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                >
                  <Heart size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-sm font-medium text-indigo-600">
                  {product.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-medium">
                    {product.rating}
                  </span>

                  <span className="text-sm text-slate-500">
                    ({product.reviews} Reviews)
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-bold text-slate-900">
                    ₹{product.price}
                  </span>

                  <span className="text-sm text-slate-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>

                <div className="mt-auto flex gap-3 pt-6">
                  <button
                    onClick={() =>
                      console.log("Add To Cart:", product)
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>

                  <button
                    onClick={() =>
                      console.log("Wishlist:", product)
                    }
                    className="rounded-xl border border-slate-300 p-3 transition hover:border-indigo-600 hover:text-indigo-600"
                  >
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              No Products Found
            </h3>

            <p className="mt-2 text-slate-600">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;