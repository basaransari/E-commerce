// src/components/ShopDetails.jsx

import React, { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
  Check,
} from "lucide-react";

const ShopDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Premium Wireless Noise Cancelling Headphones",
    category: "Electronics",
    brand: "Shoply Audio",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 1248,
    stock: 18,
    sku: "SH-HP-001",
    description:
      "Experience immersive sound with premium noise cancellation technology, crystal-clear audio quality, and all-day comfort. Designed for music lovers, professionals, and travelers.",
    features: [
      "Active Noise Cancellation",
      "40 Hours Battery Life",
      "Bluetooth 5.3 Connectivity",
      "Premium Sound Quality",
      "Fast USB-C Charging",
      "Built-in Microphone",
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=1200&q=80",
    ],
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Smart Watch Pro",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    },
    {
      id: 2,
      name: "Gaming Headset",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80",
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    },
    {
      id: 4,
      name: "Premium Earbuds",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?w=800&q=80",
    },
  ];

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    console.log({
      productId: product.id,
      quantity,
      product,
    });
  };

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Product Section */}
        <div className="rounded-3xl bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Images */}
            <div>
              <div className="overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-2xl border-2 ${
                      selectedImage === index
                        ? "border-indigo-600"
                        : "border-slate-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      loading="lazy"
                      className="h-24 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                {product.category}
              </span>

              <h1 className="mt-4 text-4xl font-bold text-slate-900">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span className="font-semibold">
                    {product.rating}
                  </span>
                </div>

                <span className="text-slate-500">
                  ({product.reviews} Reviews)
                </span>

                <span className="text-slate-400">
                  SKU: {product.sku}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-4xl font-bold text-slate-900">
                  ₹{product.price}
                </span>

                <span className="text-xl text-slate-400 line-through">
                  ₹{product.originalPrice}
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  {discountPercentage}% OFF
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-slate-600">
                {product.description}
              </p>

              {/* Stock */}
              <div className="mt-6 flex items-center gap-2">
                <Check
                  size={18}
                  className="text-green-600"
                />

                <span className="font-medium text-green-600">
                  In Stock ({product.stock} Available)
                </span>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="mb-3 font-semibold text-slate-900">
                  Quantity
                </p>

                <div className="flex w-fit items-center rounded-xl border border-slate-200">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-slate-100"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="px-6 font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    className="p-3 hover:bg-slate-100"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700"
                >
                  <ShoppingCart size={20} />
                  Add To Cart
                </button>

                <button
                  onClick={() =>
                    console.log("Wishlist", product)
                  }
                  className="rounded-xl border border-slate-300 p-4 hover:border-indigo-600 hover:text-indigo-600"
                >
                  <Heart size={20} />
                </button>

                <button
                  onClick={() =>
                    console.log("Share Product", product)
                  }
                  className="rounded-xl border border-slate-300 p-4 hover:border-indigo-600 hover:text-indigo-600"
                >
                  <Share2 size={20} />
                </button>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  Key Features
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <Check
                        size={18}
                        className="text-green-600"
                      />
                      <span className="text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <Truck
                    size={24}
                    className="mx-auto text-indigo-600"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Free Shipping
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <RotateCcw
                    size={24}
                    className="mx-auto text-indigo-600"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Easy Returns
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <ShieldCheck
                    size={24}
                    className="mx-auto text-indigo-600"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Secure Payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Related Products
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xl font-bold text-indigo-600">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() =>
                      console.log("View Product", item)
                    }
                    className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800"
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;