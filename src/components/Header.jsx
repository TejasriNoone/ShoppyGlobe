import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-[#131921] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400 hover:opacity-90">
          ShoppyGlobe
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm">
          <Link to="/" className="hover:text-yellow-400 transition duration-200">
            Home
          </Link>
          <Link to="/checkout" className="hover:text-yellow-400 transition duration-200">
            Checkout
          </Link>
          <Link
            to="/cart"
            className="relative inline-flex items-center group transition duration-200"
          >
            {/* Black Shopping Cart Icon */}
            <ShoppingCart className="w-5 h-5 text-black" />

            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
