import { AboutHero } from '@/components/about';
import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const AboutPage = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <AboutHero />
    </div>
  );
};

export default AboutPage;
