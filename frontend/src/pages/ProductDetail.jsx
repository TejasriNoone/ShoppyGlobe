import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Could not fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return <div className="p-10 text-center text-gray-600">Loading product...</div>;
  if (error)
    return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-xl shadow-lg p-6">
        <div className="w-full md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-contain rounded-lg border"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-sm">{product.description}</p>

          <div className="text-xl text-red-600 font-semibold">
            ₹{Math.floor(product.price * 80)} <span className="text-sm text-gray-500 ml-2">({product.price} USD)</span>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow-md"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
