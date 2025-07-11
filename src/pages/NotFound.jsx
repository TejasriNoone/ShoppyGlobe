import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-16 bg-gray-100 text-center">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-700 font-medium">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2">We can't seem to find the page you're looking for.</p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
