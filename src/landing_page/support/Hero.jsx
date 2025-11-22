export default function Hero() {
  return (
    <section className="bg-gray-50 border-b">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Support Portal
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Search for answers, contact our support team, or track your
          account-related queries.
        </p>

        <div className="mt-8 max-w-2xl mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Search for support articles, account info, or FAQs"
            className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
    </section>
  );
}
