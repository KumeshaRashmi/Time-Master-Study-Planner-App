
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-0">
      {/* Footer Links Section */}
      <div className="py-8 px-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and App Name (Left-Aligned) */}
          <div className="flex items-center space-x-6">
            <img src="/src/assets/logo2.png" alt="Logo" className="h-20" />
            <h3 className="text-4xl font-bold text-red-500">TimeMaster</h3>
          </div>

          {/* Info Section (Centered) */}
          <div className="text-right-center">
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#account" className="hover:underline">Account Support</a></li>
              <li><a href="#listing" className="hover:underline">About Us</a></li>
              <li><a href="#ticketing" className="hover:underline">Contact Us</a></li>
              <li><a href="#terms" className="hover:underline">Terms and Services</a></li>
            </ul>
          </div>

          {/* Social Media Links (Right-Aligned) */}
          <div className="text-right-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.linkedin.com" className="hover:underline">Linkdin</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">&copy;2025 TimeMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}
