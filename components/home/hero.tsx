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
import { KeepInTouch } from '../shared';
import { Map } from '@/utils/icons';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const Hero = () => {
  const images = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6];

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
        background="#fafafa"
        height="250px"
        reverse={true}>
        {images.map((image, index) => (
          <Image
            src={image}
            alt="picsum"
            width={900}
            height={250}
            key={index}
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
