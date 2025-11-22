import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Open a Zerodha account
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and
          F&O trades.
        </p>

        {/* Signup Button */}
        <Link
          to="/signup"
          className="inline-block mt-10 bg-blue-600 text-white text-lg px-8 py-3 rounded-md 
                     hover:bg-blue-700 transition-all"
        >
          Signup for free
        </Link>
      </div>
    </section>
  );
}
