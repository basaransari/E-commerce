// src/components/Contact.jsx

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
} from "lucide-react";
import Logo from "./Logo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Contact Form Data:", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="flex justify-center">
            <Logo size="md" />
          </div>

          <h1 className="mt-6 text-4xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="mt-4 text-slate-600">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-indigo-100 p-3">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    support@shoply.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-indigo-100 p-3">
                  <Phone className="h-5 w-5 text-indigo-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Phone
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-indigo-100 p-3">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Address
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Shoply Headquarters, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-indigo-100 p-3">
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Working Hours
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Mon - Sat : 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;