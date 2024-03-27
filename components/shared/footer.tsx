import React from "react";
import Logo from "@/utils/images/logo.png";
import Image from "next/image";
import { IM_Fell_Great_Primer } from "next/font/google";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { SocialMediaLinks } from "@/utils/const";

const IMFellGreatPrimer = IM_Fell_Great_Primer({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className={`${IMFellGreatPrimer.className} px-10`}>
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/">
          <figure className="py-5">
            <Image src={Logo} alt="logo" width={300} height={200} />
          </figure>
        </Link>
        <div className="flex items-center justify-center pb-5 md:pb-0">
          {SocialMediaLinks.map((link) => (
            <figure className="px-2" key={link.id}>
              <SocialIcon url={link.link} style={{ height: 35, width: 35 }} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
