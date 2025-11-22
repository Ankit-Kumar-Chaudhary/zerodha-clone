import { Link } from "react-router-dom";
export default function Pricing() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Simple, transparent <span className="text-blue-600">pricing</span>
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          No hidden fees. No conditions. Just clean and honest pricing built for
          every investor.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Pricing Card #1 */}
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-gray-900">
              Equity Delivery
            </h3>
            <p className="mt-2 text-gray-600">Long-term investing made free.</p>
            <div className="mt-6 text-4xl font-bold text-blue-600">₹0</div>
            <p className="text-gray-600 mt-1">per trade</p>
            <ul className="mt-6 text-gray-700 space-y-2">
              <li>✔ No brokerage on equity delivery</li>
              <li>✔ Free direct mutual funds</li>
              <li>✔ Hidden charges: None</li>
            </ul>
          </div>

          {/* Pricing Card #2 */}
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-gray-900">
              Intraday Trading
            </h3>
            <p className="mt-2 text-gray-600">
              Low-cost trading for active traders.
            </p>
            <div className="mt-6 text-4xl font-bold text-blue-600">₹20</div>
            <p className="text-gray-600 mt-1">per executed order</p>
            <ul className="mt-6 text-gray-700 space-y-2">
              <li>✔ Equity intraday</li>
              <li>✔ Lower charges, higher liquidity</li>
              <li>✔ Free tools & charts</li>
            </ul>
          </div>

          {/* Pricing Card #3 */}
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-gray-900">F&O</h3>
            <p className="mt-2 text-gray-600">
              Trade futures and options at flat fees.
            </p>
            <div className="mt-6 text-4xl font-bold text-blue-600">₹20</div>
            <p className="text-gray-600 mt-1">per executed order</p>
            <ul className="mt-6 text-gray-700 space-y-2">
              <li>✔ Equity futures</li>
              <li>✔ Equity options</li>
              <li>✔ Currency & commodity</li>
            </ul>
          </div>
        </div>

        {/* Secondary Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Additional Charges
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Government taxes, exchange fees, and SEBI charges apply as per
            regulations. Zerodha does not add any hidden charges.
          </p>

          <Link
            to="/pricing"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-md 
             hover:bg-blue-700 transition"
          >
            View complete pricing →
          </Link>
        </div>
      </div>
    </section>
  );
}
