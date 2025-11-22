export default function Stats() {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          India’s largest stock broker
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          Over 1.5+ crore clients trust Zerodha for investing and trading in the
          Indian markets.
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-10 mt-16 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">1.5+ Cr</h3>
            <p className="mt-2 text-gray-700">Active Clients</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">15,000+</h3>
            <p className="mt-2 text-gray-700">Daily Accounts Opened</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">₹2.5+ Lakh Cr</h3>
            <p className="mt-2 text-gray-700">Daily Trading Volume</p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">15+ Years</h3>
            <p className="mt-2 text-gray-700">Industry Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
