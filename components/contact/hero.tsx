import React from 'react';
import { IM_Fell_Great_Primer } from 'next/font/google';

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: '400',
  subsets: ['latin'],
});

const ContactForm = () => {
  return (
    <section className={`${IMFellGreatPrimer.className}`}>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-tfp-gold-200">
          Contact Us
        </h2>
        <p className="mb-8 font-light text-center text-tfp-gold-100 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-tfp-gold-100">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-lg font-medium text-tfp-gold-100">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-tfp-gold-100">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-md font-lg text-center text-tfp-blue-100 bg-tfp-gold-100 rounded-lg">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
