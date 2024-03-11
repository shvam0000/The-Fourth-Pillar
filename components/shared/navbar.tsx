import React, { useState } from 'react';
import { IM_Fell_Great_Primer_SC } from 'next/font/google';
import Link from 'next/link';
import { UKToday, Services, VoiceOf4th } from '@/utils/const';
import Logo from '@/utils/images/logo.png';
import Image from 'next/image';

const IMFellGreatPrimerSC = IM_Fell_Great_Primer_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenUKToday, setIsOpenUKToday] = useState<boolean>(false);
  const [isOpenServices, setIsOpenServices] = useState<boolean>(false);
  const [isOpenVoiceOf4th, setIsOpenVoiceOf4th] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUKTodayMenu = () => {
    setIsOpenUKToday(!isOpenUKToday);
  };

  const toggleServicesMenu = () => {
    setIsOpenServices(!isOpenServices);
  };

  const toggleVoiceOf4thMenu = () => {
    setIsOpenVoiceOf4th(!isOpenVoiceOf4th);
  };

  return (
    <div className={`${IMFellGreatPrimerSC.className}`}>
      <nav className="p-4">
        <div className="hidden md:flex justify-center items-center ">
          <Link
            href="/nativesofuk"
            className="mx-4 text-2xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
            Natives of UK
          </Link>
          {/* About */}
          <div
            className="relative"
            onMouseEnter={toggleUKTodayMenu}
            onMouseLeave={toggleUKTodayMenu}>
            <Link
              href="/uktoday"
              className="mx-4 text-2xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 rounded-lg">
              UK Today
            </Link>
            {isOpenUKToday && (
              <div className="absolute bg-tfp-blue-200 backdrop-blur-lg p-2 pl-4 px-5 rounded-md w-48 mx-auto right-0 left-0 top-full">
                {UKToday.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* End of modified "About" dropdown section */}
          {/* Servives Section */}
          <div
            className="relative"
            onMouseEnter={toggleServicesMenu}
            onMouseLeave={toggleServicesMenu}>
            <Link
              href="/services"
              className="mx-4 text-2xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 rounded-lg">
              Services
            </Link>
            {isOpenServices && (
              <div className="absolute bg-tfp-blue-200 w-56 backdrop-blur-lg p-2 pl-4 px-5 rounded-md mx-auto right-0 left-0 top-full">
                {Services.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block mb-2 w-96 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* End of "Services" section */}
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/">
            <figure>
              <Image src={Logo} alt="The Fourth Perspective" />
            </figure>
          </Link>
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/about">
            About Us
          </Link>
          {/* About */}
          <div
            className="relative"
            onMouseEnter={toggleVoiceOf4thMenu}
            onMouseLeave={toggleVoiceOf4thMenu}>
            <Link
              href="/voice-of-fourth"
              className="mx-4 text-2xl text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 rounded-lg">
              Voice of 4th
            </Link>
            {isOpenVoiceOf4th && (
              <div className="absolute bg-tfp-blue-200 backdrop-blur-lg p-2 pl-4 px-5 rounded-md w-full mx-auto right-0 left-0 top-full">
                {VoiceOf4th.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-tfp-white-100 hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* End of modified "About" dropdown section */}
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/careers">
            Careers
          </Link>
          <Link
            className="text-tfp-white-100 text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/contact-us">
            Contact
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
