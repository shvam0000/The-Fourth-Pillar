import React, { useState } from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

import { UKToday, Capabilities, VoiceOf4th } from '@/utils/const';
import Logo from '@/utils/images/logo.png';
import { Menu } from '@/utils/icons';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenUKToday, setIsOpenUKToday] = useState<boolean>(false);
  const [isOpenCapabilities, setIsOpenCapabilities] = useState<boolean>(false);
  const [isOpenVoiceOf4th, setIsOpenVoiceOf4th] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUKTodayMenu = () => {
    setIsOpenUKToday(!isOpenUKToday);
  };

  const toggleCapabilitiesMenu = () => {
    setIsOpenCapabilities(!isOpenCapabilities);
  };

  const toggleVoiceOf4thMenu = () => {
    setIsOpenVoiceOf4th(!isOpenVoiceOf4th);
  };

  const toggleSlidingMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <nav className="p-4">
        <div className="hidden md:flex justify-center items-center">
          <button
            onClick={() => toggleSlidingMenu()}
            className="block text-5xl text-tfp-gold-100 font-bold">
            <Menu />
          </button>

          <Link
            className="text-tfp-white-100 text-justify mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/">
            <figure className="md:mb-3">
              <Image
                src={Logo}
                alt="The Fourth Perspective"
                height={100}
                width={370}
              />
            </figure>
          </Link>
          <div
            className="relative"
            onMouseEnter={toggleCapabilitiesMenu}
            onMouseLeave={toggleCapabilitiesMenu}>
            <Link
              href="/capabilities"
              className="mx-4 text-sm text-justify lg:text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 rounded-lg">
              Capabilities
            </Link>
            {isOpenCapabilities && (
              <div className="absolute bg-tfp-blue-200 w-max backdrop-blur-lg p-2 pl-4 px-5 rounded-md mx-auto right-0 left-0 top-full">
                {Capabilities.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block mb-2 w-96 text-lg text-tfp-black-100 transition-colors duration-300 ease-in-out text-gray-300 hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            className="text-gray-300 text-sm text-justify lg:text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/about">
            About Us
          </Link>
          <Link
            href="/nativesofuk"
            className="mx-4 text-sm text-justify lg:text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
            Natives of UK
          </Link>
          <div
            className="relative"
            onMouseEnter={toggleUKTodayMenu}
            onMouseLeave={toggleUKTodayMenu}>
            <Link
              href="/uktoday"
              className="mx-4 text-sm text-justify lg:text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 rounded-lg">
              UK Today
            </Link>
            {isOpenUKToday && (
              <div className="absolute bg-tfp-blue-200 backdrop-blur-lg p-2 pl-4 px-5 rounded-md w-48 mx-auto right-0 left-0 top-full">
                {UKToday.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-gray-300 hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={toggleVoiceOf4thMenu}
            onMouseLeave={toggleVoiceOf4thMenu}>
            <Link
              href="/voice-of-fourth"
              className="mx-4 text-sm text-justify lg:text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 rounded-lg">
              Raibar
            </Link>
            {isOpenVoiceOf4th && (
              <div className="absolute bg-tfp-blue-200 backdrop-blur-lg p-2 pl-4 px-5 rounded-md w-full mx-auto right-0 left-0 top-full">
                {VoiceOf4th.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block mb-2 text-md text-tfp-black-100 transition-colors duration-300 ease-in-out text-gray-300 hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* End of modified "About" dropdown section */}
          <Link
            className="text-gray-300 text-sm text-justify lg:text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/careers">
            Careers
          </Link>
          <Link
            className="text-gray-300 text-sm text-justify lg:text-2xl mx-4 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
            href="/contact-us">
            Contact
          </Link>
        </div>
        <div
          className={`fixed inset-0 transform ${
            isMenuVisible ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 h-screen bg-white w-1/3`}>
          {/* Menu content goes here */}
          <div className="flex justify-around">
            hello
            <button onClick={toggleSlidingMenu}>close</button>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex">
            <button
              onClick={toggleMenu}
              className="block text-3xl text-tfp-gold-100 font-bold">
              <Menu />
            </button>
            <Link href="/" className="mx-10">
              <Image
                src={Logo}
                alt="The Fourth Pillar"
                height={200}
                width={240}
              />
            </Link>
          </div>
          {isOpen && (
            <div className="md:hidden py-2">
              <Link
                href="/capabilities"
                className="block text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 py-2">
                Capabilities
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 py-2">
                About Us
              </Link>
              <Link
                href="/nativesofuk"
                className="block mb-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 py-2">
                Natives of UK
              </Link>
              <Link
                href="/uktoday"
                className="block mb-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 py-2">
                UK Today
              </Link>
              <Link
                href="/voice-of-fourth"
                className="block text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 py-2">
                Raibar
              </Link>
              <Link
                href="/careers"
                className="block text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 py-2">
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="block text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 py-2">
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
