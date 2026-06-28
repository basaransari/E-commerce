// src/components/Categories.jsx

import React from "react";
import {
  Smartphone,
  Shirt,
  Sofa,
  Dumbbell,
  Watch,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: Smartphone,
      products: "1,250+ Products",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    },
    {
      id: 2,
      name: "Fashion",
      icon: Shirt,
      products: "2,100+ Products",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    },
    {
      id: 3,
      name: "Home & Living",
      icon: Sofa,
      products: "850+ Products",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    },
    {
      id: 4,
      name: "Sports",
      icon: Dumbbell,
      products: "650+ Products",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    },
    {
      id: 5,
      name: "Accessories",
      icon: Watch,
      products: "950+ Products",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    },
    {
      id: 6,
      name: "Beauty",
      icon: Sparkles,
      products: "720+ Products",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Shop By Category
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Explore Popular Categories
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Discover premium products across our most popular shopping
            categories and find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.name}
                    </h3>

                    <ChevronRight
                      size={20}
                      className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                    />
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {category.products}
                  </p>

                  <button
                    className="mt-5 w-full rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-indigo-600 hover:text-white"
                    onClick={() =>
                      console.log(`Browse ${category.name}`)
                    }
                  >
                    Browse Category
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;