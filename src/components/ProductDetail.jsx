import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router";
import { addCart } from "../utils/cartSlice";

function ProductDetail() {
  const location = useLocation();
  let state = location.state;
  const [review, setReview] = useState(false);
  const [fullImage, setFullImage] = useState(state.images[0]);
  const dispatch = useDispatch();

  // const params = useParams();

  // console.log(params);
  let yellowStar = "⭐⭐⭐⭐⭐";
  function handleClick(state) {
    dispatch(addCart(state));
  }
  function handleImage(img) {
    setFullImage(img);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 p-4 bg-white rounded-lg shadow pt-20">
        {/* Product Images */}
        <div className="md:w-2/5">
          <div className="mb-4 flex justify-center">
            {<img src={fullImage} className="max-h-80 object-contain" />}
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {state.images.map((img, index) => (
              <div
                onClick={() => handleImage(img)}
                key={index}
                className={`border-2 p-1 cursor-pointer rounded `}
              >
                <img
                  src={img}
                  alt={`${state.title}-${index}`}
                  className="h-16 w-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-3/5">
          <h1 className="text-2xl font-bold mb-2">{state.title}</h1>
          <div className="flex items-center mb-2">
            <span className="mr-2">
              {yellowStar.slice(0, Math.floor(state.rating))}
              &nbsp;
            </span>
            <span className="text-sm text-gray-600">({state.rating})</span>
            <span className="mx-2 text-gray-300">|</span>
            <span
              onClick={() => setReview(!review)}
              className="text-sm text-blue-600 cursor-pointer hover:underline"
            >
              {state.reviews.length} Reviews
            </span>
          </div>

          <div className="mb-4">
            <span className="text-red-500 text-2xl font-bold">
              ${state.price}
            </span>
            &nbsp; &nbsp;
            <span className="ml-2 text-gray-500 line-through">
              $
              {((state.price * (state.discountPercentage + 100)) / 100).toFixed(
                2
              )}
            </span>{" "}
            &nbsp;
            <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
              {state.discountPercentage}% OFF
            </span>
          </div>

          <div className="mb-4 text-sm">
            <span
              className={`font-medium ${
                state.stock > 10 ? "text-green-600" : "text-red-600"
              }`}
            >
              {state.availabilityStatus} • Only {state.stock} left
            </span>
          </div>

          <div className="mb-6 text-gray-700">
            <div className="mb-2">
              <span className="font-medium">Brand:</span> {state.brand}
            </div>
            <div className="mb-2">
              <span className="font-medium">SKU:</span> {state.sku}
            </div>
            <div>
              <span className="font-medium">Category:</span> {state.category}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={() => handleClick(state)}
              className="flex-1 bg-blue-500 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-medium"
            >
              Add to Cart
            </button>
            <NavLink to="/checkout" className="flex">
              <button
                className="flex-1 bg-orange-500 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium"
                onClick={() => handleClick(state)}
              >
                Buy Now
              </button>
            </NavLink>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center">
              <span className="mr-2">
                <img
                  className="h-8"
                  src="https://cdn-icons-gif.flaticon.com/6416/6416387.gif"
                  alt=" delivery truck"
                />
              </span>
              <span>{state.shippingInformation}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <img
                  className="h-8"
                  src="https://cdn-icons-gif.flaticon.com/8800/8800954.gif"
                  alt=""
                />
              </span>
              <span>{state.returnPolicy}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <img
                  className="h-8"
                  src="https://cdn-icons-gif.flaticon.com/6569/6569127.gif"
                  alt=""
                />
              </span>
              <span>{state.warrantyInformation}</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-medium mb-3">Product Description</h3>
            <p className="text-gray-700">{state.description}</p>
          </div>
        </div>
      </div>
      {review && (
        <div className="flex flex-col items-start pl-5">
          {state.reviews.map((val, i) => (
            <div
              key={i}
              className="border-b border-gray-200 pb-4 mb-4 last:border-0"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <span className="font-medium text-gray-800 mb-1 sm:mb-0">
                  {val.name}
                </span>
                <span className="text-sm text-gray-500">{val.date}</span>
              </div>
              <div className="mb-2 flex items-center">
                <span className="text-yellow-400 mr-2">
                  {yellowStar.slice(0, Math.floor(val.rating))}
                </span>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full">
                  {val.rating}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{val.reviewerName}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{val.comment}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductDetail;
