import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Header() {
  const cart = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="fixed w-screen  ">
        <div className="flex justify-between items-center h-12 md:h-16 mx-auto px-10  mt-0 text-lg rounded-md shadow-md bl shadow-gray-500 bg-white ">
          <p className="font-extrabold bg-blue-600 text-white px-3 py-1 rounded">
            ShoppyGlobe
          </p>

          <div className="flex gap-5 items-center hover:cursor-pointer">
            <p className="hover:text-blue-600 transition-colors  relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
              <NavLink to="/">Home</NavLink>
            </p>
            <NavLink to="/cart">
              <div className="relative hover:text-blue-600 transition-colors   inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                <i className="fa-solid fa-cart-shopping text-xl hover:text-blue-600 transition-colors"></i>
                <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
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
