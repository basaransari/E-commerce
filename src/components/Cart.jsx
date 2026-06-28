// src/components/Cart.jsx

import React, { useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ShieldCheck,
  Truck,
  ArrowRight,
  Tag,
} from "lucide-react";

const Cart = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(2);
  const [couponCode, setCouponCode] = useState("");

  const product1Price = 2999;
  const product2Price = 4999;

  const subtotal =
    quantity1 * product1Price + quantity2 * product2Price;

  const shipping = subtotal > 999 ? 0 : 99;
  const discount = 500;
  const total = subtotal + shipping - discount;

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            Shopping Cart
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Review Your Cart
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your selected products before checkout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-6 lg:col-span-2">
            {/* Product 1 */}
            <div className="rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="h-36 w-full overflow-hidden rounded-2xl bg-slate-100 md:w-36">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                    alt="Headphones"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm font-medium text-indigo-600">
                        Electronics
                      </span>

                      <h2 className="mt-1 text-xl font-bold text-slate-900">
                        Premium Wireless Headphones
                      </h2>

                      <p className="mt-2 text-sm text-slate-500">
                        Noise Cancellation • Bluetooth 5.3
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        console.log("Remove Product 1")
                      }
                      className="rounded-xl p-2 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center rounded-xl border border-slate-200">
                      <button
                        onClick={() =>
                          setQuantity1((prev) =>
                            Math.max(1, prev - 1)
                          )
                        }
                        className="p-3 transition hover:bg-slate-100"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="min-w-[50px] text-center font-semibold">
                        {quantity1}
                      </span>

                      <button
                        onClick={() =>
                          setQuantity1((prev) => prev + 1)
                        }
                        className="p-3 transition hover:bg-slate-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        Price
                      </p>

                      <p className="text-2xl font-bold text-slate-900">
                        ₹{product1Price * quantity1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="h-36 w-full overflow-hidden rounded-2xl bg-slate-100 md:w-36">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80"
                    alt="Smart Watch"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm font-medium text-indigo-600">
                        Accessories
                      </span>

                      <h2 className="mt-1 text-xl font-bold text-slate-900">
                        Luxury Smart Watch
                      </h2>

                      <p className="mt-2 text-sm text-slate-500">
                        AMOLED Display • Fitness Tracking
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        console.log("Remove Product 2")
                      }
                      className="rounded-xl p-2 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center rounded-xl border border-slate-200">
                      <button
                        onClick={() =>
                          setQuantity2((prev) =>
                            Math.max(1, prev - 1)
                          )
                        }
                        className="p-3 transition hover:bg-slate-100"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="min-w-[50px] text-center font-semibold">
                        {quantity2}
                      </span>

                      <button
                        onClick={() =>
                          setQuantity2((prev) => prev + 1)
                        }
                        className="p-3 transition hover:bg-slate-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        Price
                      </p>

                      <p className="text-2xl font-bold text-slate-900">
                        ₹{product2Price * quantity2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <button
              onClick={() =>
                console.log("Continue Shopping")
              }
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              <ShoppingBag size={18} />
              Continue Shopping
            </button>
          </div>

          {/* Summary */}
          <div>
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Order Summary
              </h2>

              {/* Coupon */}
              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Coupon Code
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) =>
                      setCouponCode(e.target.value)
                    }
                    placeholder="SHOPLY500"
                    className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <button
                    onClick={() =>
                      console.log(
                        "Apply Coupon:",
                        couponCode
                      )
                    }
                    className="rounded-xl bg-slate-900 px-4 py-3 font-medium text-white"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Details */}
              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Shipping
                  </span>

                  <span className="font-semibold text-green-600">
                    Free
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Discount
                  </span>

                  <span className="font-semibold text-green-600">
                    -₹{discount}
                  </span>
                </div>

                <div className="flex justify-between border-t border-slate-200 pt-4 text-xl font-bold text-slate-900">
                  <span>Total</span>

                  <span>₹{total}</span>
                </div>
              </div>

              {/* Checkout */}
              <button
                onClick={() =>
                  console.log({
                    quantity1,
                    quantity2,
                    subtotal,
                    total,
                    couponCode,
                  })
                }
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 font-semibold text-white transition hover:bg-indigo-700"
              >
                Proceed To Checkout
                <ArrowRight size={18} />
              </button>

              {/* Trust Signals */}
              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <ShieldCheck
                    size={18}
                    className="text-green-600"
                  />
                  Secure Payment Protection
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Truck
                    size={18}
                    className="text-indigo-600"
                  />
                  Free Delivery Above ₹999
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Tag
                    size={18}
                    className="text-orange-500"
                  />
                  Exclusive Member Discounts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;