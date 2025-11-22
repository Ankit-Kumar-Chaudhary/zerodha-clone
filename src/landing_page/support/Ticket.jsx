export default function Ticket() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Box */}
        <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900">Create a Ticket</h2>

          <p className="mt-4 text-gray-600">
            Facing an issue with your account, login, trading, or funds? Submit
            a support ticket and our team will respond quickly.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Submit a Ticket →
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Response time: 2–6 business hours
          </p>
        </div>

        {/* Right Side Options */}
        <div className="space-y-6">
          <div className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Account Issues
            </h3>
            <p className="text-gray-600 mt-2">
              KYC, onboarding, login problems, mobile change, password reset…
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium mt-2 inline-block"
            >
              Learn more →
            </a>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Funds & Withdrawals
            </h3>
            <p className="text-gray-600 mt-2">
              Add money, withdraw balance, bank change, payment delays…
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium mt-2 inline-block"
            >
              Learn more →
            </a>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Trading & Orders
            </h3>
            <p className="text-gray-600 mt-2">
              Order rejections, margin issues, execution delays, charts…
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium mt-2 inline-block"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
