import React from 'react';
import Subcribe from '@/utils/images/keepintouch.png';
import Image from 'next/image';
import { IoIosSend } from 'react-icons/io';

const KeepInTouch = () => {
  return (
    <div className="my-10">
      <div className="bg-tfp-white-100 opacity-70 w-3/4 mx-auto text-center lg:h-80 md:flex rounded-lg">
        <figure className="w-2/5">
          <Image
            src={Subcribe}
            alt="Keep in touch"
            height={400}
            width={320}
            className="rounded-l-lg"
          />
        </figure>
        <div className="w-3/5 mx-auto text-center py-5">
          <h1 className="text-3xl text-tfp-gold-100 py-5">Keep In Touch</h1>
          <h1 className="text-xl text-tfp-blue-100 py-5 px-24 text-center">
            Subscribe to our newsletter and never miss a new update from The
            Fourth Pillar.
          </h1>
          <div className="flex justify-center items-center py-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/2 p-2 bg-transparent border-b-2 border-tfp-gold-200 text-tfp-blue-100 focus:outline-none focus:border-tfp-gold-100"
            />
            <button className="bg-tfp-gold-100 text-tfp-white-100 h-12 w-12 rounded-r-full rounded-bl-full">
              <div className="text-3xl flex justify-center items-center">
                <IoIosSend />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepInTouch;
