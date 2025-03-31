import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//router
import { createBrowserRouter, RouterProvider } from "react-router";

import { lazy } from "react";
import { Suspense } from "react";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import ErrorPage from "./components/Errorpage.jsx";

const ProductList = lazy(() => import("./components/ProductList.jsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>loading... please wait.....</>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/productdetail/:productname",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
