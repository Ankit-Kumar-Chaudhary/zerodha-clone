export default function LeftSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <img
          src="products-kite.png"
          alt="Trading Platform"
          className="w-full"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Kite — Our Flagship Trading Platform
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A clean, fast, and powerful trading experience built for the modern
            trader. Enjoy advanced charting, lightning-fast order execution, and
            seamless navigation.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Advanced Charting Tools</li>
            <li>• Integrated Market Data</li>
            <li>• Easy-to-use Order Window</li>
            <li>• API Access for Algo Trading</li>
          </ul>

          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Explore Kite →
          </a>
        </div>
      </div>
    </section>
  );
}
