import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import Searchbar from "../Components/Searchbar";

function Header() {
  return (
    <header className="shadow-md fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/src/assets/l_f_app.png"
                alt="Food App Logo"
                className="h-12 w-auto"
              />
            </Link>
            <div className="ml-4 hidden md:flex items-center gap-1.5">
              <button className="ml-4 text-gray-600 hover:text-orange-500 font-mediumb underline underline-offset-8">
                Other
              </button>
              <span className="">
                <img
                  src="/src/assets/arrow_icon.png"
                  alt="arrowicon"
                  className="w-5 h-auto [filter:invert(48%)_sepia(99%)_saturate(2532%)_hue-rotate(1deg)_brightness(103%)_contrast(106%)]"
                />{" "}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/corporate"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="mr-2">Swiggy Corporate</span>
            </Link>
            <Link
              to="/search"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="mr-2">Search</span>
            </Link>
            <Link
              to="/offers"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <MdLocalOffer className="mr-1" />
              <span>Offers</span>
              <span className="ml-1 mb-2 text-xs text-orange-500 font-semibold">
                NEW
              </span>
            </Link>
            <Link
              to="/help"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <BiSupport className="mr-1" />
              <span>Help</span>
            </Link>
            <Link
              to="/signin"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span>Sign In</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <FaShoppingCart className="mr-1" />
              <span>Cart</span>
              <span className="ml-1 bg-orange-500 text-white text-xs rounded-full px-2">
                0
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
