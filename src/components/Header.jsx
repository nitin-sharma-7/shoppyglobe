import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Header() {
  // Selecting cart items from the Redux store
  const cart = useSelector((store) => store.cart.items);

  return (
    <>
      {/* Fixed navigation bar */}
      <div className="fixed w-screen">
        <div className="flex justify-between items-center h-16 mx-auto px-10 text-lg rounded-md shadow-md bl shadow-gray-500 bg-white">
          {/* Logo / Brand Name */}
          <div className="font-extrabold bg-blue-600 text-white px-3 py-1 rounded relative">
            ShoppyGlobe
          </div>

          {/* Navigation Links */}
          <div className="flex gap-5 items-center hover:cursor-pointer">
            {/* Home Link */}
            <p className="hover:text-blue-600 transition-colors relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
              <NavLink to="/">Home</NavLink>
            </p>

            {/* Cart Link with Icon and Item Count */}
            <NavLink to="/cart">
              <div className="relative hover:text-blue-600 transition-colors inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                {/* Cart Icon */}
                <img
                  className="h-8"
                  src="https://cdn-icons-gif.flaticon.com/6416/6416376.gif"
                  alt="Cart"
                />

                {/* Cart Item Count Badge */}
                <div className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                  {cart.length}
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
