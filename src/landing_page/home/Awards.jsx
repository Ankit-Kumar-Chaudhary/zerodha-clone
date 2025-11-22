export default function Awards() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Largest stock broker in India
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            1+ crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing to over 15%
            of all Indian retail trading volumes.
          </p>

          <ul className="mt-6 text-gray-700 space-y-3">
            <li>• Best retail brokerage firm – NSE</li>
            <li>• Most innovative Fintech – Global Markets Awards</li>
            <li>• Best investment platform – ET Startup Awards</li>
            <li>• No.1 trading experience – India Fintech Forum</li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src="./public/ecosystem.png"
            alt="Zerodha Awards"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
