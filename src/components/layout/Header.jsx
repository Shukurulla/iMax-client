import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Bosh Sahifa", path: "/" },
    { name: "Xizmatlar", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Biz Haqimizda", path: "/about" },
    { name: "Aloqa", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white shadow-md dark:bg-slate-800 dark:text-white">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 dark:text-blue-400"
        >
          IMAX IT Company
        </Link>

        {/* Desktop Menu */}
        <nav className="items-center hidden space-x-8 md:flex">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-blue-700 dark:text-blue-400"
                  : "text-slate-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 ml-4 text-lg transition-colors rounded-full sm:ml-6 hover:bg-gray-100 dark:hover:bg-slate-700"
          aria-label={darkMode ? "Light mode" : "Dark mode"}
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-slate-700" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="p-2 ml-4 text-xl transition-colors rounded-full md:hidden hover:bg-gray-100 dark:hover:bg-slate-700"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-4 py-4 border-t md:hidden dark:border-slate-700">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-blue-700 dark:text-blue-400"
                    : "text-slate-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
