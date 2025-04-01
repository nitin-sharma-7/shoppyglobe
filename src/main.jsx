import { createRoot } from "react-dom/client"; // Import createRoot for rendering the app
import "./index.css"; // Import global styles
import App from "./App.jsx"; // Import the main App component

// Import router-related modules
import { createBrowserRouter, RouterProvider } from "react-router";

import { lazy, Suspense } from "react"; // Import lazy loading and Suspense for code splitting

// Import necessary components
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

// Import shimmer component for loading state
import ProductListShimmer from "./shimmerComponents/ProductListShimmer.jsx";

// Lazy load the ProductList component to improve performance
const ProductList = lazy(() => import("./components/ProductList.jsx"));

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Render the main App component
    errorElement: <ErrorPage />, // Show ErrorPage if an error occurs
    children: [
      {
        path: "/", // Home page route
        element: (
          <Suspense fallback={<ProductListShimmer />}>
            <ProductList /> {/* Lazy-loaded ProductList component */}
          </Suspense>
        ),
      },
      {
        path: "/productdetail/:productname", // Dynamic route for product details
        element: <ProductDetail />,
      },
      {
        path: "/cart", // Cart page route
        element: <Cart />,
      },
      {
        path: "/checkout", // Checkout page route
        element: <Checkout />,
      },
    ],
  },
]);

// Render the app and provide the router configuration
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
