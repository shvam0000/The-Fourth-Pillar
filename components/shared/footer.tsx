import React from 'react';
import Logo from '@/utils/images/logo.png';
import Image from 'next/image';
import { IM_Fell_Great_Primer } from 'next/font/google';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <div className={`${IMFellGreatPrimer.className} px-10`}>
      <div className="flex justify-between items-center">
        <figure className="py-5">
          <Image src={Logo} alt="logo" width={300} height={200} />
        </figure>
        <div className="flex justify-center items-center">
          <div className="px-4 text-2xl text-tfp-white-100">About Us</div>
          <div className="px-4 text-2xl text-tfp-white-100">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
