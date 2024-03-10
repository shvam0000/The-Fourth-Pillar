import { World } from '@/utils/icons';
import React from 'react';
import TeamCard from './team-card';
import { IM_Fell_Great_Primer_SC } from 'next/font/google';
import { IM_Fell_Great_Primer } from 'next/font/google';

const IMFellGreatPrimerSC = IM_Fell_Great_Primer_SC({
  weight: '400',
  subsets: ['latin'],
});

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const AboutHero = () => {
  return (
    <div className={`${IMFellGreatPrimerSC.className}`}>
      <h1
        className={`${IMFellGreatPrimer.className} flex justify-center items-center py-5 text-2xl text-tfp-white-100`}>
        About Us
      </h1>
      <div
        className={`${IMFellGreatPrimer.className} flex justify-center items-center pb-5 text-4xl text-tfp-white-100`}>
        We&apos;re a Distributed Team
      </div>
      <figure className="flex justify-center items-center">
        <World />
      </figure>
      <div
        className={`${IMFellGreatPrimer.className} flex justify-evenly items-center py-5`}>
        <div>
          <TeamCard
            name="Samarth Khanna"
            role="Co-Founder"
            img="https://via.placeholder.com/150"
          />
        </div>
        <TeamCard
          name="Gargi"
          role="Co-Founder"
          img="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};

export default AboutHero;
