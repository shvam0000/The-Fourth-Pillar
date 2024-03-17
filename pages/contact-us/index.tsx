import { ContactForm } from '@/components/contact';
import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const ContactUsPage = () => {
  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <ContactForm />
    </div>
  );
};

export default ContactUsPage;
