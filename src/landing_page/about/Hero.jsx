export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50">
          Building the future of investing.
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          We are a team of passionate engineers, designers, and traders building
          intuitive tools that empower millions to invest smarter. With
          lightning-fast tech and transparent pricing, our goal is simple:
          redefine how India trades.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#team"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow font-medium"
          >
            Meet Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
