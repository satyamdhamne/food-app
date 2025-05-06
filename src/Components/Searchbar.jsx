import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-2xl font-bold mb-4">Search Restaurants</h1>
      <div className="max-w-sm space-y-3 mt-3 relative">
        <input
          type="text"
          className="py-2.5 sm:py-3 px-4 pr-10 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Search For Restaurants in your cities"
        />
        <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}

export default Searchbar;