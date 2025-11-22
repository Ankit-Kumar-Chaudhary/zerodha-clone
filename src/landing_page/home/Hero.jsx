import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Hero Image */}
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="Zerodha Hero"
          className="w-full max-w-3xl mb-10"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Invest in everything
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>

        {/* CTA Button */}
        <Link
          to="./signup"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-md 
             hover:bg-blue-700 transition"
        >
          Sign up for free →
        </Link>
      </div>
    </section>
  );
}
