// src/components/Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-white text-center py-20 px-6 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Welcome to <span className="text-yellow-500">ShoppyGlobe</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Shop millions of products, explore global deals, and experience premium convenience — all in one place.
        </p>
        <Link
          to="/"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-500 transition"
        >
          Begin Shopping
        </Link>
      </div>
    </section>
  );
}

export default Hero;
