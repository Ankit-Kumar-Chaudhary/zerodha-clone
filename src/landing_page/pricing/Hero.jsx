export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: text + CTAs */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">
              Brokerage plans that keep your trading cheap — and simple.
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
              Flat & transparent brokerage, advanced charts and lightning-fast
              order execution. Designed for investors and active traders — pay
              only for what you use.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#plans"
                className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm text-sm font-medium"
                aria-label="See plans"
              >
                See plans
              </a>
              <a
                href="#compare"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200"
                aria-label="Compare"
              >
                Compare
              </a>
            </div>

            {/* small trust / features row */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                  ₹0
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Account Opening
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                  ₹20
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Avg per trade*
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                  99.9%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Uptime
                </div>
              </div>
            </div>
          </div>

          {/* Right: cards + chart */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    Recommended
                  </div>
                  <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Flat ₹20 per trade
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    One price across equity, F&O, commodities
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                    Popular
                  </span>
                </div>
              </div>

              {/* mini chart placeholder */}
              <div className="mt-4">
                <svg
                  viewBox="0 0 200 60"
                  className="w-full h-14"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#6366f1"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 C30,30 60,60 90,40 C120,20 150,35 180,25 L200,25 L200,60 L0,60 Z"
                    fill="url(#g)"
                  ></path>
                  <polyline
                    points="0,50 30,30 60,60 90,40 120,20 150,35 180,25 200,25"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polyline>
                </svg>
              </div>

              {/* small metric row */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Avg trade size
                  </div>
                  <div className="font-medium text-gray-900 dark:text-gray-50">
                    ₹12.5k
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Orders/day
                  </div>
                  <div className="font-medium text-gray-900 dark:text-gray-50">
                    1.2k
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Savings
                  </div>
                  <div className="font-medium text-green-600 dark:text-green-400">
                    ₹250/mo
                  </div>
                </div>
              </div>
            </div>

            {/* small footnote */}
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              *Actual brokerage varies by product and market. This is a demo UI
              for a Zerodha-like clone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
