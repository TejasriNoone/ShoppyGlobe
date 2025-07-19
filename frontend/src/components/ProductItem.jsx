import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span className="bg-yellow-100 text-blue-600 px-2 py-0.5 rounded-full">
            {product.category}
          </span>
          <span className="text-yellow-500">⭐ {product.rating}</span>
        </div>

        <h2 className="text-lg font-bold text-gray-800 truncate">{product.title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
        <span className="text-green-600 font-bold text-lg">
  ₹{Math.floor(product.price * 10)}
         </span>


          <button
            onClick={() => dispatch(addToCart(product))}
            className="text-sm bg-gradient-to-r from-yellow-600 to-yellow-400 text-white px-3 py-1 rounded-lg shadow hover:from-yellow-700 hover:to-blue-500 transition"
          >
            + Add
          </button>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="text-yellow-500 text-xs text-right mt-2 hover:underline"
        >
          View Details
        </Link>
      </div>
    
  );
}

export default ProductItem;
