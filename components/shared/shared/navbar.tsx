import React, { useState } from 'react';
import { IM_Fell_Great_Primer_SC } from 'next/font/google';
import Link from 'next/link';

const IMFellGreatPrimerSC = IM_Fell_Great_Primer_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
    <div className={`${IMFellGreatPrimerSC.className}`}>
      <nav className="p-4">
        <div className="hidden md:flex justify-center items-center ">
          <Link
            href="/"
            className="mx-4 text-2xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
            Natives of UK
          </Link>
          {/* About */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link
              href="#"
              className="mx-4 text-2xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 rounded-lg">
              UK Today
            </Link>
            {isOpen && (
              <div className="absolute bg-tfp-blue-200 backdrop-blur-lg p-2 pl-4 px-5 rounded-md w-full mx-auto right-0 left-0 top-full">
                <Link
                  href="/about"
                  className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-300">
                  Sub-Item 1
                </Link>
                <Link
                  href="/about"
                  className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-300">
                  Sub-Item 2
                </Link>
                <Link
                  href="/about"
                  className="block text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-300">
                  Sub-Item 3
                </Link>
              </div>
            )}
          </div>
          {/* End of modified "About" dropdown section */}
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/contact">
            Services
          </Link>
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/contact">
            Logo
          </Link>
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/about">
            About Us
          </Link>
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/contact">
            Voice of 4th
          </Link>
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/contact">
            Careers
          </Link>
        </div>
        <div>
          <button onClick={toggleMenu} className="block md:hidden">
            Menu
          </button>
          {isOpen && (
            <div className="md:hidden">
              <Link
                href="/"
                className="block mb-2 text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                Home
              </Link>
              <Link
                href="/about"
                className="block mb-2 text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                About
              </Link>
              <Link
                href="/contact"
                className="block text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
