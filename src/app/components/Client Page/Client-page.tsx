import React from "react";
import Marquee from "react-fast-marquee";
import FBLogo from "../../images/Company Logos/1000225407.jpg";
import MUttonStall from "../../images/Company Logos/20250623_212025.jpg";
import logo3 from "../../images/Company Logos/20250623_212003.jpg";
import logo4 from "../../images/Company Logos/1000160559.png";

import Image from "next/image";

function ClientPage() {
  return (
    <div id="about" className="p-10">
      <h2 className="text-white">CLIENTS</h2>
      <div className="mt-5">
        <span className="text-white text-4xl font-bold mission-text">
          Our Clients
        </span>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <Marquee speed={20} className="gap-4">
            <Image
              src={FBLogo}
              alt="Client Logo"
              width={100}
              height={100}
              className="ml-3"
            />
            <Image
              src={MUttonStall}
              alt="Client Logo"
              width={100}
              height={100}
              className="ml-3"
            />
            <Image
              src={logo3}
              alt="Client Logo"
              width={100}
              height={100}
              className="ml-3"
            />
            <Image
              src={logo4}
              alt="Client Logo"
              width={200}
              height={100}
              className="ml-3 mt-3"
            />
          </Marquee>
        </div>
        <div className="text-white text-xl font-medium">
          <div className=" bg-blue-900 w-full h-40 justify-center p-10 rounded-4xl fade-in-25">
            <span className="font-serif text-xs">
              “They’ve been an essential part of our brand promotion. The video
              reels they created for our projects were sharp, professional, and
              perfectly captured our on-site work. Highly recommend for anyone
              in construction!”
            </span>
            <div className="font-serif text-xs flex-row">
              <Image src={logo3} className=" w-8 h-8 rounded-2xl"  alt="new"/>
              <div className= 'grid-cols-2'>
                <span>Rayan Construction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
