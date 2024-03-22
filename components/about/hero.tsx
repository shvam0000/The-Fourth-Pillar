import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import Image from 'next/image';

import TeamCard from './team-card';
import { Team } from '@/utils/const';
import Columbia from '@/utils/images/columbia.png';
import Yale from '@/utils/images/yale.png';

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
        Brought to you by the People From
      </div>
      <div className="flex justify-center items-center">
        <figure>
          <Image
            src={Columbia}
            alt="Columbia University"
            height={100}
            width={370}
          />
        </figure>
        <figure>
          <Image src={Yale} alt="Yale University" height={100} width={300} />
        </figure>
      </div>
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
