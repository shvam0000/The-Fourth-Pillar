import React from "react";
import Subcribe from "@/utils/images/keepintouch.png";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";

const KeepInTouch = () => {
  return (
    <div className="mx-10 my-10 md:mx-0">
      <div className="mx-auto rounded-lg bg-tfp-white-100 text-center md:flex md:h-80 lg:w-3/4">
        <figure className="w-full md:w-2/5">
          <Image
            src={Subcribe}
            alt="Keep in touch"
            height={400}
            width={320}
            className="rounded-lg md:rounded-l-lg"
          />
        </figure>
        <div className="mx-auto w-full py-5 text-center md:w-3/5">
          <h1 className="py-5 text-3xl text-tfp-gold-100">Keep In Touch</h1>
          <h1 className="px-6 py-5 text-center text-xl text-tfp-blue-100 md:px-24">
            Subscribe to our newsletter and never miss a new update from The
            Fourth Pillar.
          </h1>
          <div className="flex flex-col items-center justify-center py-5 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="mx-5 mb-3 w-3/4 border-b-2 border-tfp-gold-200 bg-transparent p-2 text-tfp-blue-100 focus:border-tfp-gold-100 focus:outline-none md:mx-0 md:mb-0 md:mr-3 md:w-1/2"
            />
            <button className="h-12 w-12 rounded-full bg-tfp-gold-100 text-tfp-white-100">
              <div className="flex items-center justify-center text-3xl">
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
