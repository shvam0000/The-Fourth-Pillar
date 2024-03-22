import { AboutHero } from '@/components/about';
import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import { Metadata } from 'next';
import Head from 'next/head';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
};

const AboutPage = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AboutHero />
    </div>
  );
};

export default AboutPage;
