import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Signup Successful (Demo UI)");
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Brand / Info Section */}
        <div className="bg-gray-100 flex flex-col justify-center p-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Create your trading account
          </h1>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-sm">
            Invest in stocks, IPOs, F&O, mutual funds and more — with lowest
            brokerage & fast order execution.
          </p>

          {/* Small bullet points */}
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              Zero account opening fee
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              ₹20 intraday & F&O trades
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              Free equity delivery
            </li>
          </ul>
        </div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit}
          className="p-10 flex flex-col justify-center bg-white"
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Sign up to get started
          </h2>

          <div className="mt-6 space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-50"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                required
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                maxLength={10}
                placeholder="10-digit mobile number"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-50"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium shadow"
            >
              Create Account
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
