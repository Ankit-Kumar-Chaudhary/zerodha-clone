import React, { useState } from "react";

export default function Brokerage() {
  const [billing, setBilling] = useState("perTrade"); // or "subscription"
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      id: "free",
      title: "Basic (Free)",
      price: billing === "perTrade" ? "₹0 / trade" : "₹0 / mo",
      bullets: ["Zero account opening fee", "Basic charts", "Limited orders"],
    },
    {
      id: "flat",
      title: "Flat ₹20",
      price: billing === "perTrade" ? "₹20 / trade" : "₹799 / mo",
      bullets: [
        "All segments",
        "Advanced charts",
        "Brokerage per executed trade",
      ],
      popular: true,
    },
    {
      id: "pro",
      title: "Pro Subscription",
      price: billing === "perTrade" ? "₹15 / trade (est)" : "₹1499 / mo",
      bullets: [
        "Priority support",
        "Algo orders",
        "Lower per-trade for heavy traders",
      ],
    },
  ];

  const faqs = [
    {
      q: "Brokerage kaise calculate hota hai?",
      a: "Brokerage scheme per-segment vary kar sakta hai. Ye demo UI fixed values show karta hai — production mein backend se values aayengi.",
    },
    {
      q: "Kya GST aur exchange charges alag lagenge?",
      a: "Haan. Yaha dikhaye gaye rates brokerage ke hain; GST, SEBI, aur exchange charges alag se lagenge.",
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* header */}
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Brokerage Plans</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
            Choose a plan that fits your trading style. Toggle between per-trade
            pricing and monthly subscription.
          </p>

          {/* toggle */}
          <div className="mt-4 inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setBilling("perTrade")}
              className={`px-4 py-2 rounded-full transition ${
                billing === "perTrade"
                  ? "bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Per Trade
            </button>
            <button
              onClick={() => setBilling("subscription")}
              className={`px-4 py-2 rounded-full transition ${
                billing === "subscription"
                  ? "bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Subscription
            </button>
          </div>
        </header>

        {/* plans grid */}
        <section id="plans" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`rounded-xl p-6 border ${
                p.popular
                  ? "border-indigo-500 shadow-md"
                  : "border-gray-200 dark:border-gray-700"
              } bg-white dark:bg-gray-800`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.popular && (
                  <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="text-2xl font-bold">{p.price}</div>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 mt-1 text-green-600 dark:text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
                  Start with {p.title.split(" ")[0]}
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* comparison table */}
        <section id="compare" className="mt-12">
          <h4 className="text-xl font-semibold mb-4">Compare features</h4>
          <div className="overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Basic
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Flat ₹20
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-sm">Equity Delivery</td>
                  <td className="px-6 py-4">Free</td>
                  <td className="px-6 py-4">₹20 / trade</td>
                  <td className="px-6 py-4">Included*</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm">Intraday</td>
                  <td className="px-6 py-4">Not recommended</td>
                  <td className="px-6 py-4">₹20 / trade</td>
                  <td className="px-6 py-4">Lower per-trade</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm">Algo Orders</td>
                  <td className="px-6 py-4">—</td>
                  <td className="px-6 py-4">Basic</td>
                  <td className="px-6 py-4">Advanced</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm">Support</td>
                  <td className="px-6 py-4">Email</td>
                  <td className="px-6 py-4">Priority Email</td>
                  <td className="px-6 py-4">Phone & Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            *Included: means included when on that subscription — demo copy
            only.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h4 className="text-xl font-semibold mb-4">FAQ</h4>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between"
                >
                  <span className="font-medium">{f.q}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
