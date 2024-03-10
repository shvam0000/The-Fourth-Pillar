import React from 'react';
import Banner from '@/utils/images/banner.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div>
      <figure className="flex justify-center items-center pb-5 pt-10">
        <Image
          height={500}
          width={700}
          src={Banner}
          alt="banner"
          className="bg-blend-darken"
        />
      </figure>
      <h1 className="flex justify-center items-center text-4xl text-tfp-gold-100 font-medium">
        Empowering Uttrakhand
      </h1>
      <div className="flex justify-center items-center py-10">
        <h2 className="text-xl font-medium text-tfp-gold-100 mx-4">Seek</h2>
        <h2>|</h2>
        <h2 className="text-xl font-medium text-tfp-gold-100 mx-4">Solve</h2>
        <h2>|</h2>
        <h2 className="text-xl font-medium text-tfp-gold-100 mx-4">Sustain</h2>
      </div>
    </div>
  );
};

export default Hero;
