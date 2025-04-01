import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import useFetch from "../hooks/useFetch"; // Import custom hook for fetching data
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

function ProductList() {
  // Fetch product data using the custom hook
  const [productsdata, err] = useFetch("https://dummyjson.com/products");

  // State variables for category filter, search input, and filtered data
  const [cat, setCat] = useState(""); // Stores selected category
  const [input, setInput] = useState(""); // Stores search input
  const [data, setData] = useState([]); // Stores filtered product list

  // Effect to filter products based on selected category and search input
  useEffect(() => {
    if (productsdata) {
      const filtered = productsdata
        .filter((val) => cat === "" || val.category.includes(cat)) // Filter by category
        .filter((val) => val.title.toLowerCase().includes(input.toLowerCase())); // Filter by search input
      setData(filtered);
    }
  }, [productsdata, cat, input, err]); // Re-run effect when dependencies change

  // Get cart data from Redux store (not used in this component)
  const cartdata = useSelector((store) => store.cart.items);

  return (
    <>
      {/* Product listing section */}
      <div className="py-8 bg-gray-50 pt-20">
        {/* Filters: Category dropdown & search input */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-4/5 my-4 mx-auto">
          {/* Category selection dropdown */}
          <select
            onChange={(e) => setCat(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          >
            <option value="">All Categories</option>

            {/* Dynamically generate unique category options */}
            {productsdata &&
              [...new Set(productsdata.map((val) => val.category))].map(
                (val, i) => {
                  return (
                    <option key={i} value={val}>
                      {val.charAt(0).toUpperCase() + val.slice(1)}
                    </option>
                  );
                }
              )}
          </select>

          {/* Search input field */}
          <input
            type="text"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
            placeholder="Search products..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>

        {/* Display product cards */}
        <div className="flex flex-wrap gap-x-12 gap-y-16 w-4/5 my-8 mx-auto justify-center">
          {data &&
            data.map((val) => {
              return <ProductCard key={val.id} details={val} />;
            })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
