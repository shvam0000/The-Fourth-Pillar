import React from 'react';
import Banner from '@/utils/images/banner.png';
import Image from 'next/image';
import { IM_Fell_Great_Primer_SC } from 'next/font/google';

const IMFellGreatPrimerSC = IM_Fell_Great_Primer_SC({
  weight: '400',
  subsets: ['latin'],
});

export const Hero = () => {
  return (
    <div className={`${IMFellGreatPrimerSC.className}`}>
      <figure className="flex justify-center items-center">
        <Image
          height={500}
          width={600}
          src={Banner}
          alt="banner"
          className="bg-blend-darken"
        />
      </figure>
      <h1 className="flex justify-center items-center text-3xl md:text-5xl text-tfp-gold-100 font-medium">
        Empowering Uttrakhand
      </h1>
      <div className="flex justify-center items-center py-1">
        <h2 className="text-xl md:text-2xl font-medium text-tfp-gold-100 mx-4">
          Seek
        </h2>
        <h2 className="text-tfp-white-100 text-xl">|</h2>
        <h2 className="text-xl md:text-2xl font-medium text-tfp-gold-100 mx-4">
          Solve
        </h2>
        <h2 className="text-tfp-white-100 text-xl">|</h2>
        <h2 className="text-xl md:text-2xl font-medium text-tfp-gold-100 mx-4">
          Sustain
        </h2>
      </div>
    </div>
  );
};

export default Hero;
