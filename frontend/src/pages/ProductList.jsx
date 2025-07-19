import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useState } from "react";
import Hero from "../components/Hero";

function ProductList() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#131921]">
          Explore Our Products
        </h1>

        {/* Amazon-style Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="🔍 Search for items, brands..."
            className="w-full max-w-xl px-4 py-2 rounded-l-md border-none shadow-md focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ backgroundColor: "white" }}
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-md font-semibold shadow-md">
            Search
          </button>
        </div>

        {/* Loading/Error States */}
        {loading && (
          <div className="text-center text-gray-500 text-lg">Loading products...</div>
        )}

        {error && (
          <div className="text-center text-red-600 text-lg">{error}</div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default ProductList;
