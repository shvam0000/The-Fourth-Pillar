import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import { Map } from '@/utils/icons';
import Image from 'next/image';
import Filler from '@/utils/images/filler.png';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

export const Hero = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <figure className="flex justify-center items-center">
        <Map />
      </figure>
      <h1 className="flex justify-center items-center text-3xl md:text-5xl text-tfp-gold-100 font-medium pt-5">
        Empowering Uttrakhand
      </h1>
      <div className="py-5">
        <div className="md:flex flex-wrap justify-evenly items-center py-5">
          <h2 className="text-xl md:text-4xl font-medium text-tfp-gold-100 text-center md:p-0 py-4">
            Seek
          </h2>
          <figure className="text-center">
            <Image
              src={Filler}
              alt="Seek Image"
              // className="md:h-400 md:w-400 h-200 w-200"
              height={400}
              width={400}
            />
          </figure>
        </div>
        <div className="md:flex flex-wrap-reverse justify-evenly items-center py-5">
          <figure className="text-center ">
            <Image src={Filler} alt="Seek Image" height={400} width={400} />
          </figure>
          <h2 className="text-xl md:text-4xl font-medium text-tfp-gold-100 text-center md:p-0 py-4">
            Solve
          </h2>
        </div>
        <div className="md:flex flex-wrap justify-evenly items-center py-5">
          <h2 className="text-xl md:text-4xl font-medium text-tfp-gold-100 text-center md:p-0 py-4">
            Sustain
          </h2>
          <figure className="text-center">
            <Image src={Filler} alt="Seek Image" height={400} width={400} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
