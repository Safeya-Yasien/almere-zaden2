import { useState } from "react";
import logo from "@assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 shadow-[0_5px_4px_-1px_rgba(145,158,171,0.2)]">
      <nav className=" border-gray-200  px-4 lg:px-6  bg-[#fff] h-[80px]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3  h-20" alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-2xl  text-sunset-orange rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Main Navbar */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1  pl-[30px] mt-[10px] duration-75 bg-white`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium text-[20px] lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 relative transition-all before:duration-500
                      before:content-[''] before:absolute before:bottom-0 before:left-0 before:bg-sunset-orange  before:h-[2px] 
                     ${
                       isActive
                         ? "text-sunset-orange before:w-full"
                         : "text-[#145333] before:w-0"
                     } hover:text-sunset-orange hover:before:w-full`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
