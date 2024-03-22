import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import { Metadata } from 'next';
import Head from 'next/head';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UK Today',
  description: 'UK Today page',
};

const UKToday = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <Head>
        <title>UK Today</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="flex justify-center items-center text-3xl text-tfp-gold-200 py-10">
        UK Today
      </h1>
      <h1 className="flex justify-center items-center text-5xl text-tfp-gold-100 py-10">
        Coming Soon...
      </h1>
    </div>
  );
};

export default UKToday;
