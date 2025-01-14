import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import { FaSearch } from "react-icons/fa"; // Import the FaSearch icon
import { Menu, MenuItem, Button } from "@mui/material"; // Updated Material-UI components
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu

  // Handle dropdown menu open
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle dropdown menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo / Title */}
      <h1 className="text-4xl text-red-500 font-bold">
        <Link to="/" className="hover:text-red-700">
          Time Master
        </Link>
      </h1>

      {/* Search Bar */}
      <div className="relative w-[600px] mx-auto mb-8">
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

      {/* Dropdown Menu */}
      <div>
        <Button onClick={handleMenuClick}>
          <IoMdMenu className="text-xl" />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/" className="text-gray-700 hover:text-red-500">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/pomodoro" className="text-gray-700 hover:text-red-500">
              Timer
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/about" className="text-gray-700 hover:text-red-500">
              About Us
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/settings" className="text-gray-700 hover:text-red-500">
              Settings
            </Link>
          </MenuItem>
        </Menu>
      </div>

      {/* Profile and Navigation */}
      <div className="flex items-center space-x-6">
        {/* Profile Photo (Avatar) with Link */}
        <Link to="/profile">
          <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden cursor-pointer">
            <img
              src="/src/assets/Avatar.jfif" // Replace with your avatar URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
