import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalINR = Math.floor(total * 80); // 1 USD = ₹80

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your Cart is empty.</p>
      ) : (
        <>
          <div className="bg-white shadow-sm rounded-md p-6 mb-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex justify-between items-center bg-white p-4 shadow-sm rounded-md">
            <p className="text-xl font-semibold text-gray-800">
              Subtotal ({cartItems.length} items):{" "}
              <span className="text-red-600 font-bold">₹{totalINR}</span>
            </p>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
