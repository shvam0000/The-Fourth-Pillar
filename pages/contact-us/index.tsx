import { ContactForm } from '@/components/contact';
import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';
import Head from 'next/head';
import { Metadata } from 'next';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us page',
};

const ContactUsPage = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContactForm />
    </div>
  );
};

export default ContactUsPage;
