import React from "react";
import { useRouteError, Link } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  // Get error details with fallbacks
  const errorStatus = error?.status || "404";
  const errorMessage = error?.statusText || error?.message || "Page not found";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-5">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-red-600 px-6 py-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <img
              className="h-20"
              src="https://cdn-icons-gif.flaticon.com/17905/17905279.gif"
              alt="404 image"
            />{" "}
            {errorStatus}
          </h1>
          <p className="text-red-100 mt-2">Oops! Something went wrong</p>
        </div>

        <div className="px-6 py-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {errorMessage}
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't find the page you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/"
                className="px-5 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
              >
                To Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-5 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
