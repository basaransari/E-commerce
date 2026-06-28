// src/components/NewArrivals.jsx

import React from "react";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  ArrowRight,
} from "lucide-react";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Earbuds",
      category: "Electronics",
      price: 2499,
      originalPrice: 3499,
      rating: 4.8,
      reviews: 124,
      badge: "NEW",
      image:
        "https://ubonindia.com/cdn/shop/files/j40_creative_phone.jpg?v=1778647050&width=1200",
    },
    {
      id: 2,
      name: "Luxury Smart Watch",
      category: "Accessories",
      price: 4999,
      originalPrice: 6999,
      rating: 4.9,
      reviews: 98,
      badge: "TRENDING",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    },
    {
      id: 3,
      name: "Modern Running Shoes",
      category: "Fashion",
      price: 2999,
      originalPrice: 3999,
      rating: 4.7,
      reviews: 156,
      badge: "HOT",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    },
    {
      id: 4,
      name: "Minimal Desk Setup",
      category: "Home & Living",
      price: 8999,
      originalPrice: 10999,
      rating: 4.8,
      reviews: 73,
      badge: "LIMITED",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    },
    {
      id: 5,
      name: "Professional Camera",
      category: "Electronics",
      price: 24999,
      originalPrice: 28999,
      rating: 4.9,
      reviews: 52,
      badge: "NEW",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    },
    {
      id: 6,
      name: "Premium Backpack",
      category: "Fashion",
      price: 1799,
      originalPrice: 2499,
      rating: 4.6,
      reviews: 143,
      badge: "BESTSELLER",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Fresh Collection
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            New Arrivals
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Explore the latest products added to Shoply. Premium quality,
            trending designs, and exclusive launches.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                  {product.badge}
                </span>

                <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                  <button
                    onClick={() =>
                      console.log("Wishlist:", product)
                    }
                    className="rounded-full bg-white p-3 shadow-lg"
                  >
                    <Heart size={18} />
                  </button>

                  <button
                    onClick={() =>
                      console.log("Quick View:", product)
                    }
                    className="rounded-full bg-white p-3 shadow-lg"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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

                  <span className="font-medium">
                    {product.rating}
                  </span>

                  <span className="text-sm text-slate-500">
                    ({product.reviews})
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

                <div className="mt-6 flex gap-3">
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
                      console.log("View Product:", product)
                    }
                    className="rounded-xl border border-slate-300 p-3 transition hover:border-indigo-600 hover:text-indigo-600"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => console.log("View All New Arrivals")}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            View All Arrivals
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;