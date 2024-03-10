import { ContactForm } from '@/components/contact';
import React from 'react';
import { IM_Fell_Great_Primer_SC } from 'next/font/google';

const IMFellGreatPrimerSC = IM_Fell_Great_Primer_SC({
  weight: '400',
  subsets: ['latin'],
});

const ContactUsPage = () => {
  return (
    <div className={`${IMFellGreatPrimerSC.className}`}>
      <ContactForm />
    </div>
  );
};

export default ContactUsPage;
