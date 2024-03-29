import React, { useState } from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { IoCloseSharp } from 'react-icons/io5';

import {
  Capabilities,
  VoiceOf4th,
  AboutUs,
  UttarakhandInsights,
} from '@/utils/const';
import Logo from '@/utils/images/logo.png';
import { Menu } from '@/utils/icons';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenCapabilities, setIsOpenCapabilities] = useState<boolean>(false);
  const [isOpenVoiceOf4th, setIsOpenVoiceOf4th] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isAboutUs, setIsAboutUs] = useState<boolean>(false);
  const [isUttrakhandInsights, setIsUttrakhandInsights] =
    useState<boolean>(false);

  const toggleAboutUsMenu = () => {
    setIsAboutUs(!isAboutUs);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUttarakhanInsightsMenu = () => {
    setIsUttrakhandInsights(!isUttrakhandInsights);
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
        <div className="hidden items-center justify-center md:flex">
          <button
            onClick={() => toggleSlidingMenu()}
            className="block text-5xl font-bold text-[#BA9C57]">
            <Menu />
          </button>

          <Link
            className="mx-4 text-justify text-tfp-white-100 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300"
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
              className="mx-4 rounded-lg text-justify text-sm text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 lg:text-2xl">
              Services
            </Link>
            {isOpenCapabilities && (
              <div className="absolute left-0 right-0 top-full mx-auto w-max rounded-md bg-tfp-blue-200 p-2 px-5 pl-4 backdrop-blur-lg">
                {Capabilities.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="text-tfp-black-100 mb-2 block w-96 text-lg text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={toggleAboutUsMenu}
            onMouseLeave={toggleAboutUsMenu}>
            <Link
              className="mx-4 text-justify text-sm text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 lg:text-2xl"
              href="/about">
              About Us
            </Link>
            {isAboutUs && (
              <div className="absolute left-0 right-0 top-full mx-auto w-full rounded-md bg-tfp-blue-200 p-2 px-5 pl-4 backdrop-blur-lg">
                {AboutUs.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="text-tfp-black-100 mb-2 block w-96 text-lg text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={toggleUttarakhanInsightsMenu}
            onMouseLeave={toggleUttarakhanInsightsMenu}>
            <Link
              className="mx-4 text-justify text-sm text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 lg:text-2xl"
              href="/uttarakhand-insights">
              Insights
            </Link>
            {isUttrakhandInsights && (
              <div className="absolute left-0 right-0 top-full mx-auto w-fit rounded-md bg-tfp-blue-200 p-2 px-5 pl-4 backdrop-blur-lg">
                {UttarakhandInsights.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="text-tfp-black-100 mb-2 block w-96 text-lg text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
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
              className="mx-4 rounded-lg text-justify text-sm text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 lg:text-2xl">
              Raibar
            </Link>
            {isOpenVoiceOf4th && (
              <div className="absolute left-0 right-0 top-full mx-auto w-full rounded-md bg-tfp-blue-200 p-2 px-5 pl-4 backdrop-blur-lg">
                {VoiceOf4th.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="text-md text-tfp-black-100 mb-2 block text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* End of modified "About" dropdown section */}
          <Link
            className="mx-4 text-justify text-sm text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 lg:text-2xl"
            href="/careers">
            Careers
          </Link>
          <Link
            className="mx-4 text-justify text-sm text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300 lg:text-2xl"
            href="/contact-us">
            Contact Us
          </Link>
        </div>
        <div
          className={`fixed inset-0 transform ${
            isMenuVisible ? 'translate-x-0' : '-translate-x-full'
          } z-50 h-screen w-1/3 bg-tfp-gold-200 transition-transform duration-300 ease-in-out`}>
          {/* Menu content goes here */}
          <div
            onClick={toggleSlidingMenu}
            className="absolute right-10 top-10 text-2xl text-tfp-blue-100 transform translate hover:scale-125 ease-in-out duration-300 cursor-pointer">
            <IoCloseSharp />
          </div>
          <div className="flex px-10 text-tfp-blue-100 py-16 text-2xl">
            <div>
              <Link
                href="/capabilities"
                className="block py-2 transition-colors duration-300 ease-in-out hover:text-tfp-white-100">
                Services
              </Link>
              <Link
                href="/about"
                className="block py-2  transition-colors duration-300 ease-in-out hover:text-tfp-white-100">
                About Us
              </Link>
              <Link
                href="/uttarakhand-insights"
                className="mb-2 block py-2 transition-colors duration-300 ease-in-out hover:text-tfp-white-100">
                Insights
              </Link>
              <Link
                href="/voice-of-fourth"
                className="block py-2  transition-colors duration-300 ease-in-out hover:text-tfp-white-100">
                Raibar
              </Link>
              <Link
                href="/careers"
                className="block py-2 transition-colors duration-300 ease-in-out hover:text-tfp-white-100">
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="block py-2 transition-colors duration-300 ease-in-out hover:text-tfp-white-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex">
            <button
              onClick={toggleMenu}
              className="block text-3xl font-bold text-[#F4E697]">
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
            <div className="py-2 md:hidden">
              <Link
                href="/capabilities"
                className="block py-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                Services
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                About Us
              </Link>
              <Link
                href="/uttarakhand-insights"
                className="mb-2 block py-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                Insights
              </Link>
              <Link
                href="/voice-of-fourth"
                className="block py-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                Raibar
              </Link>
              <Link
                href="/careers"
                className="block py-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="block py-2 text-gray-300 transition-colors duration-300 ease-in-out hover:text-tfp-gold-300">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
