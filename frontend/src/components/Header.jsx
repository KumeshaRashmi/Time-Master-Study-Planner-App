import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon

function Header() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo / Title */}
      <h1 className="text-4xl text-red-500 font-bold">
        <Link to="/" className="hover:text-red-700">Time Master</Link>
      </h1>

      {/* Search Bar */}
      <div className="relative w-[600px] mx-auto mb-8"> {/* Custom width */}
        <div className="flex items-center border border-gray-300 rounded-full shadow-lg w-full">
          <input
            type="text"
            placeholder="What do you want to Search?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            className="w-full pl-6 py-2 text-gray-700 placeholder-gray-500 rounded-full focus:outline-none"
          />
          <div className="absolute right-3 text-black p-2 rounded-full cursor-pointer">
            <FaSearch className="text-xl" /> {/* Search Icon */}
          </div>
        </div>
      </div>

      {/* Profile and Navigation */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/"
            className="text-lg text-gray-700 hover:text-red-500 font-medium transition duration-300 ease-in-out "
          >
            Home
          </Link>
          <Link
            to="/pomodoro"
            className="text-lg text-gray-700 hover:text-red-500 font-medium transition duration-300 ease-in-out "
          >
            Timer
          </Link>
          <Link
            to="/about"
            className="text-lg text-gray-700 hover:text-red-500 font-medium transition duration-300 ease-in-out "
          >
            About Us
          </Link>
        </div>
        
        {/* Profile Photo (Avatar) */}
        <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/src/assets/Avatar.jfif" // Replace with your avatar URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
