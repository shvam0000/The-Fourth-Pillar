import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const SocialConsultancyPage = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <h1 className="flex justify-center items-center text-3xl text-tfp-gold-200 py-10">
        Social Consultancy
      </h1>
      <h1 className="flex justify-center items-center text-5xl text-tfp-gold-100 py-10">
        Coming Soon...
      </h1>
    </div>
  );
};

export default SocialConsultancyPage;
