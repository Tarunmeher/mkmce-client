import { Bell, Mail, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { portalinfo } from '../../portalInfo.js';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    alert('Logged out!');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 bg-white shadow">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKg87vKCHZ5XdNBZqE1z4QEKeNX1ki2TNOMA&s"
          alt="Logo"
          className="w-6 h-6"
        />
        <h1 className="text-lg font-semibold">
          Welcome To <span className="text-black">{portalinfo.title}</span>
          <span className="text-gray-400 ml-1"> School Management System Portal</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        <Mail className="w-5 h-5 text-sky-500" />
        <div className="relative">
          <Bell className="w-5 h-5 text-orange-500" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </div>

        {/* User and Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="https://cdn.pixabay.com/photo/2024/08/30/14/02/ai-generated-9009341_1280.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <div className="font-medium">Chandrahashya Meher</div>
            </div>
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-50">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-sm"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
