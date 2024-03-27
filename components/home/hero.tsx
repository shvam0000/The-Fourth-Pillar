import React from "react";
import { IM_Fell_Great_Primer } from "next/font/google";
import Image from "next/image";
import Marquee from "react-easy-marquee";

import Picture1 from "@/utils/images/1.jpg";
import Picture2 from "@/utils/images/2.jpg";
import Picture3 from "@/utils/images/3.jpg";
import Picture4 from "@/utils/images/4.jpg";
import Picture5 from "@/utils/images/5.jpg";
import Picture6 from "@/utils/images/6.jpg";
import Picture7 from "@/utils/images/7.jpg";
import Picture8 from "@/utils/images/8.jpg";
import Picture9 from "@/utils/images/9.jpg";
import Picture10 from "@/utils/images/10.jpg";
import Picture11 from "@/utils/images/11.jpg";
import Picture12 from "@/utils/images/12.jpg";
import Picture13 from "@/utils/images/13.jpg";
import Picture15 from "@/utils/images/15.jpg";

import { KeepInTouch } from "../shared";
import { Map } from "@/utils/icons";

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const images = [
    Picture1,
    Picture2,
    Picture3,
    Picture4,
    Picture5,
    Picture6,
    Picture15,
  ];

  const images2 = [
    Picture7,
    Picture8,
    Picture9,
    Picture10,
    Picture11,
    Picture12,
    Picture13,
  ];

  return (
    <div className={`${IMFellGreatPrimer.className}`}>
      <figure className="flex items-center justify-center">
        <Map />
      </figure>
      <h1 className="flex items-center justify-center text-3xl font-medium italic text-tfp-gold-100 md:text-5xl lg:pt-5">
        Empowering Uttarakhand
      </h1>
      <div className="flex items-center justify-center py-10">
        <h2 className="mx-4 text-3xl font-medium text-tfp-gold-100">Seek</h2>
        <h2 className="text-2xl text-tfp-white-100">|</h2>
        <h2 className="mx-4 text-3xl font-medium text-tfp-gold-100">Solve</h2>
        <h2 className="text-2xl text-tfp-white-100">|</h2>
        <h2 className="mx-4 text-3xl font-medium text-tfp-gold-100">Sustain</h2>
      </div>

      {/* Marquee Row 1 */}
      <Marquee duration={15000} height="200px" reverse={true}>
        {images.map((image, index) => (
          <Image
            src={image}
            alt="picsum"
            width={350}
            height={200}
            key={index}
            className="transform transition duration-500 ease-in-out hover:scale-110"
          />
        ))}
      </Marquee>

      {/* Marquee Row 2 */}
      <Marquee
        duration={15000}
        // background="#fafafa"
        height="200px"
        reverse={true}
      >
        {images2.map((image, index) => (
          <Image
            src={image}
            alt="picsum"
            width={350}
            height={200}
            key={index}
            className="transform transition duration-500 ease-in-out hover:scale-110"
          />
        ))}
      </Marquee>

      <div className="mt-16">
        <KeepInTouch />
      </div>
    </div>
  );
};

export default Hero;
