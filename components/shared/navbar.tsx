import React, { useState } from 'react';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className={`${lora.className}  p-4`}>
        <div className="hidden md:flex justify-center items-center ">
          <a
            href="/"
            className="mx-4 text-xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-100">
            Home
          </a>
          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <a
              href="#"
              className="mx-4 text-xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-100 rounded-lg">
              About
            </a>
            {isOpen && (
              <div className="absolute bg-transparent backdrop-blur-lg p-2 shadow-md rounded-md w-full mx-auto right-0 left-0 top-full">
                <a
                  href="/about"
                  className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-100">
                  Sub-Item 1
                </a>
                <a
                  href="/about"
                  className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-100">
                  Sub-Item 2
                </a>
                <a
                  href="/about"
                  className="block text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-100">
                  Sub-Item 3
                </a>
              </div>
            )}
          </div>
          {/* End of modified "About" dropdown section */}
          <a
            className="text-tfp-white-100 text-xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-100"
            href="/contact">
            Contact
          </a>
        </div>
        <div>
          <button onClick={toggleMenu} className="block md:hidden">
            Menu
          </button>
          {isOpen && (
            <div className="md:hidden">
              <a
                href="/"
                className="block mb-2 text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-100">
                Home
              </a>
              <a
                href="/about"
                className="block mb-2 text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-100">
                About
              </a>
              <a
                href="/contact"
                className="block text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-100">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
