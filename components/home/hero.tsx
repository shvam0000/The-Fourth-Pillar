import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import Image from 'next/image';
import Marquee from 'react-easy-marquee';

import Picture1 from '@/utils/images/1.jpg';
import Picture2 from '@/utils/images/2.jpg';
import Picture3 from '@/utils/images/3.jpg';
import Picture4 from '@/utils/images/4.jpg';
import Picture5 from '@/utils/images/5.jpg';
import Picture6 from '@/utils/images/6.jpg';
import Picture7 from '@/utils/images/7.jpg';
import Picture8 from '@/utils/images/8.jpg';
import Picture9 from '@/utils/images/9.jpg';
import Picture10 from '@/utils/images/10.jpg';
import Picture11 from '@/utils/images/11.jpg';
import Picture12 from '@/utils/images/12.jpg';
import Picture13 from '@/utils/images/13.jpg';
import Picture14 from '@/utils/images/14.jpg';
import Picture15 from '@/utils/images/15.jpg';
import Picture16 from '@/utils/images/16.jpg';

import { KeepInTouch } from '../shared';
import { Map } from '@/utils/icons';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const Hero = () => {
  const images = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6];

  const images2 = [
    Picture7,
    Picture8,
    Picture9,
    Picture10,
    Picture11,
    Picture12,
    Picture13,
    Picture14,
    Picture15,
    Picture16,
  ];

  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <figure className="flex justify-center items-center">
        <Map />
      </figure>
      <h1 className="flex justify-center items-center text-3xl md:text-5xl text-tfp-gold-100 font-medium lg:pt-5 italic">
        Empowering Uttarakhand
      </h1>
      <div className="flex justify-center items-center py-10">
        <h2 className="text-3xl font-medium text-tfp-gold-100 mx-4">Seek</h2>
        <h2 className="text-2xl text-tfp-white-100">|</h2>
        <h2 className="text-3xl font-medium text-tfp-gold-100 mx-4">Solve</h2>
        <h2 className="text-2xl text-tfp-white-100">|</h2>
        <h2 className="text-3xl font-medium text-tfp-gold-100 mx-4">Sustain</h2>
      </div>

      <Marquee
        duration={15000}
        // background="#fafafa"
        height="200px"
        reverse={true}>
        {images.map((image, index) => (
          <Image
            src={image}
            alt="picsum"
            width={250}
            height={100}
            key={index}
            className="hover:scale-110 ease-in-out transform transition duration-500"
          />
        ))}
      </Marquee>
      <Marquee
        duration={15000}
        // background="#fafafa"
        height="200px"
        reverse={true}>
        {images2.map((image, index) => (
          <Image
            src={image}
            alt="picsum"
            width={250}
            height={100}
            key={index}
            className="hover:scale-110 ease-in-out transform transition duration-500"
          />
        ))}
      </Marquee>

      <div className="mt-16">
        <KeepInTouch />
      </div>
    </div>
  );
};

export default Hero;
