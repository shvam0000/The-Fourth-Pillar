import { AboutHero } from '@/components/about';
import React from 'react';
import { IM_Fell_Great_Primer_SC } from 'next/font/google';

const IMFellGreatPrimerSC = IM_Fell_Great_Primer_SC({
  weight: '400',
  subsets: ['latin'],
});

const AboutPage = () => {
  return;
  <div className={`${IMFellGreatPrimerSC.className}`}>
    <AboutHero />
  </div>;
};

export default AboutPage;
