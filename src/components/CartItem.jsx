// src/components/CartItem.jsx
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const inrPrice = Math.floor(item.price * 80);
  const totalPrice = Math.floor(item.price * item.quantity * 80);

  return (
    <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-200 hover:shadow-md transition duration-200">
      {/* Image & Title */}
      <div className="flex items-center gap-4 w-full sm:w-1/3">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-24 h-24 rounded object-cover border border-gray-300"
        />
        <div>
          <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
          <p className="text-gray-600 text-sm">Price: ₹{inrPrice}</p>
          <p className="text-gray-700 text-sm">
            Total: <span className="font-semibold text-blue-700">₹{totalPrice}</span>
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 sm:w-1/3 justify-center">
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="w-9 h-9 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 text-xl font-bold"
        >
          −
        </button>
        <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="w-9 h-9 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 text-xl font-bold"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <div className="sm:w-1/3 flex justify-end w-full">
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-medium"
        >
          <Trash2 className="w-4 h-4" />
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CartItem;
