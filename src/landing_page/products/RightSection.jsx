export default function RightSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <img
          src="products-console.png"
          alt="Console Dashboard"
          className="w-full"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Console — Your Dashboard
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Console is your portfolio dashboard where you can track investments,
            view P&L, analyze trades, download reports, and manage everything in
            one place.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Detailed Portfolio Insights</li>
            <li>• Tradebook & Reports</li>
            <li>• P&L Statements</li>
            <li>• Tax P&L & Holdings</li>
          </ul>

          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Explore Console →
          </a>
        </div>
      </div>
    </section>
  );
}
