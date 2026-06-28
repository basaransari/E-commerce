// src/components/Checkout.jsx

import React, { useState } from "react";
import {
  CreditCard,
  MapPin,
  User,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  Lock,
  ArrowRight,
} from "lucide-react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState({});

  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 2999,
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 4999,
      quantity: 1,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Checkout Form Data:", formData);

    console.log("Order Items:", cartItems);

    alert("Order Placed Successfully!");
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const discount = 500;
  const total = subtotal + shipping - discount;

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Checkout
          </h1>

          <p className="mt-2 text-slate-600">
            Complete your order securely.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* Billing Details */}
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Billing Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    First Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
                    />
                  </div>

                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Address
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <textarea
                      rows="4"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
                    />
                  </div>

                  {errors.address && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    {errors.state && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      ZIP Code
                    </label>

                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.zipCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Payment Method
              </h2>

              <div className="space-y-4">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                  />

                  <CreditCard size={20} />

                  <span>Credit / Debit Card</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                  />

                  <Truck size={20} />

                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between"
                  >
                    <span className="text-slate-600">
                      {item.name} × {item.quantity}
                    </span>

                    <span className="font-semibold">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 border-t border-slate-200 pt-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>

                <div className="flex justify-between border-t border-slate-200 pt-4 text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 font-semibold text-white transition hover:bg-indigo-700"
              >
                <Lock size={18} />
                Place Order
                <ArrowRight size={18} />
              </button>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />
                Secure & Encrypted Checkout
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;