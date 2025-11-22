export default function Education() {
  return (
    <section className="w-full py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Empowering India through{" "}
          <span className="text-blue-600">Financial Education</span>
        </h2>

        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          At Zerodha, we believe that access to knowledge is the foundation of
          smart investing. That's why we offer free, open, and
          easy-to-understand educational resources for all aspiring investors.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Varsity */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition">
            <img
              src="https://zerodha.com/static/images/education/varsity.png"
              className="h-14 mb-6"
              alt="Varsity"
            />
            <h3 className="text-xl font-semibold text-gray-900">Varsity</h3>
            <p className="mt-3 text-gray-600">
              Explore India's most trusted stock market education platform —
              simplified and structured like no other.
            </p>
            <a href="#" className="text-blue-600 font-medium mt-4 inline-block">
              Explore →
            </a>
          </div>

          {/* TradingQnA */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition">
            <img
              src="https://zerodha.com/static/images/education/tqa.png"
              className="h-14 mb-6"
              alt="Trading QnA"
            />
            <h3 className="text-xl font-semibold text-gray-900">Trading Q&A</h3>
            <p className="mt-3 text-gray-600">
              A community-driven Q&A platform to learn, ask, and discuss
              everything about stocks and investing.
            </p>
            <a href="#" className="text-blue-600 font-medium mt-4 inline-block">
              Learn more →
            </a>
          </div>

          {/* Learn App */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition">
            <img
              src="https://zerodha.com/static/images/education/learnapp.png"
              className="h-14 mb-6"
              alt="Learn App"
            />
            <h3 className="text-xl font-semibold text-gray-900">LearnApp</h3>
            <p className="mt-3 text-gray-600">
              Learn from experts through video lessons designed to make
              investing simple and practical.
            </p>
            <a href="#" className="text-blue-600 font-medium mt-4 inline-block">
              Start learning →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
