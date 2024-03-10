import { TeamCardProps } from '@/utils/props/props';
import React from 'react';

const TeamCard: React.FC<TeamCardProps> = ({ name, img, role }) => {
  return (
    <div className="p-14 bg-tfp-gold-200 rounded-lg w-auto">
      <figure>
        <img src={img} alt="Team member" className="h-48 w-48 rounded-full" />
      </figure>
      <div>
        <h3 className="text-tfp-blue-100 text-lg text-center font-semibold pb-2 pt-4">
          {name}
        </h3>
        <p className="text-tfp-blue-100 text-center text-md">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
