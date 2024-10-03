
'use client'
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-black fixed w-full z-50 top-0">
      <h1 className="text-white text-2xl">Logo</h1>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center gap-4`}
      >
        <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
        <li><a href="#listings" className="text-white hover:text-gray-400">Listings</a></li>
        <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
        <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
        <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        <li>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800">
            Sign in
          </button>
        </li>
      </ul>
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-1 bg-white"></span>
        <span className="block w-6 h-1 bg-white"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </div>
    </nav>
  );
};

export default NavBar;
