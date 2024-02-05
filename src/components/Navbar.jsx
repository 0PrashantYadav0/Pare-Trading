import React from "react";
import { Link } from "react-router-dom";
import LogoP from "./Logo";

function Navbar() {
  return (
    <header className="text-gray-800 body-font font-bold bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <LogoP className=" bg-transparent w-8 h-8" />
          <span className="ml-3 text-2xl font-bold text-red-700">
            PARE TRADING CO.
          </span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to="/contact-us" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
