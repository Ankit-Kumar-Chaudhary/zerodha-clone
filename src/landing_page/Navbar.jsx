import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            className="h-6 transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <li>
            <Link to="/signup" className="hover:text-blue-600 transition">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-blue-600 transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/support" className="hover:text-blue-600 transition">
              Support
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {!menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-5 px-6 py-6 text-gray-700 font-medium">
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/signup"
                className="block hover:text-blue-600"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/about"
                className="block hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/products"
                className="block hover:text-blue-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/pricing"
                className="block hover:text-blue-600"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/support"
                className="block hover:text-blue-600"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
