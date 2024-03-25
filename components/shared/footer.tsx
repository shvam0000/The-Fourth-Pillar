import React from 'react';
import Logo from '@/utils/images/logo.png';
import Image from 'next/image';
import { IM_Fell_Great_Primer } from 'next/font/google';
import { SocialIcon } from 'react-custom-social-icons';
import Link from 'next/link';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <div className={`${IMFellGreatPrimer.className} px-10`}>
      <div className="flex justify-between items-center">
        <Link href="/">
          <figure className="py-5">
            <Image src={Logo} alt="logo" width={300} height={200} />
          </figure>
        </Link>
        <div className="flex">
          <Link href="https://www.x.com/">
            <figure className="px-2 rounded-full">
              <SocialIcon network="twitter" size="small" />
            </figure>
          </Link>
          <Link href="https://www.facebook.com/">
            <figure className="text-[#3b5998] px-2 rounded-full">
              <SocialIcon network="facebook" size="small" />
            </figure>
          </Link>
          <Link href="https://www.linkedin.com/">
            <figure className="px-2 rounded-full">
              <SocialIcon network="linkedin" size="small" />
            </figure>
          </Link>
          <Link href="https://www.instagram.com/">
            <figure className="px-2 rounded-full">
              <SocialIcon network="instagram" size="small" />
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
