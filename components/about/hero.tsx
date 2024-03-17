import { World } from '@/utils/icons';
import React from 'react';
import TeamCard from './team-card';

import { IM_Fell_Great_Primer } from 'next/font/google';
import { Team } from '@/utils/const';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const AboutHero = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <h1
        className={`flex justify-center items-center lg:py-5 text-xl md:text-2xl text-tfp-gold-200`}>
        About Us
      </h1>
      <div
        className={`${IMFellGreatPrimer.className} flex justify-center items-center lg:pb-5 text-2xl md:text-4xl text-tfp-gold-100`}>
        We&apos;re a Distributed Team
      </div>
      <figure className="flex justify-center items-center">
        <World />
      </figure>
      <div
        className={`${IMFellGreatPrimer.className} flex-wrap flex justify-evenly items-center m-5 p-5`}>
        {Team.map((member) => {
          return (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              img="https://via.placeholder.com/150"
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutHero;
