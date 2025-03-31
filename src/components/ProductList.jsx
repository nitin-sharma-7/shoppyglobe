import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

function ProductList() {
  const [productsdata, err] = useFetch("https://dummyjson.com/products");

  const [cat, setCat] = useState("");
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (productsdata) {
      const filtered = productsdata
        .filter((val) => cat === "" || val.category.includes(cat))
        .filter((val) => val.title.toLowerCase().includes(input.toLowerCase()));
      setData(filtered);
    } else {
      // console.log(err);
    }
  }, [productsdata, cat, input, err]);
  const cartdata = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="py-8 bg-gray-50 pt-10  md:pt-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-4/5 my-4 mx-auto">
          <select
            onChange={(e) => setCat(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          >
            <option value="">All Categories</option>

            {productsdata &&
              [...new Set(productsdata.map((val) => val.category))].map(
                (val, i) => {
                  return (
                    <option key={i} value={val}>
                      {val.slice(0, 1).toUpperCase() + val.slice(1)}
                    </option>
                  );
                }
              )}
          </select>
          <input
            type="text"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
            placeholder="Search products..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="flex flex-wrap sm:gap-10 w-4/5 my-8 mx-auto justify-center gap-x-5 gap-y-8">
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
