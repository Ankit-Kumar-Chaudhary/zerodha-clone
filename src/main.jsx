import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import App from "./App.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Products from "./landing_page/products/ProductsPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Support from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>
);
