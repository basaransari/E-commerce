// src/components/Home.jsx

import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
} from "lucide-react";

const Home = () => {
  const featuredCategories = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    },
    {
      id: 3,
      name: "Home & Living",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    },
    {
      id: 4,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      id: 2,
      name: "Luxury Smart Watch",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    },
    {
      id: 3,
      name: "Modern Sneakers",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    },
    {
      id: 4,
      name: "Premium Backpack",
      price: "₹1,799",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                Premium Ecommerce Experience
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                Shop Smarter With
                <span className="block text-indigo-600">
                  Shoply
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-600">
                Discover premium products, exclusive deals, and
                seamless shopping experiences designed for modern
                lifestyles.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => console.log("Shop Now")}
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => console.log("Browse Categories")}
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
                >
                  Browse Categories
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    10K+
                  </h3>
                  <p className="text-slate-500">
                    Happy Customers
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    5K+
                  </h3>
                  <p className="text-slate-500">
                    Products
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    4.9
                  </h3>
                  <p className="text-slate-500">
                    Rating
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                  alt="Shoply Hero"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <Truck className="mb-4 text-indigo-600" size={32} />
            <h3 className="font-bold text-slate-900">
              Free Shipping
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Free delivery on orders above ₹999.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <ShieldCheck
              className="mb-4 text-indigo-600"
              size={32}
            />
            <h3 className="font-bold text-slate-900">
              Secure Payment
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              100% safe and encrypted checkout.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <Headphones
              className="mb-4 text-indigo-600"
              size={32}
            />
            <h3 className="font-bold text-slate-900">
              24/7 Support
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Dedicated customer assistance.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <ShoppingBag
              className="mb-4 text-indigo-600"
              size={32}
            />
            <h3 className="font-bold text-slate-900">
              Premium Products
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Curated collection from top brands.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Shop By Category
            </h2>

            <p className="mt-3 text-slate-600">
              Explore our most popular categories.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((category) => (
              <div
                key={category.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-900">
                    {category.name}
                  </h3>

                  <button
                    onClick={() =>
                      console.log(category.name)
                    }
                    className="mt-3 text-sm font-semibold text-indigo-600"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Featured Products
            </h2>

            <p className="mt-3 text-slate-600">
              Handpicked products loved by customers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xl font-bold text-indigo-600">
                    {product.price}
                  </p>

                  <button
                    onClick={() =>
                      console.log("Add To Cart", product)
                    }
                    className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;