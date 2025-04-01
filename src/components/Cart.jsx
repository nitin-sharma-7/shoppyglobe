import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addCart, reduceCart, removeItemFromCart } from "../utils/cartSlice";
import { NavLink } from "react-router";
function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate cart total

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const Shipping = cartTotal ? 10 : 0;
  const tax = cartTotal * 0.28;
  // Cart item quantity handlers
  function increase(val) {
    dispatch(addCart(val));
  }

  function decrease(val) {
    dispatch(reduceCart(val));
  }

  function deleteItem(val) {
    dispatch(removeItemFromCart(val));
  }

  return (
    <>
      {cartTotal ? (
        <div className="pt-20 min-h-screen bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-2xl font-bold text-gray-800 mb-8">
              <span>Shopping Cart</span>
              <span></span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items List */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((val) => (
                      <li key={val.id} className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-center">
                          {/* Product Image */}
                          <div className="sm:w-24 flex-shrink-0 mb-4 sm:mb-0">
                            <img
                              className="h-24 w-24 object-cover rounded border border-gray-200"
                              src={val.images[0]}
                              alt={val.title}
                            />
                          </div>

                          {/* Product Details */}
                          <div className="sm:ml-6 flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                              <div className="mb-4 sm:mb-0">
                                <h3 className="text-lg font-medium text-gray-800">
                                  {val.title}
                                </h3>
                                <div className="mt-1 text-sm text-gray-600">
                                  ${val.price} × {val.quantity} = $
                                  {val.price * val.quantity}
                                </div>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center">
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button
                                    onClick={() => decrease(val)}
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-2xl"
                                  >
                                    -
                                  </button>
                                  <span className="px-3 py-1 text-gray-800">
                                    {val.quantity}
                                  </span>
                                  <button
                                    onClick={() => increase(val)}
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-2xl"
                                  >
                                    +
                                  </button>
                                </div>

                                <button
                                  onClick={() => deleteItem(val)}
                                  className="ml-4 px-2 py-1 text-sm text-red-600 hover:text-white hover:bg-red-500 rounded-md transition-all duration-300"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-medium text-gray-800 mb-4">
                    Order Summary
                  </h2>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-800">${Shipping}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-800">${tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Total</span>
                        <span className="font-bold text-gray-800">
                          ${(cartTotal + tax + Shipping).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <NavLink to="/checkout">
                      <button className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition">
                        Proceed to Checkout
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center gap-5 pt-20 ">
          <span> Your Cart is Empty</span>
          <NavLink
            to="/"
            className="bg-blue-500 p-1 rounded-lg hover:p-2 transition-all duration-300 hover:bg-blue-700 font-bold text-white cursor-pointer"
          >
            {" "}
            Continue shoping
          </NavLink>
          <img
            src="https://cdn-icons-gif.flaticon.com/15576/15576195.gif"
            alt=" cart gif"
            className="h-20 "
          />
        </div>
      )}
    </>
  );
}

export default Cart;
