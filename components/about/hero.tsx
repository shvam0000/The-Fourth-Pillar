import { World } from '@/utils/icons';
import React from 'react';
import TeamCard from './team-card';

const AboutHero = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center py-5 text-2xl text-tfp-white-100">
        About Us
      </h1>
      <div className="flex justify-center items-center pb-5 text-4xl text-tfp-white-100">
        We're a Distributed Team
      </div>
      <figure className="flex justify-center items-center">
        <World />
      </figure>
      <div className="flex justify-evenly items-center py-5">
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
