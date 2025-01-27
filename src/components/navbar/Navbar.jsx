import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="">
        <div className="px-6 md:px-20 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex gap-2 items-center">
              <img src="/src/assets/logo/logo.png" width={40} alt="Logo" />
              <h1 className="font-bold text-2xl italic">Craft</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
              <ul className="flex gap-10 items-center text-lg">
                <Link to="#" className="hover:underline">
                  Our Works
                </Link>
                <Link to="#" className="hover:underline">
                  Services
                </Link>
                <Link to="#" className="hover:underline">
                  About Us
                </Link>
              </ul>
            </div>

            {/* Contact Button */}
            <div className="hidden md:flex items-center px-8 py-3 bg-white text-gray-800 shadow outline-1 outline-slate-200 text-lg rounded-lg gap-2">
              <button>Contact Us</button>
              <img
                src="/src/assets/icons/phone-call.png"
                width={20}
                alt="Call"
              />
            </div>

            {/* Hamburger Icon (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none">
                <BiMenu className="text-4xl"/>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-gray-700 text-white md:hidden">
            <ul className="flex flex-col items-center gap-4 py-5 text-lg">
              <Link to="#" onClick={() => setIsOpen(false)}>
                Our Works
              </Link>
              <Link to="#" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="#" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-2 bg-white text-gray-800 shadow rounded-lg">
                Contact Us
              </button>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
