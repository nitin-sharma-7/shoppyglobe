import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../utils/cartSlice";
import { NavLink } from "react-router";

function ProductCard({ details }) {
  // Destructuring product details
  const {
    title,
    images,
    rating,
    price,
    shippingInformation,
    discountPercentage,
  } = details;

  let yellowStar = "⭐⭐⭐⭐⭐"; // Star rating representation
  const dispatch = useDispatch();

  // Function to handle adding product to cart
  function addToCart(data) {
    dispatch(addCart(data));
  }

  return (
    <>
      <div
        className="flex flex-col w-[320px] sm:w-52 h-82 gap-2 justify-between overflow-hidden rounded-md p-2 shadow-md hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
       transition-all duration-300 "
      >
        {/* Link to Product Detail Page */}
        <NavLink
          to={`/ProductDetail/${title}`}
          state={details}
          title="click to show details"
        >
          {/* Product Image */}
          <img
            className="w-full h-32 object-contain rounded"
            src={images[0]}
            alt={title}
          />

          {/* Product Details */}
          <div className="flex flex-col justify-around h-36">
            <div className="font-semibold text-sm ">{title}</div>
            <div className="space-y-1">
              {/* Display star rating */}
              <div className="flex items-center text-sm">
                {yellowStar.slice(0, Math.floor(rating))}
                &nbsp; {rating}
              </div>

              {/* Product Price & Discount */}
              <div className="font-medium text-sm">
                <span> ${price}</span>
                &nbsp; &nbsp; &nbsp;
                <span className="line-through">
                  {((price * (discountPercentage + 100)) / 100).toFixed(2)}
                </span>
              </div>

              {/* Shipping Information */}
              <div className="font-light text-xs text-gray-600">
                {shippingInformation}
              </div>
            </div>
          </div>
        </NavLink>

        {/* Add to Cart Button */}
        <div>
          <button
            onClick={() => addToCart(details)}
            className="w-full bg-blue-500 hover:bg-blue-900 hover:font-bold text-white py-1 px-2 rounded text-sm font-medium transition-colors"
          >
            ADD cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
